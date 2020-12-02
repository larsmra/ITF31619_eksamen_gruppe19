import React from 'react';
import styled from 'styled-components';

const TitleText = styled.h1`
    text-align: center;
    padding: 200px;
    background-color: lightgray;
`;

const Title = ({ title }) => <TitleText>{title}</TitleText>;

export default Title;
