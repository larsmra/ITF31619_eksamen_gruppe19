import React, {useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Title from '../components/Title';
import ArticleForm from '../components/ArticleForm';
import Error from '../components/Error';
import useCustomForm from '../hooks/useCustomForm';

const Create = styled.button`
    margin: 5px;
    padding: 20px 30px;
    background-color: lightgrey;
    
`;

const initalState = { title:'', ingress:'', content:'', author:'', category:''};

const CreateArticle = () =>{

    const history = useHistory();
    const [error, setError] = useState('');
    const {
      values,
      errors,
      handleChange,
      validateForm,
      submitable,
    } = useCustomForm({
      initalState,
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        validateForm();
    };
    
    const submitForm = () => {
        const articleData = async () => {
          try {
            const response = await axios.post(`http://localhost:3000/fagartikler`, {
              values,
            });
            if (response.status === 200) {
              setError('');
              history.push('/fagartikler');
            }
          } catch (error) {
            setError(error.message);
          }
        };
        articleData();
    };
    
    useEffect(() => {
        if (submitable) {
          submitForm();
        }
      }, [submitable]);

    return(
        <>
            <Title title="Ny artikkel" />

            <section>
                <ArticleForm 
                values={values}
                handleChange={handleChange}
                />
               <Create type='button' onClick={handleSubmit}> Create </Create>
            </section>
        </>
    );
};

export default CreateArticle;