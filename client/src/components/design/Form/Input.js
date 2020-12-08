import React from "react";

const Input = ({ type, placeholder, value, ...rest }) => {
  return <input type={type} placeholder={placeholder} {...rest} />;
};

export default Input;
