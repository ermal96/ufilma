import React from "react";
import styled from "styled-components";
import { setColor, setSize } from "../Helpers";

const UButon = styled.button`
  border: 2px solid ${(props) => setColor(props.variant, props.theme.colors)};
  color: ${(props) => setColor(props.variant, props.theme.colors)};
  background: transparent;
  padding: ${(props) => setSize(props.size, props.theme.sizes)};
  min-width: 100px;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
`;

const Button = ({ size, children, variant, ...rest }) => {
  return (
    <UButon size={size} variant={variant} {...rest}>
      {children}
    </UButon>
  );
};

export default Button;
