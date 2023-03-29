import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ImagesDisplay from "./ImagesDisplay";
import classes from "./ProductForm.module.css";

function ProductForm(props) {
  const isEdit = props.isEdit;
  const inputImageRef = useRef();
  const [images, setImages] = useState([]);

  const onAddImageHandler = (event) => {
    const selectedFile = event.target.files[0];
    console.log(selectedFile);
    setImages((prev) => [...prev, selectedFile]);
  };

  const openChooseFileHandler = () => {
    inputImageRef.current.click();
  };
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const {
      title,
      category,
      shortDesc,
      story,
      startDate,
      endDate,
      finishPercent,
      totalMoney,
      totalTrans,
      expectedMoney,
      images,
      partner,
    } = Object.fromEntries(formData.entries());
    console.log(
      title,
      category,
      shortDesc,
      story,
      startDate,
      endDate,
      finishPercent,
      totalMoney,
      totalTrans,
      expectedMoney,
      images,
      partner
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div className={classes.grid2}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title of project"
            required
            name="title"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Select aria-label="Default select example" name="category">
            <option>Select a category</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Short Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter short description of project"
            required
            name="shortDesc"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Story</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter story of project"
            required
            name="story"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Start Date</Form.Label>
          <Form.Control type="date" required name="startDate" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>End Date</Form.Label>
          <Form.Control type="date" required name="endDate" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Expected Money</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter expected money of project"
            required
            name="expectedMoney"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Partner</Form.Label>
          <Form.Select aria-label="Default select example" name="partner">
            <option>Select partner</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>
      </div>
      <Form.Group className="mb-3 mt-3 d-flex align-items-center">
        <Form.Label className="me-3">Images</Form.Label>
        <Button onClick={openChooseFileHandler}>+</Button>
        <Form.Control
          style={{ display: "none" }}
          type="file"
          ref={inputImageRef}
          onChange={onAddImageHandler}
        ></Form.Control>
      </Form.Group>
      <ImagesDisplay images={images} />

      <div className="text-center mt-4">
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
}

export default ProductForm;
