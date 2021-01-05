import React, { useState } from "react";
import { Form, Input } from "../../components";
import styled from "styled-components";
import { RiSearchLine, RiCloseFill } from "react-icons/ri";

const USearch = styled.div`
  margin-right: 3rem;
  display: flex;
  align-items: center;

  form {
    margin-left: 2rem;
    position: relative;
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

const Search = () => {
  const [open, setOpen] = useState(false);

  return (
    <USearch>
      <Form>
        {open ? (
          <Input variant="light" placeholder="Search for any movie" />
        ) : null}

        <USearchIon onClick={() => setOpen(!open)}>
          {open ? <RiCloseFill /> : <RiSearchLine />}
        </USearchIon>
      </Form>
    </USearch>
  );
};

export default Search;
