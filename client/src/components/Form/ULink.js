import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const UILink = styled.p`
  margin: 1rem 0 2rem 0;
  a {
    color: ${({ theme }) => theme.colors.white} !important;
    text-decoration: none;
    display: flex;
    align-items: center;

    svg {
      margin-top: 0.3rem;
      margin-left: 0.5rem;
      path {
        stroke: inherit;
      }
    }
  }
`;

const ULink = ({ title, to }) => {
  return (
    <UILink>
      <Link to={to}>
        <span>{title}</span> <BsArrowRight />
      </Link>
    </UILink>
  );
};

export default ULink;
