import React from 'react';
import styled from 'styled-components';
import { useParams} from 'react-router-dom';
import axios from 'axios';
import Title from '../components/Title';
import ArticleForm from '../components/ArticleForm';
import useCustomForm from '../hooks/useCustomForm';

const SaveArticle = styled.button`
        margin: 5px;
        padding: 20px 30px;
        background-color: lightgrey;
`

const EditArticle = ({article}) =>{

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
    
    useEffect(() => {
        if (submitable) {
          submitForm();
        }
      }, [submitable]);

    return(
        <>
        <Title title={values.title}/>
        <section>
        <ArticleForm 
            values={values}
            handleChange={handleChange}/>
        <SaveArticle onClick={handleSubmit}/>
        </section>
        </>
    );
};

export default EditArticle;