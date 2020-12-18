import React from "react";
import styled from "styled-components";

const UError = styled.div`
  color: ${({ theme }) => theme.colors.danger};
  font-size: 1.4rem;
`;

const Error = ({ children }) => {
  return <UError>{children}</UError>;
};

export default Error;
