import React from "react";
import styled from "styled-components";
import { Card, Container } from "../../components";
import { useSelector } from "react-redux";
import { routes } from "../../routes";

const UCategoriesGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 3rem;
  margin-top: 5rem;

  @media (max-width: 991px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 540px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CategoryGrid = () => {
  const categories = useSelector(({ categories }) => categories.categories);

  return (
    <Container>
      <UCategoriesGrid>
        {categories.length
          ? categories.map((category) => (
              <Card
                ratio="1/1"
                backgroundImage={`url(${process.env.REACT_APP_SERVER}${category.thumbnail})`}
                link={routes.categories + "/" + category._id}
                key={category._id}
                title={category.name}
                length={category.movies.length}
                relative
              />
            ))
          : null}
      </UCategoriesGrid>
    </Container>
  );
};

export default CategoryGrid;
