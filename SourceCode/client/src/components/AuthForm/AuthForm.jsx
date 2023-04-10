import classes from "./AuthForm.module.css";
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import useHttp from "../../hooks/useHttp";
import { Link, useNavigate } from "react-router-dom";
import { serverUrl } from "../../utils/global";
import { Spin } from "antd";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice";

function AuthForm(props) {
  const isLogin = props.isLogin;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    sendRequest,
    error,
    isLoading,
    cancelRequest,
    isAborted,
    success,
    setSuccess,
  } = useHttp();

  console.log("twice");
  const submitHanlder = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const obj = Object.fromEntries(formData.entries());
    console.log(obj);
    sendRequest(
      {
        url: `${serverUrl}/${isLogin ? "login" : "register"}`,
        method: "POST",
        body: { ...obj, role: "user" },
      },
      (data) => {
        if (!isLogin) {
          setSuccess("Register Successfully!");
          setTimeout(() => {
            setSuccess("");
          }, 3000);
          navigate("/login");
        } else {
          dispatch(authActions.login({ token: data.token, name: data.name }));
          navigate("/");
        }
      }
    );
  };

  useEffect(() => {
    return () => {
      //   cancelRequest();
    };
  });

  return (
    <div className={classes.background}>
      <Form onSubmit={submitHanlder} className={classes.form}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your username"
            name="username"
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            name="password"
            required
          ></Form.Control>
        </Form.Group>
        {!isLogin && (
          <>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your full name"
                name="fullName"
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your phone number"
                name="phone"
                required
              ></Form.Control>
            </Form.Group>
          </>
        )}
        <div className="text-center">
          {isLoading && <Spin size="md" />}
          {error && <p className="text-danger">{error}</p>}
          {success && <p className="text-success">{success}</p>}
        </div>
        <Form.Group className="mb-3">
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
    </div>
  );
}

export default AuthForm;
