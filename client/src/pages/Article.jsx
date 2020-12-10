import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Title from '../components/Title';
import Page from '../components/Page';
import Error from '../components/Error';
import { remove, get } from '../utils/articleService';
import { useAuthContext } from '../context/AuthProvider';
import dateFormatter from '../utils/dateFormatter';

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
  const { isLoggedIn, isAdmin } = useAuthContext();
  const { id } = useParams();
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [article, setArticle] = useState(null);

  const goToEditArticlePage = () => {
    history.push(`/fagartikler/${id}/rediger`);
  };

  const goToArticlesPage = useCallback(() => {
    history.push(`/fagartikler`);
  }, [history]);

  useEffect(() => {
    if (id) {
      const fetchArticleData = async () => {
        setLoading(true);
        const { data } = await get(id);
        if (data.success) {
          setArticle(data.data);
          setError(null);
        } else {
          console.log(data.message);
          setError(data.message);
          goToArticlesPage();
        }
        setLoading(false);
      };
      fetchArticleData();
    }
  }, [id, error, goToArticlesPage]);

  const deleteArticle = async () => {
    console.log('test');
    const { data } = await remove(id);
    console.log(data);
    if (data.success) {
      goToArticlesPage();
    } else {
      setError(data.message);
    }
  };

  return (
    <>
      {article && (
        <>
          <Title title={article.title} bgImage={article.imagePath} />
          <StyledSection>
            <StyledInfo>
              <p>Av {article.author} </p>
              <p> {dateFormatter(article.date)} </p>
            </StyledInfo>
            <ArticleContent>
              <p> {article.ingress} </p>
              <p> {article.content} </p>
            </ArticleContent>
            <h5> {article.category.name} </h5>

            <ArticleAdminFunctions>
              <Delete onClick={deleteArticle}>Slett</Delete>
              <Update article={article} onClick={goToEditArticlePage}>
                Rediger
              </Update>
            </ArticleAdminFunctions>
          </StyledSection>
        </>
      )}
      {error && <Error message={error} />}
    </>
  );
};

export default Article;
