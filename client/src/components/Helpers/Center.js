import React from "react";
import styled from "styled-components";

const UStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  flex-direction: column;
`;

const Center = ({ children, ...rest }) => {
  return <UStyled {...rest}>{children}</UStyled>;
};

export default Center;
