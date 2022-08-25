import React, { useState } from "react";
import Button from "../UI/Button";

const UserForm = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const enteredUsernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const enteredAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let userValid = true;

    if (enteredUsername.trim().length === 0) {
      props.onError("Username Invalid");
      userValid = false;
    };
    if (!enteredAge.trim() > 0) {
      props.onError("Age Invalid");
      userValid = false;
    };

    if (userValid) {
      const newUser = {
        username: enteredUsername,
        age: +enteredAge,
      };

      props.onSaveNewUser(newUser);
      setEnteredUsername("");
      setEnteredAge("");
    };
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="username"> Username </label>
      <input
        id="username"
        type="text"
        value={enteredUsername}
        onChange={enteredUsernameHandler}
      />
      <label htmlFor="age"> Ages (years) </label>
      <input
        id="age"
        type="number"
        min="1"
        step="1"
        value={enteredAge}
        onChange={enteredAgeHandler}
      />
      <Button type="submit">Add User</Button>
    </form>
  );
};

export default UserForm;
