import React, {useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Title from '../components/Title';
import ArticleCard from '../components/ArticleCard';
import { useAuthContext } from '../context/AuthProvider';

const ArticleFunctions = styled.section.attrs(({ loggedIn }) => ({
  loggedIn: loggedIn || false,
}))`
  max-width: 90%;
  margin: auto;
  display: flex;
  justify-content: ${({ loggedIn }) =>
    loggedIn ? 'space-between' : 'flex-end'};
`;

const CreateArticlePage = styled.button`
        padding: 20px 30px;
        background-color: #479EB9;
        border-style: none;
        color: white;
        &:hover{
            background-color: #236B85;
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

    const history = useHistory();
    
    const { isLoggedIn } = useAuthContext();

    const goToCreateArticlePage = () => {
        history.push(`/fagartikler/ny`);
    };

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [articles, setArticles] = useState([]);

    const createMap = ({data}) => Object.entries(data);

    useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:3000/fagartikler', {
          transformResponse: createMap,
          responseType: 'json',
        });
        if (response.status === 200) {
          setArticles(response.data);
          setError('');
        }
      } catch (error) {
        setArticles([]);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  

    return(
        <>
            <Title title="Fagartikler"/>
            <ArticleFunctions>
                <CreateArticlePage 
                onClick={goToCreateArticlePage}> Ny Artikkel </CreateArticlePage>
                <SearchFilter>
                    <button> Search </button>
                    {/* Change later to use the CategorySelector component for filter, may change out button */}
                    <button> Filter </button>
                </SearchFilter>
            </ArticleFunctions>
            <StyledArticleSection>
                {loading && 'Loading ...'}
                {error && <p>{error}</p>}
                {articles && 
                  articles.map((article) =>( 
                   <ArticleCard key={article.id} {...article}/>
                ))}
            </StyledArticleSection>
        </>
    );
};
export default Articles;
