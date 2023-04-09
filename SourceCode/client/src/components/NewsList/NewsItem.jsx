import classes from "./NewsItem.module.css";
import cardClasses from "../UI/Card.module.css";

import React from "react";

function NewsItem({ item }) {
  const date = new Date(item.createdAt).toLocaleDateString("vn");
  return (
    <li className={`${cardClasses.card} ${classes.item}`}>
      <img src={item.imageURL} alt="" />
      <div className="m-3">
        <p>{date}</p>
        <p className="fw-bold">{item.title}</p>
      </div>
    </li>
  );
}

export default NewsItem;
