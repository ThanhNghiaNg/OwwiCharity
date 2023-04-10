import classes from "./UserInformation.module.css";
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import useHttp from "../../hooks/useHttp";
import { useNavigate } from "react-router-dom";
import { serverUrl } from "../../utils/global";
import { Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";

function UserInformation(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { sendRequest, error, isLoading, cancelRequest, success, setSuccess } =
    useHttp();
  const id = useSelector((state) => state.auth.token);

  const submitHanlder = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const obj = Object.fromEntries(formData.entries());

    sendRequest(
      {
        url: `${serverUrl}/user/${id}/information"}`,
        method: "PUT",
        body: { ...obj },
      },
      (data) => {}
    );
  };
  return (
    <Form onSubmit={submitHanlder} className={classes.form}>
      <Form.Group>
        <Form.Label>Avatar</Form.Label>
        <Form.Control type="file" name="avatar" required></Form.Control>
      </Form.Group>

      <div className={classes["form-grid"]}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your username"
            name="username"
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            name="password"
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your full name"
            name="fullName"
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your phone number"
            name="phone"
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your address"
            name="address"
            required
          ></Form.Control>
        </Form.Group>
      </div>
      <div className="text-center my-3">
        {isLoading && <Spin size="md" />}
        {error && <p className="text-danger">{error}</p>}
        {success && <p className="text-success">{success}</p>}
      </div>
      <Form.Group className="mt-3">
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Submit"}
        </Button>
      </Form.Group>
    </Form>
  );
}

export default UserInformation;
