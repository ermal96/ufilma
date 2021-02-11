import React from "react";
import { Form, Input } from "../../components";
import { RiSearch2Line, RiCloseFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../store/actions/headerActions";
import { resetSearch, searchMovies } from "../../store/actions/searchAction";
import { routes } from "../../routes";
import { Link } from "react-router-dom";
import styles from "./Search.module.scss";

const Search = ({ searchOpen }) => {
  const open = useSelector(({ header }) => header.search);
  const searchResult = useSelector(({ search }) => search.result);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearchIcon = () => {
    dispatch(setSearch(!open));
    dispatch(resetSearch());
  };

  const handleSearchChange = (e) => {
    if (e.target.value.length > 2) {
      dispatch(searchMovies(e.target.value));
    }

    if (e.target.value.length === 0) {
      dispatch(resetSearch());
    }
  };

  return (
    <div className={styles.search} title="Kërko" variant={searchOpen ? "open" : null}>
      <Form onSubmit={onSubmit}>
        {open ? <Input onChange={(e) => handleSearchChange(e)} variant="light" placeholder="Kërko per filma" /> : null}

        <div className={styles.searchIcon} onClick={handleSearchIcon}>
          {open ? <RiCloseFill /> : <RiSearch2Line />}
        </div>
      </Form>

      {open ? (
        <div className={styles.searchResult}>
          {searchResult.length ? (
            <>
              {searchResult.map((result) => {
                return (
                  <Link key={result._id} style={{ textDecoration: "none" }} to={routes.movies + "/" + result._id}>
                    <div className={styles.searchResultItem}>
                      <img src={process.env.REACT_APP_SERVER + result.thumbnail} alt={result.name} />
                      <div>
                        <h2>{result.name}</h2>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default Search;
