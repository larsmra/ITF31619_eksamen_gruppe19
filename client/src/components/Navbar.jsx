import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  width: 100%;
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  padding: 30px 30px;
  box-shadow: 0px 10px 38px 2px rgba(237, 237, 237, 1);
`;

const NavMenuItem = styled.li`
  padding: 0 20px;

  &:first-child {
    padding-left: 0;
  }

  & > a {
    display: block;
    font-size: 14px;
    padding: 5px 0;
    text-decoration: none;

    &.active {
      color: #479eb9;
    }
  }
`;
const Navbar = () => (
  <StyledNav>
    <span> FG </span>
    <NavMenu>
      <NavMenuItem>
        <NavLink exact to="/home" activeClassName="active">
          Home
        </NavLink>
      </NavMenuItem>
      <NavMenuItem>
        <NavLink to="/offices" activeClassName="active">
          Kontorer
        </NavLink>
      </NavMenuItem>
      <NavMenuItem>
        <NavLink exact to="/" activeClassName="active">
          Fagartikler
        </NavLink>
      </NavMenuItem>
      <NavMenuItem>
        <NavLink exact to="/" activeClassName="active">
          Kontakt
        </NavLink>
      </NavMenuItem>
    </NavMenu>
  </StyledNav>
);

export default Navbar;
