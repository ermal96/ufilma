import React from "react";
import styled from "styled-components";

const UGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2.5rem;
  margin-top: 3rem;

  @media (max-width: ${({ theme }) => theme.mediaQuery.desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Grid = ({ children }) => {
  return <UGrid>{children}</UGrid>;
};

export default Grid;
