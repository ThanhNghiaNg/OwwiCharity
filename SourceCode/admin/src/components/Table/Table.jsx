import React, { useEffect } from "react";
import { useState } from "react";
import { Pagination } from "antd";
import CenterSpin from "../UI/CenterSpin";

function Table(props) {
  const {
    headers,
    data,
    TableItem,
    onChangeReload,
    onChangePage,
    pageSize,
    isLoading,
    totalItems,
    page,
  } = props;

  const changePageHandler = (page, pageSize) => {
    onChangePage(page);
  };

  let contentTbody;
  if (data) {
    contentTbody = data.map((item, i) => {
      return <TableItem key={i} item={item} onChangeReload={onChangeReload} />;
    });
  }

  return (
    <>
      <table className={`table`}>
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th key={i}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>{!isLoading && contentTbody}</tbody>
      </table>
      {isLoading && <CenterSpin />}
      {!isLoading && (
        <div className="d-flex justify-content-end">
          <Pagination
            defaultCurrent={page}
            onChange={changePageHandler}
            total={totalItems ? totalItems : 0}
            pageSize={pageSize}
          />
        </div>
      )}
    </>
  );
}

export default Table;
