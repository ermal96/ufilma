import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../store/actions/moviesAction";
import { TopMovie, RecentMovies, SliderSection, WatchingMovies } from "../../containers";
import { Fade, Layout, Seo, Spinner } from "../../components";
import { getCategories } from "../../store/actions/categoriesAction";

const Home = () => {
  const dispatch = useDispatch();
  const categories = useSelector(({ categories }) => categories.categories);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getMovies());
  }, [dispatch]);

  const isLoading = useSelector(({ app }) => app.loading);

  return (
    <Layout>
      <Seo title="Kreu" description="Shiko filmat e fundit ne nje kualitet tjetër" />
      {isLoading ? (
        <Spinner />
      ) : (
        <Fade>
          <TopMovie />
          <RecentMovies />
          <WatchingMovies />
          {categories.slice(0, 10).map((category) => {
            return <SliderSection key={category._id} category={category.name} />;
          })}
        </Fade>
      )}
    </Layout>
  );
};

export default Home;
