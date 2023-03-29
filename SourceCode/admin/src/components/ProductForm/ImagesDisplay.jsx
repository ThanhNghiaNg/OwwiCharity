import classes from "./ImagesDisplay.module.css";
import Form from "react-bootstrap/Form";
import React from "react";

function ImagesDisplay(props) {
  const images = props.images;
  const conentDisplay = images.map((img, i) => {
    return (
      <li key={i} className={classes.image__item}>
        <img src={URL.createObjectURL(img)} />
        <Form.Control placeholder="Name"/>
        <Form.Control placeholder="Description"/>
      </li>
    );
  });
  return <ul className={classes.images__list}>{conentDisplay}</ul>;
}

export default ImagesDisplay;
