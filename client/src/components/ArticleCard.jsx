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

const ArticleCard = ({data}) => {

    return(
    
        <StyledArticle href={`/artikler/${item[0]}`}>
          {data.map((item) => (
            <>
                <StyledDiv/>
                <StyledHeader key={item[0]}>
                    <h2>{item[1].title}</h2>
                    <h6>{item[6].category}</h6>
                </StyledHeader>
                <StyledIngress>{item[2].ingress}</StyledIngress>
            </>
          ))}
        </StyledArticle>
        
      );
};
    
    
export default ArticleCard;