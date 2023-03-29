import classes from "./Container.module.css";

import React from "react";

function Container(props) {
  return <div className={classes.container}>{props.children}</div>;
}

export default Container;
