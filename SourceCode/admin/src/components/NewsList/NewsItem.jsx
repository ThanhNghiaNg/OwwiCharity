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

function NewsItem({ item, onChangeReload }) {
  const { sendRequest } = useHttp();
  const deleteNewsHanlder = () => {
    sendRequest(
      {
        url: `${serverUrl}/admin/news/${item._id}`,
        method: "DELETE",
      },
      (data) => {
        if (onChangeReload) onChangeReload();
      }
    );
  };
  return (
    <tr>
      <td>{shortHeadID(item._id,10)}</td>
      <td>{shortStr(item.title, 30)}</td>
      <td>{item.location}</td>
      <td>{item.sponsor}</td>
      <td>{item.partner.name}</td>
      <td>{strToDate(item.createdAt)}</td>
      <td>{strToDate(item.updatedAt)}</td>
      <td className="d-flex">
        <Link
          className="btn btn-outline-success me-1"
          to={`/news/edit/${item._id}`}
        >
          Edit
        </Link>
        <button className="btn btn-outline-danger" onClick={deleteNewsHanlder}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default NewsItem;
