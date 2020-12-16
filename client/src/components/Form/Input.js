import React from "react";
import styled from "styled-components";
import { setColor, setSize } from "../Helpers";

const UInput = styled.input`
  border: 2px solid ${(props) => setColor(props.variant, props.theme.colors)};
  color: ${(props) => setColor(props.variant, props.theme.colors)};
  padding: ${(props) => setSize(props.size, props.theme.sizes)};
  border-radius: 4px;
  outline: none;
  margin-bottom: 10px;
  display: ${(props) => (props.display ? props.display : "inline")};
`;

const Input = ({ size, variant, display, ...rest }) => {
  return <UInput size={size} display={display} variant={variant} {...rest} />;
};

export default Input;
