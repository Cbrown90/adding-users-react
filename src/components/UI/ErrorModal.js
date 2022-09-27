import React from "react";
import Card from "./Card";
import Button from "./Button";
import ErrorModalClasses from "./ErrorModal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div className={ErrorModalClasses.backdrop} onClick={props.onClose}></div>
  );
};

const ModalOverlay = (props) => {
  return (
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
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onClose={props.onClose}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
