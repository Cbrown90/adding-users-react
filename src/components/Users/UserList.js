import React from "react";
import UserItem from "./UserItem";
import UserListCSS from "./UserList.module.css";
import Card from "../UI/Card"

const UserList = (props) => {
  if (props.items.length === 0) {
    return <h2>Found no users</h2>;
  }

  return (
    <Card className={UserListCSS.users}>
      <ul>
        {props.items.map((users) => (
          <UserItem
            key={users.username}
            username={users.username}
            age={users.age}
          />
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
