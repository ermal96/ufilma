import React, { useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../store/actions/moviesAction";
import { TopMovie } from "../../containers";
import { Fade, Layout, Seo, Spinner } from "../../components";
import { getCategories } from "../../store/actions/categoriesAction";

const SliderSection = React.lazy(() => import("../../containers/Movies/SliderSection"));
const RecentMovies = React.lazy(() => import("../../containers/Movies/RecentMovies"));

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
          <Suspense fallback="">
            <RecentMovies />
          </Suspense>

          {categories.slice(0, 5).map((category) => {
            return (
              <Suspense key={category._id} fallback="">
                <SliderSection category={category.name} />{" "}
              </Suspense>
            );
          })}
        </Fade>
      )}
    </Layout>
  );
};

export default Home;
