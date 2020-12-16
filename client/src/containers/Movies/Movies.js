import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { Table } from "reactstrap";
import axios from "axios";

const Movies = () => {
  const [movies, setMovies] = useState("");

  useEffect(() => {
    axios.get("/movies").then((res) => {
      setMovies(res.data.movies);
    });
  }, []);

  return (
    <Layout>
      {console.log(movies)}
      <Table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Categories</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{movies.map((movie) => movie.name)}</td>
          </tr>
          <tr>
            <td>{movies.map((movie) => movie.name)}</td>
          </tr>
          <tr>
            <td>{movies.map((movie) => movie.name)}</td>
          </tr>
        </tbody>
      </Table>
    </Layout>
  );
};

export default Movies;
