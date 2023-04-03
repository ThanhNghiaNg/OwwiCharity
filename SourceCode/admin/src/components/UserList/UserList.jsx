import React from "react";
import Table from "../Table/Table";
import UserItem from "./UserItem";

function UserList({ users, onReload, changeReload }) {
  const headers = [
    "ID",
    "Full Name",
    "Username",
    "Email",
    "Phone",
    "Address",
    "Role",
    "Action",
  ];
  return (
    <Table
      headers={headers}
      data={users}
      TableItem={UserItem}
      onReload={onReload}
      onChangeReload={changeReload}
      pageSize={10}
    />
  );
}

export default UserList;
