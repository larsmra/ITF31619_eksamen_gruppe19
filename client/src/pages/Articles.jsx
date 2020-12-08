import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';
import Title from '../components/Title';
import ArticleCard from '../components/ArticleCard';
import { useAuthContext } from '../context/AuthProvider';
import { list } from '../utils/articleServices';
import ArticleNavigation from '../components/ArticleNavigation';

const ArticleFunctions = styled.section.attrs(({ isAdmin }) => ({
  isAdmin: isAdmin || false,
}))`
  max-width: 90%;
  margin: auto;
  display: flex;
  justify-content: ${({ isAdmin }) => (isAdmin ? 'space-between' : 'flex-end')};
`;

const Create = styled.a`
  padding: 20px 30px;
  background-color: #479eb9;
  border-style: none;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #236b85;
  }
`;

const SearchFilter = styled.div`
  & > button {
    margin: 5px;
    padding: 20px 30px;
    background-color: lightgrey;
    border-style: none;
    color: white;
    &:hover {
      background-color: grey;
    }
  }
`;

const StyledArticleSection = styled.section`
  display: flex;
  flex-flow: column wrap;
  padding: 50px 0px;
`;

const Articles = () => {
  const { isAdmin } = useAuthContext();
  const { page } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [pages, setPages] = useState(0);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await list(page);
      console.log(data);
      if (data.success) {
        console.log(data);
        setPages(data.data.pages);
        console.log(data);
        setArticles(data.data.articles);
        console.log(data);
        console.log(`${data.data.pages} ${data.data.articles}`);
        setError(null);
      } else {
        setError(data.response);
        console.log(data.response);
      }
    };
    fetchData();
  }, [page]);

  console.log('test');
  console.log(articles);

  return (
    /* Implement when we have a backend

  const goToCreateArticlePage = () => {
      history.push(`/fagartikler/ny`);
  };

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const {data, error } = await list();
        if (error) {
          setError(error);
        } else {
          setArticles(data);
        }
      }finally{
         setLoading(false);
      }
    };
    fetchData();
  }, []);
  */

    <>
      <Title title="Fagartikler" />
      <ArticleFunctions isAdmin={isAdmin}>
        {isAdmin && <Create href="/fagartikler/ny"> Ny Artikkel </Create>}
        <SearchFilter>
          <button> Search </button>
          {/* Change later to use the CategorySelector component for filter, may change out button */}
          <button> Filter </button>
        </SearchFilter>
      </ArticleFunctions>
      <StyledArticleSection>
        {/* Use later

                {loading && 'Loading ...'}
                {error && <p>{error}</p>}
                {articles && articles.length > 0 && <ArticleCard data={articles} /> }
                
                */}
        {articles &&
          articles.map((article) => (
            <ArticleCard key={article._id} {...article} />
          ))}
      </StyledArticleSection>
      <ArticleNavigation pages={pages} />
    </>
  );
};
export default Articles;
