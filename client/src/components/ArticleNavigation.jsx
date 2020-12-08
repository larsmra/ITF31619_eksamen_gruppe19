import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;

  & > a {
    margin: 0.5em;
    line-height: 1.5em;
    width: 1.5em;
    text-decoration: none;
    color: #ffffff;
    background-color: #d3d3d3;
    text-align: center;

    &:hover,
    &.active {
      background-color: #000000;
    }
  }
`;

const ArticleNavigation = ({ pages = 0 }) => (
  <StyledNav>
    {Array.from(Array(pages)).map((val, index) => (
      <NavLink key={index} exact to={`/fagartikler/sider/${index + 1}`}>
        {index + 1}
      </NavLink>
    ))}
  </StyledNav>
);

export default ArticleNavigation;
