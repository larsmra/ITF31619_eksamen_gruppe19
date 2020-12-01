import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
    width: 100%;
`;

const NavMenu = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
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
      color: #479EB9;
    }
  }
`;
const Navbar = () => (
    <StyledNav>
        <NavMenu>
            <NavMenuItem>
                
            </NavMenuItem>
        </NavMenu>
    </StyledNav>
);

export default Navbar;