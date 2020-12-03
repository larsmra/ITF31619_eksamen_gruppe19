import React from 'react';
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

const ArticleCard = ({id, title, category, ingress,}) => {
    const MAX_LENGTH = 150;
    
    return(
        <StyledArticle href={`/artikler/${id}`}>
        
                <StyledDiv/>
                <StyledHeader>
                    <h2>{title}</h2>
                    <h6>{category}</h6>
                </StyledHeader>
                {
                    ingress.length > MAX_LENGTH ? 
                    (
                        <StyledIngress> {`${ingress.substring(0,MAX_LENGTH)}...`} </StyledIngress>
                    ):
                    <StyledIngress> {ingress} </StyledIngress>
                }  
        </StyledArticle>
      );
};
    
export default ArticleCard;