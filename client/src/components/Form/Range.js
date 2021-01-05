import React from "react";
import styled from "styled-components";

const URange = styled.input`
  transition: all 0.3s ease;
  width: 100%;

  appearance: none;
  -moz-appearance: auto;
  -webkit-appearance: none;
  height: 0.3rem;

  &:focus {
    outline: none;
  }

  /* chrome */
  &::-webkit-slider-runnable-track {
    cursor: pointer;
    height: 0.4rem;
    border: none;
    border-radius: 3px;
    background: ${({ theme }) => theme.colors.light};
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    cursor: pointer;
    appearance: none;
    border: none;
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
    background-color: white;
    margin-top: -0.6rem;
    border: none;
    background: ${({ theme }) => theme.colors.light};
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.4);
    }
  }

  /* firefox */

  &::-moz-range-track {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.light};
  }
  &::-moz-range-thumb {
    cursor: pointer;
    border-radius: 50%;
    border: none;
    background: ${({ theme }) => theme.colors.light};
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.4);
    }
  }
`;

const Range = ({ onChange, min, max, value }) => {
  return (
    <URange
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
