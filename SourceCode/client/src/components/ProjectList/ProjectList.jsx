import classes from "./ProjectList.module.css";
import React, { useState, useEffect } from "react";
import useHttp from "../../hooks/useHttp";
import { serverUrl } from "../../utils/global";
import ProjectItem from "./ProjectItem";
import ProjectBanner from "./ProjectBanner";
import Container from "react-bootstrap/esm/Container";

function ProjectList({ isSidebar }) {
  const { sendRequest, isLoading } = useHttp();
  const [data, setData] = useState([]);

  useEffect(() => {
    sendRequest({ url: `${serverUrl}/projects` }, (data) => {
      setData(data);
    });
  }, []);

  const projectListContent = data.map((project) => (
    <ProjectItem item={project} key={project._id} />
  ));

  return (
    <Container>
      {isSidebar && <p className="fs-4 fw-bold my-4">Hoàn cảnh quyên góp mới nhất</p>}
      <ul
        className={`${
          isSidebar ? classes["project__list-sidebar"] : classes.project__list
        }`}
      >
        {projectListContent}
      </ul>
    </Container>
  );
}

export default ProjectList;
