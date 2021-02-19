import React, { useEffect, useState } from "react";
import Logo from "../../../components/Base/Logo/Logo";
import Navbar from "../Navbar/Navbar";
import Search from "../../Search/Search";
import { useSelector } from "react-redux";
import { RiLockLine } from "react-icons/ri";
import { routes } from "../../../routes";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import cx from "classnames";
import UserDropdown from "../../User/UserDropdown/UserDropdown";

const Header = () => {
  const searchOpen = useSelector(({ header }) => header.search);
  const loggedIn = useSelector(({ user }) => user.loggedIn);
  const [sticky, setSticky] = useState("");
  const [lastYOffset, setLastYOffset] = useState(0);

  const [open, setOpen] = useState(false);

  const handleScroll = () => {
    window.addEventListener("scroll", () => {
      const currentYOffset = window.pageYOffset;
      if (currentYOffset < 100) {
        setSticky("");
      } else if (currentYOffset > lastYOffset) {
        setSticky("sticky");
      } else {
        setSticky("sticky");
      }
      setLastYOffset(currentYOffset);
    });
  };

  useEffect(() => {
    window.removeEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScroll);
    if (searchOpen) {
      setOpen("searchOpen");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchOpen]);

  return (
    <header className={cx(styles.header, styles[sticky])}>
      <div className={styles.headerWrapper}>
        <div className={cx(styles.headerNav, styles[open])}>
          <Logo hideMobile={searchOpen ? "hide" : null} />
          <Navbar />
        </div>
        <div className={cx(styles.headerMini, styles[open])}>
          <Search searchOpen={searchOpen} />
          <div className={styles.headerAuth}>
            {loggedIn ? (
              <UserDropdown />
            ) : (
              <Link title="Hyr" to={routes.login}>
                <RiLockLine />
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
