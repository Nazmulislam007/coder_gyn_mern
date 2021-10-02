import React from "react";
import "./Button.module.css";

const Button = ({ children, ...rest }) => {
  return (
    <>
      <button {...rest}>{children}</button>
    </>
  );
};

export default Button;
