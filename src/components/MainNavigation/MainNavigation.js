import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const AppBar = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: ${props => props.theme.palette.primary.main};
  color: ${props => props.theme.palette.primary.textColor};
`;

const LogoLink = styled(Link)`
  color: ${props => props.theme.palette.primary.textColor};
  margin-right: auto;
`;

const Nav = styled.div`
  display: flex;
`;

const NavLink = styled(Link)`
  padding: 8px 16px;
  color: inherit;
  
  &:hover {
    color: inherit;
  }
`;

const MainNavigation = () => {
  return (
    <AppBar>
      <LogoLink to="/">LOGO</LogoLink>
      <Nav>
        <NavLink to="/over-ons">
          About
        </NavLink>
        <NavLink to="/contact">
          Contact
        </NavLink>
      </Nav>
    </AppBar>
  );
};

export default MainNavigation;
