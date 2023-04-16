import React, { useEffect, useState } from "react";
import Table from "../Table/Table";
import useHttp from "../../hooks/useHttp";
import { serverUrl } from "../../utils/global";
import NewsItem from "./NewsItem";

function ProjectList({ query }) {
  const { sendRequest, isLoading } = useHttp();
  const [data, setData] = useState({});
  const [reload, setReload] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const changeReloadHandler = () => {
    setReload((prev) => !prev);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [query]);

  useEffect(() => {
    sendRequest(
      {
        url: `${serverUrl}/news?q=${query}&page=${currentPage}&pageSize=${pageSize}`,
      },
      (data) => {
        setData(data);
      }
    );
  }, [query, reload, currentPage, pageSize]);

  const headers = [
    "ID",
    "Title",
    "Location",
    "Sponsor",
    "PartnerID",
    "Created At",
    "Updated At",
  ];
  return (
    <>
      <Table
        isLoading={isLoading}
        headers={headers}
        data={data.data}
        TableItem={NewsItem}
        onChangeReload={changeReloadHandler}
        onChangePage={setCurrentPage}
        onChangePageSize={setPageSize}
        page={currentPage}
        pageSize={pageSize}
        totalItems={data.totalItems}
      />
    </>
  );
}

export default ProjectList;
