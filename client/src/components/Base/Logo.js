import React from "react";
import styled from "styled-components";
import LogoSrc from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { routes } from "../../routes";

const ULogo = styled.img`
  width: 13rem;
`;

const Logo = () => {
  return (
    <Link to={routes.home}>
      <ULogo src={LogoSrc} alt="Logo" />
    </Link>
  );
};

export default Logo;
