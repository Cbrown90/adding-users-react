import React from "react";
import ButtonCSS from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={ButtonCSS.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
              {props.children}
              
    </button>
  );
};

export default Button;
