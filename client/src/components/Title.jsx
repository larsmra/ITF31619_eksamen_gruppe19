import React from 'react';
import styled from 'styled-components';

const TitleText = styled.h1`
  text-align: center;
  padding: 0.5em;
  background-color: #d3d3d3;
`;

const Title = ({ title, bgImage }) => <TitleText>{title}</TitleText>;

export default Title;
