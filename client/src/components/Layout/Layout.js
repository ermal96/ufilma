import React from "react";
import Header from "./Header";
import styled from "styled-components";

const ULayout = styled.main`
  display: flex;
  flex-direction: column;
`;
const UContent = styled.article`
  padding: 25px;
  background: ${({ theme }) => theme.colors.accent};
  min-height: calc(
    100vh - ${({ theme }) => theme.constants.headerHeight + "rem"}
  );
`;

const Layout = ({ children }) => {
  return (
    <ULayout>
      <Header />
      <UContent>{children}</UContent>
    </ULayout>
  );
};

export default Layout;
