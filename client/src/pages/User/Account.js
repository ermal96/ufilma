import React, { useState, useEffect } from "react";
import { Container, Layout, Input, Form, Button, Seo, FavoriteButton, PageHeader } from "../../components";
import styles from "./Account.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { setError, updateUser } from "../../store/actions/userActions";
import { getUserFavoriteMovies } from "../../store/actions/moviesAction";
import AccountImg from "../../assets/account.svg";
import message from "../../utils/message";
import { RiSettings2Line, RiHeartsLine } from "react-icons/ri";

const Account = () => {
  const dispatch = useDispatch();

  const favoriteMoviesId = useSelector(({ user }) => user.favoriteMovies);
  const hasError = useSelector(({ user }) => user.error);
  const favoriteMovies = useSelector(({ movies }) => movies.userFavoriteMovies);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [activeNav, setActiveNav] = useState("info");

  const user = useSelector(({ user }) => user.user);
  const loggedIn = useSelector(({ user }) => user.loggedIn);

  useEffect(() => {
    if (loggedIn) {
      setName(user.name);
      setEmail(user.email);
    }

    dispatch(getUserFavoriteMovies(favoriteMoviesId));
  }, [loggedIn, user.name, user.email, dispatch, favoriteMoviesId, hasError]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (password === repeatPassword) {
      dispatch(setError(false));
      dispatch(updateUser({ id: user.id, name, email, password, currentPassword }));
    } else {
      message.error("Fjalëkalimi nuk perputhet");

      dispatch(setError(true));
    }

    if (hasError) {
      setDisabled(true);
    }
  };

  return (
    <Layout>
      <Seo title="Llogaria" description="Llogaria" />
      <PageHeader
        height="35rem"
        imageUrl="https://images.unsplash.com/photo-1423479185712-25d4a4fe1006?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80"
        title="LLogaria"
      />
      <Container>
        <div className={styles.accountContainer}>
          <div className={styles.accountNav}>
            <ul>
              <li onClick={() => setActiveNav("info")} className={activeNav === "info" ? styles.active : null}>
                <RiSettings2Line />
                Mofifiko profilin
              </li>
              <li onClick={() => setActiveNav("favorites")} className={activeNav === "favorites" ? styles.active : null}>
                <RiHeartsLine />
                Filmat e preferuar
              </li>
            </ul>
          </div>

          <div className={styles.accountContent}>
            {activeNav === "info" ? (
              <Form onSubmit={onSubmit}>
                <Input
                  size="md"
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
                  size="md"
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
                  type="text"
                  placeholder="Email"
                  autoComplete="email"
                />

                <Input
                  size="md"
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
                  placeholder="Fjalëkalimi Aktual"
                />

                <Input
                  size="md"
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
                  placeholder="Fjalëkalimi Ri"
                />

                <Input
                  size="md"
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
                  placeholder="Përserit Fjalëkalimin"
                />

                <Button disabled={disabled} size="md" width={100} variant="filled" type="submit">
                  Modifiko Profilin
                </Button>
              </Form>
            ) : (
              <div className={styles.favoriteMovies}>
                {favoriteMovies.length ? (
                  favoriteMovies.map((movie) => (
                    <div className={styles.accountFavoriteMovies} key={movie._id}>
                      <img src={process.env.REACT_APP_SERVER + movie.thumbnail} alt="Imazhi filmit" />
                      <div className={styles.accountFavoriteMoviesFlex}>
                        <p>{movie.name}</p>

                        <FavoriteButton movieName={movie.name} movieId={movie._id} />
                      </div>
                    </div>
                  ))
                ) : (
                  <>
                    <h3>Ju nuk keni asnje film te preferuar</h3>

                    <p>Ju mund te shtoni filmat tuaj te preferuar duke klikuar iken me zemer</p>
                  </>
                )}
              </div>
            )}
          </div>

          <div className={styles.accountImg}>
            <img src={AccountImg} alt="Imazhi Llogarisë" />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Account;
