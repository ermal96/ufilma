import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getMovies, addMovie } from "../../store/actions/moviesAction";

const Home = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [quality, setQuality] = useState("");

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(addMovie({ name, quality }));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          className="p-6 shadow-sm"
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="name"
          value={name}
        />
        <input
          onChange={(e) => setQuality(e.target.value)}
          type="text"
          placeholder="quality"
          value={quality}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Home;
