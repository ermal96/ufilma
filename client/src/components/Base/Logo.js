import React from "react";
import styled from "styled-components";
import LogoSrc from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { routes } from "../../routes";

const ULogo = styled.img`
  width: 13rem;
  transition: all 0.3s ease;

  @media (max-width: 767px) {
    &.hide {
      display: none;
    }
  }
`;

const Logo = ({ className }) => {
  return (
    <Link style={{ lineHeight: 0 }} to={routes.home}>
      <ULogo className={className} src={LogoSrc} alt="Logo" />
    </Link>
  );
};

export default Logo;
