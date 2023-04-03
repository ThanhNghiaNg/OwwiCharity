import React, { useEffect } from "react";
import { useState } from "react";
import Pagination from "react-bootstrap/Pagination";

function Table(props) {
  const { headers, data, TableItem, onReload, onChangeReload, pageSize } = props;
  const [activePage, setActivePage] = useState(1);
  let items = [];

  useEffect(() => {
    setActivePage(1);
  }, [onReload]);
  for (
    let number = 1;
    number <= Math.ceil(data.length / pageSize);
    number++
  ) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === activePage}
        onClick={() => {
          setActivePage(number);
        }}
      >
        {number}
      </Pagination.Item>
    );
  }

  const contentTbody = data
    .slice((activePage - 1) * pageSize, activePage * pageSize)
    .map((item, i) => {
      return (
        <TableItem
          key={i}
          item={item}
          onChangeReload={onChangeReload}
        />
      );
    });

  return (
    <>
      <table className={`table`}>
        <thead>
          <tr>
            {headers.map((header) => (
              <th>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>{contentTbody}</tbody>
      </table>
      <div className="d-flex justify-content-end">
        <Pagination>{items}</Pagination>
      </div>
    </>
  );
}

export default Table;
