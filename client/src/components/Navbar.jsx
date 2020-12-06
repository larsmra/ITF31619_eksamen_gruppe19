import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useAuthContext } from '../context/AuthProvider';
import { logout } from '../utils/auth';

const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 10px 38px 2px rgba(237, 237, 237, 1);

  & > span {
    align-self: center;
    padding: 0 2em;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavMenuItem = styled.li.attrs(({ special }) => ({
  special: special || false,
}))`
  margin: 0;
  ${({ special }) => special && 'background-color: #479eb9;'}

  /*
  &:first-child {
    padding-left: 0;
  }
  */

  & > a {
    display: block;
    color: #000000;
    padding: 0 2em;
    font-size: 16px;
    line-height: 3em;
    text-decoration: none;
    ${({ special }) => special && 'color: #ffffff;'}

    &.active, &:hover {
      color: ${({ special }) => (special ? '#ffffff' : '#479eb9')};
      ${({ special }) => special && 'background-color: #236b85;'}
    }
  }
`;

const LogOutButton = styled.button`
  appearance: none;
  height: 100%;
  color: #ffffff;
  background-color: #479eb9;
  padding: 0 2em;
  margin: 0;
  border: none;

  &:hover {
    background-color: #236b85;
  }
`;

const Navbar = () => {
  const { isLoggedIn, setUser } = useAuthContext();
  const history = useHistory();

  const handleLogout = async () => {
    await logout();
    setUser(null);
    history.push('/');
  };

  return (
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
        <NavMenuItem special>
          {isLoggedIn ? (
            <LogOutButton type="button" onClick={handleLogout}>
              Logg ut
            </LogOutButton>
          ) : (
            <NavLink exact to="/login" activeClassName="active">
              Logg inn
            </NavLink>
          )}
        </NavMenuItem>
      </NavMenu>
    </StyledNav>
  );
};

export default Navbar;
