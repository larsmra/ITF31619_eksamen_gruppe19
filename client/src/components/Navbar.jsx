import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 10px 38px 2px rgba(237, 237, 237, 1);

  & > span {
    align-self: center;
    padding: 10px 30px;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
`;

const NavMenuItem = styled.li`
  padding: 10px 30px;
  &:first-child {
    padding-left: 0;
  }

  & > a {
    display: block;
    font-size: 16px;
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
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
      </NavMenuItem>
      <NavMenuItem>
        <NavLink to="/kontorer" activeClassName="active">
          Kontorer
        </NavLink>
      </NavMenuItem>
      <NavMenuItem>
        <NavLink exact to="/fagartikler" activeClassName="active">
          Fagartikler
        </NavLink>
      </NavMenuItem>
      <NavMenuItem>
        <NavLink exact to="/kontakt" activeClassName="active">
          Kontakt
        </NavLink>
      </NavMenuItem>
    </NavMenu>
  </StyledNav>
);

export default Navbar;
