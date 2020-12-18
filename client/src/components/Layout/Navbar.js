import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { routes } from "../../routes";
import { CgMenuGridO } from "react-icons/cg";
import { MdClose } from "react-icons/md";

const UNavbar = styled.nav`
  margin-left: 2rem;
  ul {
    margin: 0;
    padding: 0;
    display: flex;

    @media (max-width: 767px) {
      flex-direction: column;
      position: absolute;
      display: none;
      right: 0;
      background: #0f1218;
      top: 6rem;
      height: 100%;
      padding: 30px;
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
    }
  }

  .menu-mobile-open {
    display: flex;
  }
`;

const UNavbarMenuIcon = styled.div`
  display: none;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.light};
  @media (max-width: 767px) {
    display: block;
    margin-right: 2.5rem;
  }
`;

const Navbar = () => {
  const [menuMobile, setMenuMobile] = useState(false);

  return (
    <UNavbar>
      <UNavbarMenuIcon onClick={() => setMenuMobile(!menuMobile)}>
        {menuMobile ? <MdClose /> : <CgMenuGridO />}
      </UNavbarMenuIcon>
      <ul className={menuMobile ? "menu-mobile-open" : null}>
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
