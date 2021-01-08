import React from "react";
import styled from "styled-components";

const UFooter = styled.footer`
  min-height: 5rem;
  padding: 0 2.5rem;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
`;

const Footer = () => {
  return <UFooter>footer</UFooter>;
};

export default Footer;
