import React, { useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../store/actions/moviesAction";
import { TopMovie, RecentMovies } from "../../containers";
import { Fade, Layout, Seo, Spinner } from "../../components";
import { getCategories } from "../../store/actions/categoriesAction";

const SliderSection = React.lazy(() => import("../../containers/Movies/SliderSection"));

const Home = () => {
  const dispatch = useDispatch();
  const categories = useSelector(({ categories }) => categories.categories);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getMovies({ limit: 36 }));
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
          <Suspense fallback="loading..">
            {categories.slice(0, 5).map((category) => {
              return <SliderSection key={category._id} category={category.name} />;
            })}
          </Suspense>
        </Fade>
      )}
    </Layout>
  );
};

export default Home;
