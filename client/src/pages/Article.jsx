import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Title from '../components/Title';
import { articles } from '../data/articleData';

const StyledSection = styled.section`
    max-width: 90%;
    margin: auto;
`

const StyledInfo = styled.div`
    display: flex;
    justify-content: space-between;
`
const ArticleContent = styled.article`

`

const ArticleAdminFunctions = styled.div`
    & > button{
        padding: 20px 30px;
        border-style: none;
        color: white;
    }

`

const Delete = styled.button`
        background-color: #D04040;
        &:hover{
            background-color: #942E2E;
        }
`

const Update = styled.button`
        background-color: #ACAC45;
        margin: 0px 5px;
        &:hover{
            background-color: #878123;
        }

`

const Article = () => {
    const { id } = useParams();
    const article = articles.filter((a) => a.id === parseInt(id))[0];

    /*
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [article, setArticle] = useState([]);

    useEffect(() => {
    if (id) {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await axios.get(`http://localhost:APORT/posts/${id}`);
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

    */
    return(
        <>
        {
        /* Use later
            {loading ? (
            'Loading ...'
            ) : (
            <>
                
                Place working code under, here
            
            </>
            )}
                
                  
        */}  
        
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
                <Delete> Slett </Delete>
                <Update> Rediger </Update>
            </ArticleAdminFunctions>
       </StyledSection>
        </>
    );
};

export default Article;