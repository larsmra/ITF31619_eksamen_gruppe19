import React from 'react';
import styled from 'styled-components';

const StyledArticle = styled.article`
  border: 2px solid black;
  padding: 0;
`;

const StyledAnchor = styled.a`
  color: #000000;
  text-decoration: none;
`;

const Card = ({ id, name, phone, email }) => (
  <StyledArticle>
    <StyledAnchor href={`/kontorer/${id}`}>
      <h3>{name}</h3>
      <p>{name}</p>
      <p>{phone}</p>
      <p>{email}</p>
    </StyledAnchor>
  </StyledArticle>
);

export default Card;
