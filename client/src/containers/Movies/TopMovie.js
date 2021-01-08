import React from "react";
import { useSelector } from "react-redux";
import { TopMovieCard } from "../../components";
import styled from "styled-components";
import ContentLoader from "react-content-loader";

const UTopMovie = styled.section`
  height: 100%;
`;

const TopMovie = () => {
  const topMovie = useSelector(({ movies }) => movies.recentMovies);

  return (
    <UTopMovie>
      {topMovie.length ? (
        <TopMovieCard key={topMovie[0]._id} movie={topMovie[0]} />
      ) : (
        <ContentLoader
          speed={2}
          width={505}
          height={310}
          viewBox="0 0 505 310"
          backgroundColor="#4d4c4c"
          foregroundColor="#626364"
        >
          <path d="M 25.5 64.5 h 58 v 8 h -58 z" />
          <path d="M 83 65 v 7 H 26 v -7 h 57 m 1 -1 H 25 v 9 h 59 v -9 z" />
          <path d="M 25.5 91.5 h 136 v 19 h -136 z" />
          <path d="M 161 92 v 18 H 26 V 92 h 135 m 1 -1 H 25 v 20 h 137 V 91 z" />
          <path d="M 25.5 128.5 h 256 v 81 h -256 z" />
          <path d="M 281 129 v 80 H 26 v -80 h 255 m 1 -1 H 25 v 82 h 257 v -82 z" />
          <path d="M 25.5 223.5 h 72 v 22 h -72 z" />
          <path d="M 97 224 v 21 H 26 v -21 h 71 m 1 -1 H 25 v 23 h 73 v -23 z" />
        </ContentLoader>
      )}
    </UTopMovie>
  );
};

export default TopMovie;
