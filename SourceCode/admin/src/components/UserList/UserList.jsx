import React, { useEffect, useState } from "react";
import Table from "../Table/Table";
import UserItem from "./UserItem";
import useHttp from "../../hooks/useHttp";
import { serverUrl } from "../../utils/global";

function UserList({ query }) {
  const { sendRequest, isLoading } = useHttp();
  const [data, setData] = useState({});
  const [reload, setReload] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const changeReloadHandler = () => {
    setReload((prev) => !prev);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [query]);

  useEffect(() => {
    sendRequest(
      {
        url: `${serverUrl}/admin/users?q=${query}&page=${currentPage}&pageSize=${pageSize}`,
      },
      (data) => {
        setData(data);
      }
    );
  }, [query, reload, currentPage]);
  const headers = [
    "ID",
    "Full Name",
    "Username",
    "Email",
    "Phone",
    "Address",
    "Role",
    "Action",
  ];
  return (
    <Table
      isLoading={isLoading}
      headers={headers}
      data={data.data}
      TableItem={UserItem}
      onChangeReload={changeReloadHandler}
      onChangePage={setCurrentPage}
      page={currentPage}
      pageSize={pageSize}
      totalItems={data.totalItems}
    />
  );
}

export default UserList;
