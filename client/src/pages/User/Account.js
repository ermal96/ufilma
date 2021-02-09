import React, { useState, useEffect } from "react";
import { Container, Layout, Input, Form, Button, Seo, Title, FavoriteButton } from "../../components";
import styles from "./Account.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../store/actions/userActions";
import { getUserFavoriteMovies } from "../../store/actions/moviesAction";
import AccountImg from "../../assets/account.svg";
import message from "../../utils/message";
const Account = () => {
  const dispatch = useDispatch();

  const favoriteMoviesId = useSelector(({ user }) => user.favoriteMovies);
  const favoriteMovies = useSelector(({ movies }) => movies.userFavoriteMovies);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [disabled, setDisabled] = useState(true);

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

    if (password === repeatPassword) {
      dispatch(updateUser({ id: user.id, name, email, password, currentPassword }));

      setPassword("");
      setCurrentPassword("");
      setRepeatPassword("");
    } else {
      message.error("Fjalkalimi nuk perputhet");
    }
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
              onChange={(e) => {
                setName(e.target.value);
                setDisabled(false);
              }}
              onKeyPress={(e) => {
                e.key === "Enter" && e.preventDefault();
              }}
              value={name}
              type="text"
              placeholder="Emer"
              autoComplete="name"
            />

            <Input
              display="block"
              variant="light"
              onChange={(e) => {
                setEmail(e.target.value);
                setDisabled(false);
              }}
              onKeyPress={(e) => {
                e.key === "Enter" && e.preventDefault();
              }}
              value={email}
              type="email"
              placeholder="Email"
              autoComplete="email"
            />

            <Input
              variant="light"
              display="block"
              onChange={(e) => {
                setCurrentPassword(e.target.value);
                setDisabled(false);
              }}
              onKeyPress={(e) => {
                e.key === "Enter" && e.preventDefault();
              }}
              value={currentPassword}
              type="password"
              autoComplete="password"
              placeholder="Fjalkalimi Aktual"
            />

            <Input
              variant="light"
              display="block"
              onChange={(e) => {
                setPassword(e.target.value);
                setDisabled(false);
              }}
              onKeyPress={(e) => {
                e.key === "Enter" && e.preventDefault();
              }}
              value={password}
              type="password"
              autoComplete="new-password"
              placeholder="Fjalekalimi Ri"
            />

            <Input
              variant="light"
              display="block"
              onChange={(e) => {
                setRepeatPassword(e.target.value);
                setDisabled(false);
              }}
              onKeyPress={(e) => {
                e.key === "Enter" && e.preventDefault();
              }}
              value={repeatPassword}
              type="password"
              autoComplete="repeat-password"
              placeholder="Perserit Fajlkaleimin"
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

            <Button disabled={disabled} width={100} variant="filled" type="submit">
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
