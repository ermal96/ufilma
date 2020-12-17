import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { routes } from "../../routes";

const UNavbar = styled.nav`
  margin-left: 2rem;
  ul {
    margin: 0;
    padding: 0;
    display: flex;

    li {
      list-style: none;
      margin: 0 1rem;

      a {
        color: inherit;
        text-decoration: none;
      }
    }
  }
`;

const Navbar = () => {
  return (
    <UNavbar>
      <ul>
        <li>
          <NavLink to={routes.home}>Home</NavLink>
        </li>
        <li>
          <NavLink to={routes.home}>Tv Shows</NavLink>
        </li>
        <li>
          <NavLink to={routes.home}>Latest</NavLink>
        </li>
        <li>
          <NavLink to={routes.home}>Categories</NavLink>
        </li>
      </ul>
    </UNavbar>
  );
};

export default Navbar;
