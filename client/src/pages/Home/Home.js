import React from "react";
import { Layout } from "../../components";
import { RecentMovies, TopMovie } from "../../containers";

const Home = () => {
  return (
    <Layout>
      <TopMovie />
      <RecentMovies />
    </Layout>
  );
};

export default Home;
