import React from "react";
import styled, { keyframes } from "styled-components";
import { RiLoader4Line } from "react-icons/ri";

const rotate = keyframes`
from {
  
   transform: rotate(0deg)
 }
 
 to {
   
   transform: rotate(360deg)
 }

`;

const UPlayerLoader = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%);
  font-size: 7rem;
  z-index: 10;

  svg {
    animation: ${rotate} 1s infinite;
  }
`;

const Loader = ({ buffering }) => {
  return (
    <>
      {buffering ? (
        <UPlayerLoader>
          <RiLoader4Line />
        </UPlayerLoader>
      ) : null}
    </>
  );
};

export default Loader;
