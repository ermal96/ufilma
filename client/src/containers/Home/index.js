import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../store/actions/moviesAction";

const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector(({ movies }) => movies);
  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <div>
      homepage here
      <p>{console.log(movies)}</p>
    </div>
  );
};

export default Home;
