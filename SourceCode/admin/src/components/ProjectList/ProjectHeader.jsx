import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function ProjectHeader({ onChangeQuery }) {
  const queryRef = useRef();
  const changeQueryHandler = (event) => {
    event.preventDefault();
    onChangeQuery(queryRef.current.value);
  };
  return (
    <div className="d-flex justify-content-between mb-3">
      <Form className="d-flex" onSubmit={changeQueryHandler}>
        <Form.Control
          type="search"
          placeholder="Search by Title or ID"
          className="me-2"
          aria-label="Search"
          ref={queryRef}
        />
        <Button variant="outline-secondary" type="submit">
          Search
        </Button>
      </Form>
      <Button as={Link} to="/project/create" variant="outline-primary">
        New Project
      </Button>
    </div>
  );
}

export default ProjectHeader;
