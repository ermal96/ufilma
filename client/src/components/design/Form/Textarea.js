import React from "react";

const Textarea = ({ children, ...rest }) => {
  return <textarea {...rest}>{children}</textarea>;
};

export default Textarea;
