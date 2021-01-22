import React from "react";
import styled from "styled-components";
import AspectRatio from "react-aspect-ratio";
import { Link } from "react-router-dom";

const UPageHeader = styled.div`
  .react-aspect-ratio-placeholder {
    @media (max-width: 767px) {
      height: 30rem;
    }
  }
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to right,
      #0d1117,
      #4244485e,
      #7c7d8126,
      #bcbcbe00,
      #ffffff00
    );
    z-index: 1;
  }
`;
const UPageHeaderBody = styled.div`
  max-width: 40rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 2.5rem;
  z-index: 2;
`;

const UPageHeaderBodyTitle = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
const UPageHeaderBodyDesc = styled.p`
  margin-bottom: 2.5rem;
  font-weight: 1.5rem;
`;

const UPageHeaderBreadcrumb = styled.div`
  display: flex;
  align-items: center;
  a {
    position: relative;
    margin-right: 1rem;
    text-decoration: none;
  }
  a::after {
    content: "/";
    margin-left: 1rem;
    font-size: 1.2rem;
  }
  a:last-child {
    &:after {
      content: "";
    }
    color: red;
  }
`;

const PageHeader = ({ title, description, imageUrl, link }) => {
  return (
    <UPageHeader>
      <AspectRatio
        ratio="16/4"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
        }}
      />

      <UPageHeaderBody>
        <UPageHeaderBodyTitle>{title}</UPageHeaderBodyTitle>
        <UPageHeaderBodyDesc>{description}</UPageHeaderBodyDesc>
        <UPageHeaderBreadcrumb>
          <Link to="/">Kreu</Link> <Link to={link}>{title}</Link>
        </UPageHeaderBreadcrumb>
      </UPageHeaderBody>
    </UPageHeader>
  );
};

export default PageHeader;
