import react from "react";

const UserItem = (props) => {

    return (
        <li>
            {props.username}   {props.age} (in Years)
        </li>
    )
}

export default UserItem