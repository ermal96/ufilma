import React from "react";
import styled from "styled-components";

const USingleMovieCard = styled.div`
  padding: 2.5rem;
`;

const USingleMovieCardTitle = styled.h1`
  margin-bottom: 2rem;
  font-weight: bold;
  font-size: 3.8rem;
  position: relative;
  padding-right: 2rem;
`;

const USingleMovieCardCategories = styled.span`
  border: 1px solid ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.main};
  padding: 0.2rem 0.7rem;
  font-weight: bold;
  margin-bottom: 2rem;
  display: inline-block;
  margin-right: 0.5rem;
  font-size: 1.3rem;
`;

const USingleMovieCardBody = styled.p`
  margin-bottom: 2rem;
  font-size: 1.6rem;
  max-width: 100rem;
`;

const USingleMovieCardQuality = styled.p`
  position: absolute;
  top: 1rem;
  right: 0;
  font-size: 1.5rem;
  text-transform: uppercase;
`;

const USingleMovieCardYear = styled.span`
  margin-bottom: 1rem;
  display: inline-block;
  margin-right: 2rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.accent};
`;

const USingleMovieCardTime = styled.span`
  margin-bottom: 1rem;
  margin-right: 2rem;
  display: inline-block;
  color: ${({ theme }) => theme.colors.accent};
`;

const USingleMovieCardRated = styled.p`
  margin-bottom: 1rem;
`;

const SingleMovieCard = ({ data }) => {
  return (
    <USingleMovieCard>
      <USingleMovieCardYear>{data.year}</USingleMovieCardYear>
      <USingleMovieCardTime>{data.time} min</USingleMovieCardTime>

      <USingleMovieCardTitle>
        {data.name}
        <USingleMovieCardQuality>{data.quality}</USingleMovieCardQuality>
      </USingleMovieCardTitle>
      {data.categories
        ? data.categories.map((category) => {
            return (
              <USingleMovieCardCategories key={category._id}>
                {category.name}
              </USingleMovieCardCategories>
            );
          })
        : null}

      <USingleMovieCardRated>Rated: {data.ratio}</USingleMovieCardRated>

      <USingleMovieCardBody>{data.description}</USingleMovieCardBody>
    </USingleMovieCard>
  );
};

export default SingleMovieCard;
