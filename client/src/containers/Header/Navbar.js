import React, { useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { routes } from "../../routes";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";
import { setMenuMobile } from "../../store/actions/headerActions";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";

const UNavbar = styled.nav`
  margin-left: 2rem;
  @media (max-width: 767px) {
    margin-left: 0;
  }
  ul {
    transition: all 0.3s ease;
    margin: 0;
    padding: 0;
    display: flex;

    @media (max-width: 767px) {
      z-index: 100;
      flex-direction: column;
      position: absolute;
      display: none;
      right: 0;
      background: ${({ theme }) => theme.colors.accent};
      top: 6rem;
      height: 100%;
      padding: 2.5rem;
      width: 100%;
    }

    li {
      list-style: none;
      margin: 0 1rem;
      font-size: 1.7rem;
      @media (max-width: 767px) {
        margin: 1rem 0;

        font-size: 2rem;
      }

      a {
        color: inherit;
        text-decoration: none;
        border-left: 2px solid transparent;
      }
      .active {
        font-weight: bold;

        @media (max-width: 767px) {
          border-bottom: 2px solid red;
        }
      }
    }
  }

  .menu-mobile-open {
    display: flex;
  }
`;

const UNavbarMenuIcon = styled.div`
  display: none;
  font-size: 2.5rem;

  color: ${(props) =>
    props.open ? props.theme.colors.secondary : props.theme.colors.light};
  @media (max-width: 767px) {
    display: block;
    margin-right: 2.5rem;
    line-height: 0;
  }
`;

const Navbar = () => {
  const menuMobile = useSelector(({ header }) => header.menuMobile);
  const isLoggedIn = useSelector(({ user }) => user.loggedIn);
  const dispatch = useDispatch();
  let location = useLocation();

  useEffect(() => {
    dispatch(setMenuMobile(false));
  }, [location, dispatch]);

  return (
    <UNavbar>
      <UNavbarMenuIcon
        open={menuMobile}
        onClick={() => dispatch(setMenuMobile(!menuMobile))}
      >
        {menuMobile ? <RiCloseFill /> : <RiMenuFill />}
      </UNavbarMenuIcon>
      <ul className={menuMobile ? "menu-mobile-open" : null}>
        <li>
          <NavLink exact to={routes.home}>
            Kreu
          </NavLink>
        </li>
        <li>
          <NavLink to={routes.movies}>Filma</NavLink>
        </li>
        <li>
          <NavLink to={routes.categories}>Kategorite</NavLink>
        </li>
        {isLoggedIn ? (
          <li>
            <NavLink to={routes.favorites}>Filmat e preferuar</NavLink>
          </li>
        ) : null}
      </ul>
    </UNavbar>
  );
};

export default Navbar;
