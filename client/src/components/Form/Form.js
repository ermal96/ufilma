import React from "react";
import styled from "styled-components";

const UForm = styled.form`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.center ? "center" : "unset")};
`;

const Form = ({ center, children, ...rest }) => {
  return (
    <UForm center={center} {...rest}>
      {children}
    </UForm>
  );
};

export default Form;
