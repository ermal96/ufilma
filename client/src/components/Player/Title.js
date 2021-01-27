import React from "react";
import styled from "styled-components";

const UTitlePlayer = styled.p`
  font-size: 1.9rem;
  font-weight: bold;

  @media (max-width: 767px) {
    display: none;
  }
`;

const Title = ({ children }) => {
  return <UTitlePlayer>{children}</UTitlePlayer>;
};

export default Title;
