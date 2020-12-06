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
          try {
            const response = await axios.put(`http://localhost:3000/fagartikler/${id}`, {
              values,
            });
            if (response.status === 200) {
              setError('');
              history.push(`/fagartikler/${id}`);
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