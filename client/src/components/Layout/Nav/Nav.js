import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../../../routes";

const NavBar = styled.nav`
  height: 100%;
`;

const NavList = styled.ul`
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  list-style: none;
  margin-bottom: 30px;
`;

const NavItemHeader = styled.p`
  font-weight: bold;
  color: #babbbd;
  margin-bottom: 0;
`;

const NavSubItem = styled.p`
  margin-left: 5px;
  margin-bottom: 0;
  list-style: none;
  a {
    color: var(--white);
  }
`;

const Nav = () => {
  return (
    <NavBar>
      <NavList>
        <NavItem>
          <NavItemHeader>MOVIES</NavItemHeader>
          <NavSubItem>
            <NavLink to={routes.movies}>Movies</NavLink>
          </NavSubItem>
          <NavSubItem>
            <NavLink to={routes.addMovie}>Add Movie</NavLink>
          </NavSubItem>
        </NavItem>

        <NavItem>
          <NavItemHeader>CATEGORIES</NavItemHeader>
          <NavSubItem>
            <NavLink to={routes.categories}>Categories</NavLink>
          </NavSubItem>
          <NavSubItem>
            <NavLink to={routes.addCategory}>Add Category</NavLink>
          </NavSubItem>
        </NavItem>
      </NavList>
    </NavBar>
  );
};

export default Nav;
