import React, { useRef } from "react";
import UserList from "../components/UserList/UserList";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import useHttp from "../hooks/useHttp";
import { useState } from "react";
import { useEffect } from "react";
import { serverUrl } from "../utils/global";
import { Link } from "react-router-dom";

function Users(props) {
    const { sendRequest, isLoading } = useHttp();
  const [users, setUsers] = useState([]);
  const [reload, setReload] = useState(false)
  const [query, setQuery] = useState("");
  const queryRef = useRef();

  const changeReloadHandler = ()=>{
    setReload(prev=>!prev)
  }
  const onChangeQueryHandler = (event) => {
    event.preventDefault();
    changeReloadHandler()
    setQuery(queryRef.current.value);
  };

  useEffect(() => {
    sendRequest({ url: `${serverUrl}/admin/users?q=${query}` }, (data) => {
      setUsers(data);
    });
  }, [query, reload]);

  return (
    <div>
      <div className="d-flex justify-content-between mb-3">
        <Form className="d-flex" onSubmit={onChangeQueryHandler}>
          <Form.Control
            type="search"
            placeholder="Search by Name, Username, Email or ID"
            className="me-2"
            aria-label="Search"
            ref={queryRef}
          />
          <Button variant="outline-secondary" type="submit">Search</Button>
        </Form>
      </div>
      <UserList users={users} onReload={reload} changeReload={changeReloadHandler}/>
    </div>
  );
}

export default Users;