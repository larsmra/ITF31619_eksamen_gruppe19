import React from 'react';
import {articles} from '../data/articleData';
import styled from 'styled-components';

const StyledArticle = styled.article`
    display: grid;
    grid-template: auto auto auto;
`

const StyledDiv = styled.div`
    grid-row-start: 1;
    grid-row-end: 2;
`

const StyledHeader = styled.header`
    & > h2{
        
        justify-self: start;
    }

    & h6 {
        justify-self: end;
    }
`

const StyledIngress = styled.p`
    grid-column-start: 2;
    grid-column-end: 4;
`

const ArticleCard = ({data}) => {
    const MAX_LENGTH = 150;
    
    return(
    
        <StyledArticle href={`/artikler/${article[0]}`}>
          {data.map((article) => (
            <>
                <StyledDiv/>
                <StyledHeader key={article[0]}>
                    <h2>{article[1].title}</h2>
                    <h6>{article[1].category}</h6>
                </StyledHeader>
                {
                    article[1].ingress.length > MAX_LENGTH ? 
                    (
                        <StyledIngress> {`${article[1].ingress.substring(0,MAX_LENGTH)}...`} </StyledIngress>
                    ):
                    <StyledIngress> {article[1].ingress} </StyledIngress>
                }  
            </>
          ))}
        </StyledArticle>
        
      );
};
    
    
export default ArticleCard;