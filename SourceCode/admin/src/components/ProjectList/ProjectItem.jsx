import classes from "./ProjectItem.module.css";

import React from "react";
import {
  dotCurrencyVND,
  serverUrl,
  shortHeadID,
  shortStr,
  strToDate,
} from "../../utils/global";
import { Link } from "react-router-dom";
import useHttp from "../../hooks/useHttp";

function ProjectItem({ item, onChangeReload }) {
  const { sendRequest } = useHttp();
  const deleteProjectHanlder = () => {
    sendRequest(
      {
        url: `${serverUrl}/admin/project/${item._id}`,
        method: "DELETE",
      },
      (data) => {
        if (onChangeReload) onChangeReload();
      }
    );
  };
  return (
    <tr>
      <td>{shortHeadID(item._id, 10)}</td>
      <td>{shortStr(item.title, 30)}</td>
      <td className="text-capitalize">{item.category.name}</td>
      <td>{item.partner.name}</td>
      <td>{dotCurrencyVND(item.totalMoney)}</td>
      <td>{dotCurrencyVND(item.totalTrans)}</td>
      <td>{dotCurrencyVND(item.expectedMoney)}</td>
      <td>{strToDate(item.endDate)}</td>
      <td className="d-flex">
        <Link
          className="btn btn-outline-success me-1"
          to={`/project/edit/${item._id}`}
        >
          Edit
        </Link>
        <button
          className="btn btn-outline-danger"
          onClick={deleteProjectHanlder}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ProjectItem;
