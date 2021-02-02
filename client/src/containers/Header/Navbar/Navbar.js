import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../../routes";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";
import { setMenuMobile } from "../../../store/actions/headerActions";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import styles from "./Navbar.module.scss";
import cx from "classnames";

const Navbar = () => {
  const menuMobile = useSelector(({ header }) => header.menuMobile);
  const searchOpen = useSelector(({ header }) => header.search);
  const isLoggedIn = useSelector(({ user }) => user.loggedIn);
  const dispatch = useDispatch();
  let location = useLocation();

  const [show, setShow] = useState(false);

  useEffect(() => {
    dispatch(setMenuMobile(false));
  }, [location, dispatch]);

  const handleMenuMobile = () => {
    dispatch(setMenuMobile(!menuMobile));

    if (!menuMobile) {
      setShow("show");
    } else {
      setShow("");
    }
  };

  return (
    <nav className={styles.navbar} searchOpen={searchOpen ? "true" : ""}>
      <div className={styles.navbarMenuIcon} onClick={handleMenuMobile}>
        {menuMobile ? <RiCloseFill /> : <RiMenuFill />}
      </div>
      <ul className={cx(styles.navbarList, styles[show])} visible={searchOpen ? "hide" : ""}>
        <li>
          <NavLink exact to={routes.home}>
            Kreu
          </NavLink>
        </li>
        <li>
          <NavLink to={routes.movies}>Filma</NavLink>
        </li>
        <li>
          <NavLink to={routes.categories}>Kategoritë</NavLink>
        </li>
        {isLoggedIn ? (
          <li>
            <NavLink to={routes.favorites}>Te preferuar</NavLink>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Navbar;
