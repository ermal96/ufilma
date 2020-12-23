import React from "react";
import styled from "styled-components";

const UContainer = styled.div`
  padding: 2.5rem;
  margin: 0 auto;
`;

const Container = ({ children }) => {
  return <UContainer>{children}</UContainer>;
};

export default Container;
