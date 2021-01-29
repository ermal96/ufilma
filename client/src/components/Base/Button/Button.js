import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { setColor, setSize } from "../../Helpers";

const UButon = styled.button`
  border: 0.2rem solid ${(props) => setColor(props.variant, props.theme.colors)};
  color: ${(props) => setColor(props.variant, props.theme.colors)};
  background: transparent;
  padding: ${(props) => setSize(props.size, props.theme.sizes)};
  min-width: 9rem;
  border-radius: ${({ theme }) => theme.constants.radiusSm + "rem"};
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease;
  width: ${(props) => (props.width ? props.width + "px" : "auto")};
  a {
    color: inherit;
    text-decoration: none;
  }
  &:active {
    border: 0.2rem solid ${({ theme }) => theme.colors.accent};
  }
  &:hover {
    border: 0.2rem solid ${({ theme }) => theme.colors.accent};
  }
`;

const Button = ({ width, size, children, variant, href, ...rest }) => {
  return (
    <UButon width={width} size={size} variant={variant} {...rest}>
      {href ? <Link to={href}>{children}</Link> : children}
    </UButon>
  );
};

export default Button;
