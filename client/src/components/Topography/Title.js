import React from "react";
import styled from "styled-components";

const UTitle = styled.h1`
  font-size: 2.7rem;
  position: relative;
  color: ${({ theme }) => theme.colors.main};
  margin-top: 2.5rem;
  display: inline-block;
  border-bottom: 0.2rem solid ${({ theme }) => theme.colors.accent};
`;

const Title = ({ children }) => {
  return <UTitle>{children}</UTitle>;
};

export default Title;
