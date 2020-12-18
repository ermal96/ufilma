import React from "react";
import styled from "styled-components";
import { setColor, setSize } from "../Helpers";

const UButon = styled.button`
  border: 0.2rem solid ${(props) => setColor(props.variant, props.theme.colors)};
  color: ${(props) => setColor(props.variant, props.theme.colors)};
  background: transparent;
  padding: ${(props) => setSize(props.size, props.theme.sizes)};
  min-width: 9rem;
  border-radius: ${({ theme }) => theme.constants.radiusSm + "rem"};
  outline: none;
  cursor: pointer;
  transition: border 0.1s ease;
  width: ${(props) => (props.width ? props.width + "px" : "auto")};

  &:active {
    border: 0.2rem solid ${({ theme }) => theme.colors.secondary};
  }
`;

const Button = ({ width, size, children, variant, ...rest }) => {
  return (
    <UButon width={width} size={size} variant={variant} {...rest}>
      {children}
    </UButon>
  );
};

export default Button;
