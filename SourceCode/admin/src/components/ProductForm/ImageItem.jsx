import classes from "./ImageItem.module.css";
import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";

function ImageItem(props) {
  const { item, index } = props;
  const nameRef = useRef();
  const descRef = useRef();

  const changeHandler = () => {
    props.onUpdate(index, nameRef.current.value, descRef.current.value);
  };

  const removeHandler = () => {
    props.onRemove(index);
  };
  return (
    <li className={classes.image__item} onChange={changeHandler}>
      <Button
        className={`btn btn-close ${classes["image__item__button-close"]}`}
        onClick={removeHandler}
      ></Button>
      <img src={URL.createObjectURL(item.image)} />
      <Form.Control placeholder="Name" ref={nameRef} />
      <Form.Control placeholder="Description" ref={descRef} />
    </li>
  );
}

export default ImageItem;
