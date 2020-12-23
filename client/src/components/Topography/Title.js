import React from "react";
import styled from "styled-components";

const UTitle = styled.h1`
  font-size: 2.7rem;
  padding-left: 3rem;
  position: relative;
  color: ${({ theme }) => theme.colors.light};

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 2rem;
    height: 0.3rem;
    background: red;
  }
`;

const Title = ({ children }) => {
  return <UTitle>{children}</UTitle>;
};

export default Title;
