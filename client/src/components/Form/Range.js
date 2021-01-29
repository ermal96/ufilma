import React from "react";
import styled from "styled-components";

const URange = styled.input`
  transition: background 0.3s ease;
  width: 100%;
  transition: all 0.3s ease;
  appearance: none;
  -moz-appearance: auto;
  -webkit-appearance: none;
  height: 0.4rem;
  cursor: pointer;
  background: linear-gradient(
    to right,
    /* red ////////////////////////////////////////////*/
      ${({ theme }) => theme.colors.accent} 0%,
    ${({ theme }) => theme.colors.accent} ${(props) => props.value * 100 + "%"},
    /* light */ ${({ theme }) => theme.colors.main}
      ${(props) => props.value * 100 + "%"},
    ${({ theme }) => theme.colors.main} 100%
  );

  &:focus {
    outline: none;
  }

  /* chrome */
  &::-webkit-slider-runnable-track {
    height: 0.7rem;
    border: none;
    border-radius: 50px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    border: none;
    height: 1.3rem;
    width: 1.3rem;
    background: ${({ theme }) => theme.colors.accent};
    margin-top: -0.3rem;
    border-radius: 50%;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.6);
    }
  }

  /* firefox */

  &::-moz-range-track {
    cursor: pointer;
  }
  &::-moz-range-thumb {
    cursor: pointer;
    border-radius: 0;
    border: none;
    height: 1.3rem;
    width: 1.3rem;
    background: ${({ theme }) => theme.colors.accent};
    margin-top: -0.2rem;
    border-radius: 50%;

    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.6);
    }
  }
`;

const Range = ({ onChange, value, onMouseUp, onMouseDown, loaded }) => {
  return (
    <URange
      loaded={loaded}
      onMouseUp={onMouseUp}
      onMouseDown={onMouseDown}
      step="any"
      type="range"
      min={0}
      max={1}
      value={value}
      onChange={onChange}
    />
  );
};

export default Range;
