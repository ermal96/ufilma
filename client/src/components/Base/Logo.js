import React from "react";
import styled from "styled-components";
import LogoSrc from "../../assets/logo.svg";

const ULogo = styled.img`
  width: 100%;
  max-width: 130px;
`;

const Logo = () => {
  return <ULogo src={LogoSrc} alt="Logo" />;
};

export default Logo;
