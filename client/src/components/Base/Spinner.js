import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

const USpinner = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Spinner = () => {
  return (
    <USpinner>
      <Logo />
    </USpinner>
  );
};

export default Spinner;
