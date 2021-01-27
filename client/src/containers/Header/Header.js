import React from "react";
import Logo from "../../components/Base/Logo";
import styled from "styled-components";
import Navbar from "./Navbar";
import Search from "../Search/Search";
import { useSelector } from "react-redux";
import { RiLockLine } from "react-icons/ri";
import { routes } from "../../routes";
import { Link } from "react-router-dom";

import UserDropdown from "../../containers/User/UserDropdown";

const UHeader = styled.header`
  background: ${({ theme }) => theme.colors.primary};
`;

const UHeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  padding: 0 2.5rem;
  justify-content: space-between;
  height: ${({ theme }) => theme.constants.headerHeight + "rem"};
  margin: 0 auto;
`;

const UHeaderNav = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  @media (max-width: 767px) {
    justify-content: space-between;
    width: ${({ searchOpen }) => (searchOpen ? "auto" : "100%")};
  }
`;

const UHeaderMini = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 767px) {
    justify-content: space-between;
    width: ${({ searchOpen }) => (searchOpen ? "100%" : "auto")};
  }
`;

const UAuth = styled.div`
  font-size: 2.5rem;
  margin-left: 2rem;
  display: flex;
  @media (max-width: 767px) {
    margin-left: 3rem;
  }
  a {
    display: flex;
    align-items: center;
  }
  svg {
    cursor: pointer;
  }
`;

const Header = () => {
  const searchOpen = useSelector(({ header }) => header.search);
  const loggedIn = useSelector(({ user }) => user.loggedIn);

  return (
    <UHeader>
      <UHeaderWrapper className="wrapper">
        <UHeaderNav searchOpen={searchOpen} className="nav">
          <Logo className={searchOpen ? "hide" : null} />
          <Navbar />
        </UHeaderNav>
        <UHeaderMini searchOpen={searchOpen} className="mini">
          <Search searchOpen={searchOpen} />
          <UAuth>
            {loggedIn ? (
              <UserDropdown />
            ) : (
              <Link title="Login" to={routes.login}>
                <RiLockLine />
              </Link>
            )}
          </UAuth>
        </UHeaderMini>
      </UHeaderWrapper>
    </UHeader>
  );
};

export default Header;
