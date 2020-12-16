import React from "react";
import styled from "styled-components";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

const Aside = styled.aside`
  background: var(--dark);
  color: var(--white);
  padding: 15px;
  height: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Sidebar = () => {
  return (
    <Aside>
      <Logo />
      <Nav />
      <Footer />
    </Aside>
  );
};

export default Sidebar;
