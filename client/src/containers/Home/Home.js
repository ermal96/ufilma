import React from "react";
import { Layout } from "../../components";
import AspectRatio from "react-aspect-ratio";

const Home = () => {
  return (
    <Layout>
      <h1>Homepage</h1>
      <AspectRatio ratio="16/9">
        <img
          alt="image"
          src="https://c1.staticflickr.com/4/3896/14550191836_cc0675d906.jpg"
        />
      </AspectRatio>
    </Layout>
  );
};

export default Home;
