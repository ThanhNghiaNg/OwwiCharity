import classes from "./ImageItem.module.css";
import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";

function ImageItem(props) {
  const { item, index } = props;
  const nameRef = useRef();
  const descRef = useRef();
  const itEdit = props.hasURL;

  const changeHandler = () => {
    props.onUpdate(index, nameRef.current.value, descRef.current.value);
  };

  const removeHandler = () => {
    props.onRemove(index);
  };
  let imgSrc;
  try {
    imgSrc = URL.createObjectURL(item.image);
  } catch (err) {
    imgSrc = item.url
  }
  return (
    <li className={classes.image__item} onChange={changeHandler}>
      <Button
        className={`btn btn-close ${classes["image__item__button-close"]}`}
        onClick={removeHandler}
      ></Button>
      <img src={imgSrc} />
      <Form.Control
        placeholder="Name"
        ref={nameRef}
        defaultValue={itEdit ? item.name : ""}
      />
      <Form.Control
        placeholder="Description"
        ref={descRef}
        defaultValue={itEdit ? item.description : ""}
      />
    </li>
  );
}

export default ImageItem;
