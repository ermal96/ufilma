import React from "react";
import Logo from "../../components/Base/Logo";
import styled from "styled-components";
import Navbar from "./Navbar";
// import UserDropdown from "../User/UserDropdown";
import Search from "../Search/Search";
import { useSelector } from "react-redux";

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

const Header = () => {
  const searchOpen = useSelector(({ header }) => header.search);

  return (
    <UHeader>
      <UHeaderWrapper className="wrapper">
        <UHeaderNav searchOpen={searchOpen} className="nav">
          <Logo className={searchOpen ? "hide" : null} />
          <Navbar />
        </UHeaderNav>
        <UHeaderMini searchOpen={searchOpen} className="mini">
          <Search searchOpen={searchOpen} />
          {/* <UserDropdown /> */}
        </UHeaderMini>
      </UHeaderWrapper>
    </UHeader>
  );
};

export default Header;
