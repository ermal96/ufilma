import React from "react";
import styled from "styled-components";

const UBackground = styled.div`
  background: ${({ theme }) => theme.colors.primary};
`;

const Background = ({ children, variant }) => {
  return <UBackground variant={variant}>{children}</UBackground>;
};

export default Background;
