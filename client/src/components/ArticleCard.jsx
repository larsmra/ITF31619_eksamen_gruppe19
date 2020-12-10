import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const MAX_LENGTH = 150;

const StyledArticle = styled.article`
  display: grid;
  grid-template-columns: auto 1fr 1fr;
  margin: 1em 0em;
  padding: 20px;

  border: 0.1rem solid #ffffff;

  &:hover {
    border: 0.1rem solid #d3d3d3;
    cursor: pointer;
  }
`;

const StyledImg = styled.img.attrs(({ bgImage }) => ({
  bgImage: bgImage || '',
}))`
  width: 10em;
  height: 8em;
  grid-row-start: 1;
  grid-row-end: 3;
  background-color: #d3d3d3;
  background-image: url(${({ bgImage }) => `${bgImage}`});
`;

const StyledHeader = styled.header`
  grid-column-start: 2;
  grid-column-end: 4;
  display: flex;
  justify-content: space-between;

  & > p {
    padding: 0 2rem;
  }
`;

const StyledTitle = styled.h2`
  margin: 1rem;
`;

const StyledIngress = styled.p`
  grid-column-start: 2;
  grid-column-end: 4;
  margin: 1rem;
`;

const ArticleCard = ({ id, title, category, ingress, imageSrc }) => {
  const history = useHistory();

  const goToPage = () => history.push(`/fagartikler/${id}`);

  return (
    <StyledArticle onClick={goToPage}>
      <StyledImg src={`${process.env.BASE_URL}/${imageSrc}`} />
      <StyledHeader>
        <StyledTitle>{title}</StyledTitle>
        <p>{category.name}</p>
      </StyledHeader>
      {ingress.length > MAX_LENGTH ? (
        <StyledIngress>
          {`${ingress.substring(0, MAX_LENGTH)}...`}
        </StyledIngress>
      ) : (
        <StyledIngress> {ingress} </StyledIngress>
      )}
    </StyledArticle>
  );
};

export default ArticleCard;
