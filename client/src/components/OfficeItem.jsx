import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const RETURN_KEY = 13;

const StyledArticle = styled.article.attrs(({ isList }) => ({
  isList: isList || false,
}))`
  display: flex;
  padding: 1em;
  cursor: pointer;
  align-items: ${({ isList }) => (isList ? 'center' : 'left')};
  flex-direction: ${({ isList }) => (isList ? 'row' : 'column')};
  transition: all 0.1s ease-in-out;
  ${({ isList }) => !isList && 'border: 2px solid black'};

  &:hover,
  &:focus {
    ${({ isList }) => !isList && 'box-shadow: 0em 0.1em 0.2em black;'};
  }
`;

const StyledNumber = styled.p`
  margin: 0;
  width: 2em;
  line-height: 2em;
  text-align: center;
  background-color: #000000;
  color: #ffffff;
  transition: all 0.1s ease-in-out;

  ${StyledArticle}:hover & {
    transform: scale(1.1);
  }
`;

const StyledHeading = styled.h3.attrs(({ isList }) => ({
  isList: isList || false,
}))`
  margin: 0;
  ${({ isList }) => isList && 'display: inline-block; margin-left: 0.5em'}
`;

const StyledText = styled.p.attrs(({ isList }) => ({
  isList: isList || false,
}))`
  margin: 0;
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
  const history = useHistory();

  const goToPage = () => {
    history.push(`/kontorer/${id}`);
  };

  const onClick = () => goToPage();

  const onKeyDown = (e) => e.keyCode === RETURN_KEY && goToPage();

  return (
    <StyledArticle
      isList={isList}
      tabIndex={0}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      {isList && <StyledNumber>{index + 1}</StyledNumber>}
      <StyledHeading isList={isList}>{name}</StyledHeading>
      <StyledText isList={isList}>{address}</StyledText>
      <StyledText isList={isList}>{phone}</StyledText>
      <StyledText isList={isList}>{email}</StyledText>
    </StyledArticle>
  );
};

export default OfficeItem;
