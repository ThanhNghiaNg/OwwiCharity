import React from "react";
import UserList from "../components/UserList/UserList";
import { useState } from "react";
import UserHeader from "../components/UserList/UserHeader";

function Users(props) {
  const [query, setQuery] = useState("");
  const changeQueryHandler = (query) => {
    setQuery(query);
  };

  return (
    <div>
      <UserHeader onChangeQuery={changeQueryHandler}/>
      <UserList query={query}/>
    </div>
  );
}

export default Users;