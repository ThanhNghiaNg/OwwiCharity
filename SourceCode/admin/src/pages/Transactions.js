import React, { useRef } from "react";
import { useState } from "react";
import TransactionList from "../components/TransactionList/TransactionList";
import TransactionHeader from "../components/TransactionList/TransactionHeader";

function Transactions(props) {
  const [query, setQuery] = useState("");
  const changeQueryHandler = (query) => {
    setQuery(query);
  };

  return (
    <div>
      <TransactionHeader onChangeQuery={changeQueryHandler} />
      <TransactionList query={query}/>
    </div>
  );
}

export default Transactions;
