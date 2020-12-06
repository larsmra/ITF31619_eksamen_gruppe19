import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Title from '../components/Title';
import {remove} from '../utils/articleServices';
import { useAuthContext } from '../context/AuthProvider';

const StyledSection = styled.section`
  max-width: 90%;
  margin: auto;
`;

const StyledInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ArticleContent = styled.article``;

const ArticleAdminFunctions = styled.div`
  & > button {
    padding: 20px 30px;
    border-style: none;
    color: white;
  }
`;

const Delete = styled.button`
  background-color: #d04040;
  &:hover {
    background-color: #942e2e;
  }
`;

const Update = styled.button`
  background-color: #acac45;
  margin: 0px 5px;
  &:hover {
    background-color: #878123;
  }
`;

const Article = () => {
  const { id } = useParams();
  const history = useHistory();

  const goToEditArticlePage = () => {
      history.push(`/fagartikler/${id}/rediger`);
  };
  const { isLoggedIn } = useAuthContext();
  const { id } = useParams();
  const article = articles.filter((a) => a.id === parseInt(id))[0];

  const goToArticlesPage = () => {
    history.push(`/fagartikler`);
};

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [article, setArticle] = useState([]);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await axios.get(`http://localhost:3000/fagartikler/${id}`);
          if (response.status === 200) {
            setArticle(response.data.data);
            setError('');
          }
        } catch (error) {
          setArticle([]);
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [id]);

  const deleteArticle = (id) =>{
    const article = async () => {
      try{
        const response = await remove(id);
        if (response.status === 200) {
          setError('');
          goToEditArticlePage();
        }
      } catch (error) {
        setError(error.message);
      }
    };
    article();
  };
  

  return(
      <>
        {loading ? (
        'Loading ...'
        ) : (
        <>
          <Title title={article.title}/>
          <StyledSection>
            <StyledInfo>
              <h6>Av {article.author} </h6>
              <h6> {article.date} </h6>
            </StyledInfo>
            <ArticleContent>
              <p> {article.ingress} </p>
              <p> {article.content} </p>
            </ArticleContent>
            <h5> {article.category} </h5>

            <ArticleAdminFunctions>
              <Delete 
                onclick={deleteArticle}> 
                Slett 
              </Delete>
              <Update
                article={article}
                onClick={goToEditArticlePage}> 
                Rediger 
              </Update>
            </ArticleAdminFunctions>
          </StyledSection>
        </>
          )}
          {error ? <Error message={error} /> : null}
      </>
    );
};

export default Article;
