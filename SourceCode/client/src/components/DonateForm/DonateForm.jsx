import Form from "react-bootstrap/Form";
import React from "react";
import Button from "react-bootstrap/esm/Button";
import classes from "./DonationForm.module.css";
import useHttp from "../../hooks/useHttp";
import { serverUrl } from "../../utils/global";

function DonateForm({ projectId }) {
  const { sendRequest, error } = useHttp();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const obj = Object.fromEntries(formData.entries());
    console.log(obj);
    sendRequest(
      {
        url: `${serverUrl}/transaction`,
        body: {
          ...obj,
          projectId,
        },
        method: "POST",
      },
      () => {
        alert("Success");
      },
      () => {
        alert(error);
      }
    );
  };

  return (
    <Form onSubmit={onSubmitHandler} className={classes.form}>
      <Form.Group className="mb-3">
        <Form.Label>Nhập số tiền quyên góp</Form.Label>
        <Form.Control
          type="number"
          placeholder="0đ"
          name="amount"
          required
        ></Form.Control>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Gửi lời nhắn tới chương trình</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nhập lời nhắn"
          name="message"
          required
        ></Form.Control>
      </Form.Group>
      <Form.Group className="mb-3">
        <Button type="submit">Quyên góp</Button>
      </Form.Group>
    </Form>
  );
}

export default DonateForm;
