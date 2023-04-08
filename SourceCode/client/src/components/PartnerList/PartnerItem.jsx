import classes from "./PartnerItem.module.css";
import cardClasses from "../UI/Card.module.css";
import React from "react";

function PartnerItem({ item }) {
  console.log(item);
  return (
    <li className={`${cardClasses.card} ${classes.item}`}>
      <div className={classes.avt}>
        <img src={item.avatar} alt="" />
      </div>
      <div>
        <p>{item.name}</p>
        <p>{item.shortDesc}</p>
      </div>
    </li>
  );
}

export default PartnerItem;
