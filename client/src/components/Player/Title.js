import React from "react";
import styled from "styled-components";

const UTitlePlayer = styled.p`
  font-size: 1.9rem;
  font-weight: bold;
`;

const Title = ({ children }) => {
  return <UTitlePlayer>{children}</UTitlePlayer>;
};

export default Title;
