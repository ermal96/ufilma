import React from "react";
import Header from "../../containers/Header/Header";
import styled from "styled-components";

const ULayout = styled.main`
  display: flex;
  flex-direction: column;
`;

const UWrapper = styled.div`
  background: ${({ theme }) => theme.colors.accent};
  min-height: calc(
    100vh - ${({ theme }) => theme.constants.headerHeight + "rem"}
  );
`;

const Layout = ({ children }) => {
  return (
    <ULayout>
      <Header />
      <UWrapper>{children}</UWrapper>
    </ULayout>
  );
};

export default Layout;
