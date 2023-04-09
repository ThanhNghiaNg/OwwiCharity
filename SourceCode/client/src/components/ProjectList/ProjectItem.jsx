import classes from "./ProjectItem.module.css";
import { Link } from "react-router-dom";
import cardClasses from "../UI/Card.module.css";
import React from "react";

function ProjectItem({ item }) {
  const dayRemain = Math.trunc(
    (new Date(item.endDate) - new Date()) / (3600 * 24 * 1000)
  );
  return (
    <li className={`${cardClasses.card}`}>
      <Link to={`/project/detail/${item._id}`} className={classes.item}>
        <div className={classes.item__avt}>
          <img src={item.images[0].url} alt="" />
        </div>
        <div className={`p-2 ${classes.item__desc}`}>
          <div>
            <p className="fw-bold fs-6">{item.title}</p>
          </div>
          <div className={classes.item__partner}>
            <img src={item.partner.avatar} alt="" />
            <p className="">{item.partner.name}</p>
            <p className={classes.item__partner__remain}>Còn {dayRemain} ngày</p>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default ProjectItem;
