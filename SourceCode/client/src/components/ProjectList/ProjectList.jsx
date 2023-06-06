import classes from "./ProjectList.module.css";
import React, { useState, useEffect, useRef } from "react";
import useHttp from "../../hooks/useHttp";
import { serverUrl } from "../../utils/global";
import ProjectItem from "./ProjectItem";
import Container from "react-bootstrap/esm/Container";
import { Spin } from "antd";
import InfiniteScroll from "../InfiniteScroll/InfiniteScroll";
import { Link } from "react-router-dom";

function ProjectList({ isSidebar, title, pageSize, useSeeAllButton }) {
  const { sendRequest, isLoading } = useHttp();
  const [data, setData] = useState([]);
  const [reload, setReload] = useState(false);
  const scrollRef = useRef();
  const reloadHandler = () => {
    setReload((prev) => !prev);
  };

  useEffect(() => {
    const { page, pageSize, setHideSeeMoreBtn } =
      scrollRef.current.getPageInfo();

    sendRequest(
      { url: `${serverUrl}/projects?page=${page}&&pageSize=${pageSize}` },
      (respone) => {
        setData((prev) => prev.concat(respone.data));
        if (page === respone.totalPages) {
          setHideSeeMoreBtn(true);
        }
      },
      () => {
        setHideSeeMoreBtn(true);
      }
    );
  }, [reload]);

  let projectListContent;
  if (data.length > 0) {
    projectListContent = data.map((project) => (
      <ProjectItem item={project} key={project._id} />
    ));
  } else if (!isLoading) {
    projectListContent = <p className="text-center">Data not found!</p>;
  }
  const buttonInfinity = (
    <div className="text-center">
      <Link to={"/projects"} className="btn btn-outline-primary">
        See all
      </Link>
    </div>
  );

  return (
    <Container>
      {title && <p className="fs-4 fw-bold my-4 text-center">{title}</p>}
      {isLoading && (
        <div className="my-5 text-center">
          <Spin size="lg" />
        </div>
      )}
      <InfiniteScroll
        onReload={reloadHandler}
        ref={scrollRef}
        isLoading={isLoading}
        buttonInfinity={useSeeAllButton ? buttonInfinity : null}
        pageSize={pageSize ? pageSize : 8}
      >
        <ul
          className={`${
            isSidebar ? classes["project__list-sidebar"] : classes.project__list
          }`}
        >
          {projectListContent}
        </ul>
      </InfiniteScroll>
    </Container>
  );
}

export default ProjectList;
