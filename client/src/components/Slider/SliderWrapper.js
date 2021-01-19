import React from "react";
import styled from "styled-components";
import SwiperCore, { Navigation } from "swiper";
import leftArrow from "../../assets/leftArrow.svg";
import rightArrow from "../../assets/rightArrow.svg";

const USliderWrapper = styled.div`
  .swiper-container {
    overflow-y: visible;
    margin-top: -2.5rem;

    &:hover {
      .swiper-button-prev,
      .swiper-button-next {
        visibility: visible;
      }
    }
  }
  .swiper-button-disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .swiper-button-prev,
  .swiper-button-next {
    transition: all 0.3s ease;
    visibility: hidden;
    z-index: 2;
    cursor: pointer;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 3px;
    position: absolute;
    background-repeat: no-repeat !important;
    background-size: contain !important;
    background-position: center !important;
  }
  .swiper-button-next {
    right: 0;
    background: url(${rightArrow});
  }
  .swiper-button-prev {
    background: url(${leftArrow});
    right: 4rem;
  }
  .swiper-slide {
    max-width: 25rem;
    margin-top: 5rem;
  }
`;

const SliderWrapper = ({ children }) => {
  SwiperCore.use([Navigation]);

  return <USliderWrapper>{children}</USliderWrapper>;
};

export default SliderWrapper;
