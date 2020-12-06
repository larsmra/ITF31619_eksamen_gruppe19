import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const StyledArticle = styled.article`
  display: grid;
  grid-template: auto auto auto;
  padding: 20px;
  max-width: 90%;
  margin: auto;
  border: 0.1rem solid white;

  &:hover {
    border: 0.1rem solid lightgrey;
    cursor: pointer;
  }
`;

const StyledDiv = styled.div`
  grid-row-start: 1;
  grid-row-end: 3;
  padding: 70px;
  background-color: lightgrey;
`;

const StyledHeader = styled.header`
  grid-column-start: 2;
  grid-column-end: 4;
  display: flex;
  justify-content: space-between;

  & > h2 {
    padding: 0 2rem;
  }

  & h6 {
    padding: 0 2rem;
  }
`;

const StyledIngress = styled.p`
  grid-column-start: 2;
  grid-column-end: 4;
  padding: 0 2rem;
`;

const ArticleCard = ({ id, title, category, ingress }) => {
  const MAX_LENGTH = 150;

  const history = useHistory();

  const goToPage = () => {
    history.push(`/fagartikler/${id}`);
  };

  return (
    <StyledArticle onClick={goToPage}>
      <StyledDiv />
      <StyledHeader>
        <h2>{title}</h2>
        <h6>{category}</h6>
      </StyledHeader>
      {ingress.length > MAX_LENGTH ? (
        <StyledIngress>
          {' '}
          {`${ingress.substring(0, MAX_LENGTH)}...`}{' '}
        </StyledIngress>
      ) : (
        <StyledIngress> {ingress} </StyledIngress>
      )}
    </StyledArticle>
  );
};

export default ArticleCard;
