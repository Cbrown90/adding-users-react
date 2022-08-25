import React from "react";
import Card from "./Card";
import Button from "./Button";
import ErrorModalClasses from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={ErrorModalClasses.backdrop} onClick={props.onClose}></div>
      <Card className={ErrorModalClasses.modal}>
        <header className={ErrorModalClasses.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={ErrorModalClasses.content}>
          <p>{props.message}</p>
        </div>
        <footer className={ErrorModalClasses.actions}>
          <Button onClick={props.onClose}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
