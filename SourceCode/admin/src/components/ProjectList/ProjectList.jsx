import classes from "./ProjectList.module.css";
import React, { useEffect, useState } from "react";
import ProjectItem from "./ProjectItem";
import Table from "../Table/Table";
import useHttp from "../../hooks/useHttp";
import { serverUrl } from "../../utils/global";

function ProjectList({ query }) {
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
        url: `${serverUrl}/projects?q=${query}&page=${currentPage}&pageSize=${pageSize}`,
      },
      (data) => {
        setData(data);
      }
    );
  }, [query, reload, currentPage]);

  const headers = [
    "ID",
    "Title",
    "Category",
    "Partner",
    "Money",
    "Transaction",
    "Expected Money",
    "End Date",
    "Action",
  ];
  return (
    <>
      <Table
        isLoading={isLoading}
        headers={headers}
        data={data.data}
        TableItem={ProjectItem}
        onChangeReload={changeReloadHandler}
        onChangePage={setCurrentPage}
        page={currentPage}
        pageSize={pageSize}
        totalItems={data.totalItems}
      />
    </>
  );
  // const [activePage, setActivePage] = useState(1);
  // const pageSize = 10;
  // let items = [];

  // useEffect(() => {
  //   setActivePage(1);
  // }, [onReload]);
  // for (
  //   let number = 1;
  //   number <= Math.ceil(projects.length / pageSize);
  //   number++
  // ) {
  //   items.push(
  //     <Pagination.Item
  //       key={number}
  //       active={number === activePage}
  //       onClick={() => {
  //         setActivePage(number);
  //       }}
  //     >
  //       {number}
  //     </Pagination.Item>
  //   );
  // }

  // const contentTbody = projects
  //   .slice((activePage - 1) * pageSize, activePage * pageSize)
  //   .map((project) => {
  //     return <ProjectItem key={project._id} project={project} onChangeReload={changeReload}/>;
  //   });

  // return (
  //   <>
  //     <table className={`table ${classes.table}`}>
  //       <thead>
  //         <tr>
  //           <th>ID</th>
  //           <th>Title</th>
  //           <th>Category</th>
  //           <th>Partner</th>
  //           <th>Money</th>
  //           <th>Transaction</th>
  //           <th>Expected Money</th>
  //           {/* <th>Start Date</th> */}
  //           <th>End Date</th>
  //           <th>Action</th>
  //         </tr>
  //       </thead>
  //       <tbody>{contentTbody}</tbody>
  //     </table>
  //     <div className="d-flex justify-content-end">
  //       <Pagination>{items}</Pagination>
  //     </div>
  //   </>
  // );
}

export default ProjectList;
