import React from "react";
import Logo from "../../components/Base/Logo";
import styled from "styled-components";
import Navbar from "./Navbar";
import { UserDropdown } from "../../components/";

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
  }
`;

const Header = () => {
  return (
    <UHeader>
      <UHeaderWrapper>
        <UHeaderNav>
          <Logo />
          <Navbar />
        </UHeaderNav>
        <UserDropdown />
      </UHeaderWrapper>
    </UHeader>
  );
};

export default Header;
