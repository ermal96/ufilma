import React from "react";
import styled, { keyframes } from "styled-components";
import Logo from "./Logo";

const zoom = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.2);
  }
`;

const USpinner = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    animation: ${zoom} 1s linear infinite;
  }
`;

const Spinner = () => {
  return (
    <USpinner>
      <Logo />
    </USpinner>
  );
};

export default Spinner;
