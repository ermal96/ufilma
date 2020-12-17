import React from "react";
import styled from "styled-components";
import { setColor, setSize } from "../Helpers";

const UInput = styled.input`
  border: 0.2rem solid ${(props) => setColor(props.variant, props.theme.colors)};
  color: ${(props) => setColor(props.variant, props.theme.colors)};
  padding: ${(props) => setSize(props.size, props.theme.sizes)};
  border-radius: ${({ theme }) => theme.constants.radiusSm + "rem"};
  outline: none;
  margin-bottom: 2rem;
  display: ${(props) => (props.display ? props.display : "inline")};
  min-width: 20rem;
  background: transparent;
  filter: none;

  &:focus {
    border: 0.2rem solid ${({ theme }) => theme.colors.secondary};
  }
`;

const Input = ({ size, variant, display, ...rest }) => {
  return <UInput size={size} display={display} variant={variant} {...rest} />;
};

export default Input;
