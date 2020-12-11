import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../../store/actions/moviesAction";
import { Input } from "../../components/Design";

const Home = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState({});

  const formData = new FormData();

  const onSubmit = (e) => {
    e.preventDefault();
    formData.append("file", image);

    dispatch(addMovie(formData));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Input
          onChange={(e) => setImage(e.target.files[0])}
          name="file"
          type="file"
        />
        <button type="submit">upload</button>
      </form>
    </div>
  );
};

export default Home;
