import classes from "./ProjectList.module.css";

import React, { useEffect } from "react";
import ProjectItem from "./ProjectItem";
import Table from "../Table/Table";

function ProjectList({ projects, onReload, changeReload }) {
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
        headers={headers}
        data={projects}
        TableItem={ProjectItem}
        onReload={onReload}
        onChangeReload={changeReload}
        pageSize={10}
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
