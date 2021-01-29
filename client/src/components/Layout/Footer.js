import React from "react";
import styled from "styled-components";

const UFooterWrapper = styled.footer`
  min-height: 5rem;
  padding: 0 2.5rem;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
`;

const UFooter = ({ children, ...rest }) => {
  return <UFooterWrapper {...rest}>{children}</UFooterWrapper>;
};

export default UFooter;
