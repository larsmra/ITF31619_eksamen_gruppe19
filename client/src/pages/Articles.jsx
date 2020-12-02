import React from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import CategorySelector from '../components/CategorySelector';
import ArticleCard from '../components/ArticleCard';

const ArticleFunctions = styled.section`
    max-width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
`;

const Create = styled.button`
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

const StyledArticles = styled.section`
    display: flex;
    flex-direction: column wrap;
`

const Articles = () => {

    /*Implement when we have a backend
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [articles, setArticles] = useState([]);

    const createMap = ({data}) => Object.entries(data);

    

    useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:/artikler', {
          transformResponse: createMap,
          responseType: 'json',
        });
        if (response.status === 200) {
          setPosts(response.data);
          setError('');
        }
      } catch (error) {
        setPosts([]);
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
                <Create> Ny Artikkel </Create>
                <SearchFilter>
                    <button> Search </button>
                    {/* Change later to use the CategorySelector component for filter, may change out button */}
                    <button> Filter </button>
                </SearchFilter>
            </ArticleFunctions>
            <StyledArticles>
                {loading && 'Loading ...'}
                {error && <p>{error}</p>}
                {articles && articles.length > 0 && <ArticleCard data={articles} /> }
            </StyledArticles>
        </>
    );
};

export default Articles;