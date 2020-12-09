import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams} from 'react-router-dom';
import Title from '../components/Title';
import ArticleForm from '../components/ArticleForm';
import useCustomForm from '../hooks/useCustomForm';
import update from '../utils/articleServices';

const SaveArticle = styled.button`
  margin: 5px;
  padding: 20px 30px;
  background-color: lightgrey;
`;

const EditArticle = ({ article }) => {
  const { id } = useParams();
  const history = useHistory();
   const [error, setError] = useState('');
  const {
    values,
    errors,
    handleChange,
    validateForm,
    submitable,
  } = useCustomForm({
    article,
  }); 

   const handleSubmit = (event) => {
    event.preventDefault();
    validateForm();
  }; 

   useEffect(() => {
    if (submitable) {
      const submitForm = () => {
        const articleData = async () => {
          const { error } = await update(id, values);
          if (error) {
            setError(error);
          } else {
            history.push(`/fagartikler/${id}`);
          }
        };
        articleData();
      };
      submitForm();
    }
  }, [submitable, history, id, values]); 

  return (
    <>
      <Title title={values.title} />
      <ArticleForm values={values} />
    </>
  );
};

export default EditArticle;
