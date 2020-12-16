import React from "react";
import styled from "styled-components";

const UForm = styled.form`
  width: 100%;
`;

const Form = ({ children, ...rest }) => {
  return <UForm {...rest}>{children}</UForm>;
};

export default Form;
