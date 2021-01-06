import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { routes } from "../../routes";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";

const UNavbar = styled.nav`
  margin-left: 2rem;
  ul {
    margin: 0;
    padding: 0;
    display: flex;

    @media (max-width: 767px) {
      z-index: 100;
      flex-direction: column;
      position: absolute;
      display: none;
      right: 0;
      background: #0f1218;
      top: 6rem;
      height: 100%;
      padding: 2.5rem;
      width: 100%;
    }

    li {
      list-style: none;
      margin: 0 1rem;
      @media (max-width: 767px) {
        margin: 0.5rem 0;
      }

      a {
        color: inherit;
        text-decoration: none;
      }
      .active {
        font-weight: bold;
        /* border-bottom: 2px solid ${({ theme }) => theme.colors.secondary}; */
      }
    }
  }

  .menu-mobile-open {
    display: flex;
  }
`;

const UNavbarMenuIcon = styled.div`
  display: none;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.light};
  @media (max-width: 767px) {
    display: block;
    margin-right: 2.5rem;
    line-height: 0;
  }
`;

const Navbar = () => {
  const [menuMobile, setMenuMobile] = useState(false);

  return (
    <UNavbar>
      <UNavbarMenuIcon onClick={() => setMenuMobile(!menuMobile)}>
        {menuMobile ? <RiCloseFill /> : <RiMenuFill />}
      </UNavbarMenuIcon>
      <ul className={menuMobile ? "menu-mobile-open" : null}>
        <li>
          <NavLink exact to={routes.home}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={routes.movies}>Movies</NavLink>
        </li>

        <li>
          <NavLink to={routes.categories}>Categories</NavLink>
        </li>
      </ul>
    </UNavbar>
  );
};

export default Navbar;
