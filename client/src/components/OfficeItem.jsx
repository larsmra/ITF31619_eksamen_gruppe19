import React from 'react';
import styled from 'styled-components';

const StyledArticle = styled.article.attrs(({ isList }) => ({
  isList: isList || false,
}))`
  ${({ isList }) => !isList && 'border: 2px solid black'};
  padding: 0;
`;

const StyledAnchor = styled.a`
  color: #000000;
  text-decoration: none;
`;

const StyledNumber = styled.p.attrs(({ isList }) => ({
  isList: isList || false,
}))`
  padding: 0.8em 1em;
  background-color: #000000;
  color: #ffffff;
  display: ${({ isList }) => (isList ? 'inline-block' : 'none')};
`;

const StyledHeading = styled.h3.attrs(({ isList }) => ({
  isList: isList || false,
}))`
  ${({ isList }) => isList && 'display: inline-block; margin-left: 0.5em'}
`;

const StyledText = styled.p.attrs(({ isList }) => ({
  isList: isList || false,
}))`
  ${({ isList }) => isList && 'display: inline-block; margin-left: 1em;'}
`;

const OfficeItem = ({
  index,
  id,
  name,
  address,
  phone,
  email,
  isList = false,
}) => {
  console.log(`indeex ${index}`);
  return (
    <StyledArticle isList={isList}>
      <StyledNumber isList={isList}>{index + 1}</StyledNumber>
      <StyledAnchor href={`/kontorer/${id}`}>
        <StyledHeading isList={isList}>{name}</StyledHeading>
        <StyledText isList={isList}>{address}</StyledText>
        <StyledText isList={isList}>{phone}</StyledText>
        <StyledText isList={isList}>{email}</StyledText>
      </StyledAnchor>
    </StyledArticle>
  );
};

export default OfficeItem;
