import classes from "./ImagesDisplay.module.css";
import Form from "react-bootstrap/Form";
import React from "react";
import ImageItem from "./ImageItem";

function ImagesDisplay(props) {
  const images = props.images;
  const conentDisplay = images.map((item, i) => {
    return (
      <ImageItem
        onRemove={props.onRemove}
        onUpdate={props.onUpdate}
        index={i}
        item={item}
        key={i}
        hasURL={props.hasURL}
      />
    );
  });
  return <ul className={classes.images__list}>{conentDisplay}</ul>;
}

export default ImagesDisplay;
