import React, { useState } from "react";
import UserList from "./UserList";
import NewUser from "./NewUser";
import Card from "../UI/Card";

const Users = (props) => {
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState([]);

  const addUserHandler = (user) => {

    if (users.filter((e) => e.username === user.username).length > 0) {
      addError("User already exists");
    } else if (errors.length === 0) {
      setUsers((prevUsers) => {
        return [user, ...prevUsers];
      });
    }
  };

  const resetErrors = () => {
    setErrors("");
  }
  const addError = (error) => {
    setErrors((prevErrors) => {
      return [error, ...prevErrors];
    });
  };

  return (
    <div>
      <NewUser onAddNewUser={addUserHandler} errors={errors} onError={addError} onErrorClear={resetErrors}/>
      <UserList items={users} />
    </div>
  );
};

export default Users;
