import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import useHttp from "../hooks/useHttp";
import { useState } from "react";
import { useEffect } from "react";
import { serverUrl } from "../utils/global";
import TransactionList from "../components/TransactionList/TransactionList";

function Transactions(props) {
  const { sendRequest, isLoading } = useHttp();
  const [transactions, setTransactions] = useState([]);
  const [reload, setReload] = useState(false);
  const [query, setQuery] = useState("");
  const queryRef = useRef();
  console.log(query);
  const changeReloadHandler = () => {
    setReload((prev) => !prev);
  };
  const onChangeQueryHandler = (event) => {
    event.preventDefault();
    changeReloadHandler();
    setQuery(queryRef.current.value);
  };

  useEffect(() => {
    sendRequest(
      { url: `${serverUrl}/admin/transactions?q=${query}` },
      (data) => {
        console.log(data);
        setTransactions(data);
      }
    );
  }, [query, reload]);

  return (
    <div>
      <div className="d-flex justify-content-between mb-3">
        <Form className="d-flex" onSubmit={onChangeQueryHandler}>
          <Form.Control
            type="search"
            placeholder="Search by Username, Project or ID"
            className="me-2"
            aria-label="Search"
            ref={queryRef}
          />
          <Button variant="outline-secondary" type="submit">
            Search
          </Button>
        </Form>
      </div>
      <TransactionList
        transactions={transactions}
        onReload={reload}
        changeReload={changeReloadHandler}
      />
    </div>
  );
}

export default Transactions;
