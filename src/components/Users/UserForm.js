import React, { useState, useRef } from "react";
import Button from "../UI/Button";

const UserForm = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    let userValid = true;
    let nameValueFromRef = nameInputRef.current.value;
    let ageValueFromRef = ageInputRef.current.value;

    if (nameValueFromRef.trim().length === 0) {
      props.onError("Username Invalid");
      userValid = false;
    };
    if (!ageValueFromRef.trim() > 0) {
      props.onError("Age Invalid");
      userValid = false;
    };

    if (userValid) {
      const newUser = {
        username: nameValueFromRef,
        age: +ageValueFromRef,
      };

      props.onSaveNewUser(newUser);
      nameInputRef.current.value = "";
      ageInputRef.current.value = "";
    };
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="username"> Username </label>
      <input
        id="username"
        type="text"        
        ref ={nameInputRef}
      />
      <label htmlFor="age"> Ages (years) </label>
      <input
        id="age"
        type="number"
        min="1"
        step="1"
        ref ={ageInputRef}
      />
      <Button type="submit">Add User</Button>
    </form>
  );
};

export default UserForm;
