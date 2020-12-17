import React from "react";
import Logo from "../Base/Logo";
import styled from "styled-components";
import Navbar from "./Navbar";
import UserDropdown from "../Base/UserDropdown";

const UHeader = styled.header`
  background: ${({ theme }) => theme.colors.primary};
  height: ${({ theme }) => theme.constants.headerHeight + "rem"};
  display: flex;
  align-items: center;
  padding: 0 2.5rem;
  justify-content: space-between;
`;

const UHeaderNav = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Header = () => {
  return (
    <UHeader>
      <UHeaderNav>
        <Logo />
        <Navbar />
      </UHeaderNav>
      <UserDropdown />
    </UHeader>
  );
};

export default Header;
