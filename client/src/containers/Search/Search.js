import React, { useState } from "react";
import { Form, Input } from "../../components";
import styled from "styled-components";
import { RiSearchLine, RiCloseFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../store/actions/headerActions";

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
`;

const Search = ({ searchOpen }) => {
  const open = useSelector(({ header }) => header.search);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(query);
  };

  return (
    <USearch searchOpen={searchOpen}>
      <Form onSubmit={onSubmit}>
        {open ? (
          <Input
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            variant="light"
            placeholder="Search for any movie"
          />
        ) : null}

        <USearchIon onClick={() => dispatch(setSearch(!open))}>
          {open ? <RiCloseFill /> : <RiSearchLine />}
        </USearchIon>
      </Form>
    </USearch>
  );
};

export default Search;
