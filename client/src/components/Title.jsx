import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header.attrs(({ bg }) => ({
  bg: bg || '',
}))`
  height: 15em;
  display: grid;
  margin: 0.5em 0;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 1fr auto 1fr;
  background-image: ${({ bg }) => bg && `url(${bg})`};
  background-repeat: no-repeat;
  background-color: #d3d3d3;
`;

const TitleText = styled.h1`
  text-align: center;
  padding: 0.5em;
  background-color: #d3d3d3;
  grid-column: 2/3;
  grid-row: 2/3;
`;

const Title = ({ title, bgImage }) => (
  <StyledHeader bg={`${process.env.BASE_URL}/${bgImage}`}>
    <TitleText>{title}</TitleText>
  </StyledHeader>
);

export default Title;
