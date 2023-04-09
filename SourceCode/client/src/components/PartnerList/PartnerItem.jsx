import classes from "./PartnerItem.module.css";
import cardClasses from "../UI/Card.module.css";
import React from "react";
import { Link } from "react-router-dom";

function PartnerItem({ item }) {
  return (
    <li className={`${cardClasses.card}`}>
      <Link to={`/partner/detail/${item._id}`} className={classes.item}>
        <div className={classes.item__avt}>
          <img src={item.avatar} alt="" />
        </div>
        <div className={classes.item__desc}>
          <p className="fw-bold mb-1">{item.name}</p>
          <p className="text-secondary">{item.shortDesc}</p>
          <p className="text-primary">Xem chi tiết &#xBB;</p>
        </div>
      </Link>
    </li>
  );
}

export default PartnerItem;
