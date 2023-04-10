import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import useHttp from "../../hooks/useHttp";
import { serverUrl } from "../../utils/global";
import { Spin } from "antd";

function UserPassword(props) {
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
        url: `${serverUrl}/user/${id}/password"}`,
        method: "PATCH",
        body: { ...obj },
      },
      (data) => {}
    );
  };
  return (
    <Form onSubmit={submitHanlder}>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your password"
          name="password"
          required
        ></Form.Control>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>New Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter your new password"
          name="newPassword"
          required
        ></Form.Control>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Confirm New Password</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your confirm password"
          name="confirmPassword"
          required
        ></Form.Control>
      </Form.Group>
      <div className="text-center my-3">
        {isLoading && <Spin size="md" />}
        {error && <p className="text-danger">{error}</p>}
        {success && <p className="text-success">{success}</p>}
      </div>
      <Form.Group className="mb-3">
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Submit"}
        </Button>
      </Form.Group>
    </Form>
  );
}

export default UserPassword;
