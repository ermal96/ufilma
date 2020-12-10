import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  border: 2px solid ${({ theme }) => theme.colors.primary};
  display: block;
  margin: 10px 0;
`;

const Input = ({ value, placeholder, ...rest }) => {
  return <StyledInput value={value} placeholder={placeholder} {...rest} />;
};

export default Input;
