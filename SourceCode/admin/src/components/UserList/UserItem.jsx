import React from "react";
import { serverUrl } from "../../utils/global";
import { Link } from "react-router-dom";
import useHttp from "../../hooks/useHttp";

function UserItem({ item, onChangeReload }) {
  const { sendRequest } = useHttp();
  const deleteUserHanlder = () => {
    console.log(`${serverUrl}/admin/user/${item._id}`);
    sendRequest(
      {
        url: `${serverUrl}/admin/user/${item._id}`,
        method: "DELETE",
      },
      (data) => {
        if (onChangeReload) onChangeReload();
      }
    );
  };
  return (
    <tr>
      <td>{item._id}</td>
      <td>{item.username}</td>
      <td>{item.fullName}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
      <td>{item.address}</td>
      <td>{item.isAdmin ? "Admin" : "Customer"}</td>
      <td className="d-flex">
        <button className="btn btn-outline-danger" onClick={deleteUserHanlder}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default UserItem;
