import React from "react";
import Table from "../Table/Table";
import TransactionItem from "./TransactionItem";

function TransactionList({ transactions, onReload, changeReload }) {
  const headers = [
    "ID",
    "Username",
    "Project",
    "Amount",
    "Message",
    "Created At",
    "Updated At",
    "Action",
  ];
  return (
    <Table
      headers={headers}
      data={transactions}
      TableItem={TransactionItem}
      onReload={onReload}
      onChangeReload={changeReload}
      pageSize={10}
    />
  );
}

export default TransactionList;
