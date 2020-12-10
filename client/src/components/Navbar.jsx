import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useAuthContext } from '../context/AuthProvider';
import { logout } from '../utils/authService';

const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 10px 38px 2px rgba(237, 237, 237, 1);
  & > span {
    align-self: center;
    padding: 0 2em;
    font-size: 1.5rem;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
  margin: 0;
  padding: 0;

  @media only screen and (min-width: 420px) and (max-width: 800px) {
    flex-flow: column nowrap;
    padding: 1rem;
  }
`;

const NavMenuItem = styled.li.attrs(({ special }) => ({
  special: special || false,
}))`
  margin: 0;
  ${({ special }) => special && 'background-color: #479eb9;'}

  & > a {
    display: block;
    color: #000000;
    padding: 0 2em;
    font-size: 1.5rem;
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
  border: none;
  &:hover {
    background-color: #236b85;
  }
`;

const Navbar = () => {
  const { isLoggedIn, isAdmin, setUser } = useAuthContext();
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
          <NavLink to="/fagartikler/sider/1" activeClassName="active">
            Fagartikler
          </NavLink>
        </NavMenuItem>
        <NavMenuItem>
          <NavLink exact to="/kontakt" activeClassName="active">
            Kontakt
          </NavLink>
        </NavMenuItem>
        {isAdmin && (
          <NavMenuItem>
            <NavLink exact to="/henvendelser" activeClassName="active">
              Henvendelser
            </NavLink>
          </NavMenuItem>
        )}
        {isLoggedIn ? (
          <NavMenuItem special>
            <LogOutButton type="button" onClick={handleLogout}>
              Logg ut
            </LogOutButton>
          </NavMenuItem>
        ) : (
          <>
            <NavMenuItem special>
              <NavLink exact to="/register" activeClassName="active">
                Registrer deg
              </NavLink>
            </NavMenuItem>
            <NavMenuItem special>
              <NavLink exact to="/login" activeClassName="active">
                Logg inn
              </NavLink>
            </NavMenuItem>
          </>
        )}
      </NavMenu>
    </StyledNav>
  );
};
export default Navbar;
