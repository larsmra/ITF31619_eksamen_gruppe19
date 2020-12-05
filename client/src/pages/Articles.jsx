import React, {useState, useReducer } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Title from '../components/Title';
import CategorySelector from '../components/CategorySelector';
import ArticleCard from '../components/ArticleCard';
import {articles} from '../data/articleData';

const ArticleFunctions = styled.section`
    max-width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
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

    & > button{
        margin: 5px;
        padding: 20px 30px;
        background-color: lightgrey;
        border-style: none;
        color: white;
        &:hover{
            background-color: grey;
        }
    
    }
`;

const StyledArticleSection = styled.section`
    display: flex;
    flex-flow: column wrap;
    padding: 50px 0px;
`

const Articles = () => {

    const history = useHistory();

    const goToCreateArticlePage = () => {
        history.push(`/fagartikler/ny`);
    };

    const [articleId, setArticleId] = useState(9328508110);
    const [articles, setArticle] = useState([]);
    const date = new Date();

    function formateDate(today) {
      let month = today.getMonth();
      let day = today.getDate().toString();
      let year = today.getFullYear();
  
      year = year.toString().slice(-2);
      month = (month + 1).toString();
  
      if (month.length === 1) {
        month = `0${month}`;
      }
  
      if (day.length === 1) {
        day = `0${day}`;
      }
  
      // return the string "dd.mm.yy"
      return `${day}.${month}.${year}`;
    }
  
    const [userInput, setUserInput] = useReducer(
      (state, newState) => ({ ...state, ...newState }),
      {
        title: '',
        ingress: '',
        content: '',
        author: '',
        category: '',
        date: formateDate(date),
      }
    );
    
    const addArticle = () => {
      setArticle((prev) => [{ id: articleId, ...userInput }, ...prev]);
    };


    const deleteArticle = (id) => {
      const updatedArticles = articles.filter(article => article.id !== id);
      setArticle(updatedArticles);
    };

    const updateArticleId = () => {
      setArticleId((prev) => prev + 1);
    };
    
    /*Implement when we have a backend

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [articles, setArticles] = useState([]);

    const createMap = ({data}) => Object.entries(data);

    useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:APORT/artikler', {
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
  */

    return(
        <>
            <Title title="Fagartikler"/>
            <ArticleFunctions>
                <CreateArticlePage 
                addArticle={addArticle}
                updateArticleId={updateArticleId}
                userInput={userInput}
                setUserInput={setUserInput}
                onClick={goToCreateArticlePage}> Ny Artikkel </CreateArticlePage>
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
                { articles && articles.map((article) => <ArticleCard key={article.id} {...article}/> )}

            </StyledArticleSection>
        </>
    );
};

export default Articles;