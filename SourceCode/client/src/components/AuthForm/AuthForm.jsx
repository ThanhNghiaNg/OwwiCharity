import classes from "./AuthForm.module.css";
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import useHttp from "../../hooks/useHttp";
import { serverUrl } from "../../utils/global";

function AuthForm(props) {
  const isLogin = props.isLogin;
  const { sendRequest, error, isLoading, cancelRequest, isAborted } = useHttp();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log("twice");
  const submitHanlder = (event) => {
    event.preventDefault();
    sendRequest({
      url: `${serverUrl}/${isLogin ? "login" : "register"}`,
      method: "POST",
      body: {
        username,
        password,
      },
    });
  };

  useEffect(() => {
    return () => {
      //   cancelRequest();
    };
  });
  return (
    <Form onSubmit={submitHanlder} className={classes.form}>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email"
          required
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter your password"
          required
        ></Form.Control>
      </Form.Group>
      {isLoading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-danger">{error}</p>}
      <Form.Group>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : isLogin ? "Login" : "Register"}
        </Button>
        {!isLoading && (
          <>
            <span> or </span>
            {!isLogin && <Link to={"/login"}>login.</Link>}
            {isLogin && <Link to={"/register"}>register now.</Link>}
          </>
        )}
      </Form.Group>
    </Form>
  );
}

export default AuthForm;
