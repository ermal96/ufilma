import React, { useState } from "react";
import { Form, Input } from "../../components";
import styled from "styled-components";
import { RiSearchLine, RiCloseFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../store/actions/headerActions";
import { searchMovies } from "../../store/actions/searchAction";
import { routes } from "../../routes";
import { Link } from "react-router-dom";

const USearch = styled.div`
  margin-right: 3rem;
  display: flex;
  align-items: center;
  width: ${({ searchOpen }) => (searchOpen ? "100%" : "auto")};
  form {
    margin-left: 2rem;
    position: relative;
    @media (max-width: 767px) {
      margin-left: ${({ searchOpen }) => (searchOpen ? 0 : "2rem")};
      margin-right: -1rem;
      width: ${({ searchOpen }) => (searchOpen ? "100%" : "auto")};
    }
    input {
      margin-right: -0.8rem;
      margin-bottom: 0;
      transition: all 0.3s ease;
      padding-right: 3rem;
      background: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const USearchIon = styled.div`
  margin-left: 1rem;
  font-size: 2.2rem;
  cursor: pointer;
  line-height: 0;
  z-index: 10;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  color: ${(props) =>
    props.open ? props.theme.colors.secondary : props.theme.colors.light};
`;

const USearchResult = styled.section`
  display: ${({ hasResult }) => (hasResult ? "block" : "none")};
  position: absolute;
  width: 27rem;
  right: 0;
  background-color: ${({ theme }) => theme.colors.light};
  top: ${({ theme }) => theme.constants.headerHeight + "rem"};
  z-index: 50;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 767px) {
    margin-top: 1rem;
    width: 88vw;
    right: unset;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const USearchResultColumn = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
  display: flex;
  align-items: center;
  padding: 1rem;
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.8;
  }

  color: ${({ theme }) => theme.colors.primary};
  &::last-child {
    border-bottom: none;
  }
  img {
    margin-right: 1rem;
    width: 5rem;
    height: 5rem;
    object-fit: cover;
    object-position: center;
  }
`;

const Search = ({ searchOpen }) => {
  const open = useSelector(({ header }) => header.search);
  const searchResult = useSelector(({ search }) => search.result);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearchIcon = () => {
    dispatch(setSearch(!open));
  };

  const handleSearchChange = (e) => {
    dispatch(searchMovies(e.target.value));
  };

  return (
    <USearch searchOpen={searchOpen}>
      <Form onSubmit={onSubmit}>
        {open ? (
          <Input
            onChange={(e) => handleSearchChange(e)}
            variant="light"
            placeholder="Search for any movie"
          />
        ) : null}

        <USearchIon open={open} onClick={handleSearchIcon}>
          {open ? <RiCloseFill /> : <RiSearchLine />}
        </USearchIon>
      </Form>

      {open ? (
        <USearchResult hasResult={searchResult.length ? true : false}>
          {searchResult.length ? (
            <>
              {searchResult.map((result) => {
                return (
                  <Link
                    style={{ textDecoration: "none" }}
                    to={routes.movies + "/" + result._id}
                  >
                    <USearchResultColumn>
                      <img
                        src={process.env.REACT_APP_SERVER + result.imageUrl}
                        alt={result.name}
                      />
                      <div>
                        <h4>{result.name}</h4>
                        <p>{result.quality.toUpperCase()}</p>
                      </div>
                    </USearchResultColumn>
                  </Link>
                );
              })}
            </>
          ) : null}
        </USearchResult>
      ) : null}
    </USearch>
  );
};

export default Search;
