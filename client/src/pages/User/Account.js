import React, { useState, useEffect } from "react";
import { Container, Layout, Input, Form, Button, Seo, Title, FavoriteButton } from "../../components";
import styles from "./Account.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../store/actions/userActions";
import { getUserFavoriteMovies } from "../../store/actions/moviesAction";
import AccountImg from "../../assets/account.svg";

const Account = () => {
  const dispatch = useDispatch();

  const favoriteMoviesId = useSelector(({ user }) => user.favoriteMovies);
  const favoriteMovies = useSelector(({ movies }) => movies.userFavoriteMovies);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = useSelector(({ user }) => user.user);
  const loggedIn = useSelector(({ user }) => user.loggedIn);

  useEffect(() => {
    if (loggedIn) {
      setName(user.name);
      setEmail(user.email);
    }

    dispatch(getUserFavoriteMovies(favoriteMoviesId));
  }, [loggedIn, user.name, user.email, dispatch, favoriteMoviesId]);

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(updateUser({ id: user.id, name, email, password }));
  };

  return (
    <Layout>
      <Seo title="Llogaria" description="Llogaria" />
      <Container>
        <Title>Llogaria</Title>
        <div className={styles.accountContainer}>
          <Form onSubmit={onSubmit}>
            <Input
              display="block"
              variant="light"
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Emer"
              autoComplete="name"
            />

            <Input
              display="block"
              variant="light"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email"
              autoComplete="email"
            />

            <Input
              variant="light"
              display="block"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              autoComplete="current-password"
              placeholder="Fjalekalimi"
            />
            {favoriteMovies.length
              ? favoriteMovies.map((movie) => (
                  <div className={styles.accountFavoriteMovies} key={movie._id}>
                    <img src={process.env.REACT_APP_SERVER + movie.thumbnail} alt="Imazhi filmit" />
                    <div className={styles.accountFavoriteMoviesFlex}>
                      <p>{movie.name}</p>

                      <FavoriteButton movieName={movie.name} movieId={movie._id} />
                    </div>
                  </div>
                ))
              : null}

            <Button width={100} variant="filled" type="submit">
              Modifiko Profilin
            </Button>
          </Form>

          <div>
            <img src={AccountImg} alt="Imazhi Llogarise" />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Account;
