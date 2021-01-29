import React from "react";
import Header from "../../containers/Header/Header";
import styled from "styled-components";
import Footer from "../../containers/Footer/Footer";

const ULayout = styled.main`
  display: flex;
  flex-direction: column;
`;

const UWrapper = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  padding-bottom: 5rem;
  min-height: calc(
    100vh - ${({ theme }) => theme.constants.headerHeight + "rem"}
  );
`;

const Layout = ({ children }) => {
  return (
    <ULayout>
      <Header />
      <UWrapper>{children}</UWrapper>
      <Footer />
    </ULayout>
  );
};

export default Layout;
