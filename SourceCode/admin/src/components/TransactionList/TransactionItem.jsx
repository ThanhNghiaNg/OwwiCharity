import React from "react";
import { serverUrl, shortStr, strToDate } from "../../utils/global";
import { Link } from "react-router-dom";
import useHttp from "../../hooks/useHttp";
import Button from "react-bootstrap/Button";

function TransactionItem({ item, onChangeReload }) {
  const { sendRequest } = useHttp();
  const editTransactionHanlder = () => {
    sendRequest(
      {
        url: `${serverUrl}`,
        method: "PUT",
      },
      (data) => {
        if (onChangeReload) onChangeReload();
      }
    );
  };
  return (
    <tr>
      <td>{item._id}</td>
      <td>{item.user.username}</td>
      <td>{shortStr(item.project.title, 50)}</td>
      <td>{item.amount}</td>
      <td>{item.message}</td>
      <td>{strToDate(item.createdAt)}</td>
      <td>{strToDate(item.updatedAt)}</td>
      <td className="d-flex">
        <Button
          as={Link}
          //   className="btn btn-outline-secondary"
          variant="outline-success"
          onClick={editTransactionHanlder}
        >
          View
        </Button>
      </td>
    </tr>
  );
}

export default TransactionItem;
