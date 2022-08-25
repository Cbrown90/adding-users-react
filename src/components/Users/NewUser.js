import React, { useState } from "react";
import UserForm from "./UserForm";
import NewUserCSS from "./NewUser.module.css";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const NewUser = (props) => {
  const saveNewUser = (newUser) => {
    props.onAddNewUser({
      username: newUser.username,
      age: newUser.age,
    });
  };

  let errorsString = props.errors.length > 0 ? props.errors.join('<br />') : "";
  return (
    <div>
      {props.errors.length > 0 && <ErrorModal title="Unable to save" message={errorsString} onClose={props.onErrorClear}/>}
      <Card className={NewUserCSS.input}>
        <UserForm onSaveNewUser={saveNewUser} onError={props.onError} errors={props.errors}/>
        {/* {errorsString} */}
      </Card>
    </div>
  );
};

export default NewUser;
