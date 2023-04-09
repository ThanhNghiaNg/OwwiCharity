import React from "react";
import NewsList from "../components/NewsList/NewsList";
import Container from "react-bootstrap/esm/Container";
import ProjectList from "../components/ProjectList/ProjectList";

function News(props) {
  return (
    <Container>
      <div className="row">
        <div className="col-12 col-lg-8">
          <p className="fs-4 fw-bold my-4">
            Cập nhât các tin tức quyên góp mới nhất
          </p>
          <NewsList />
        </div>
        <div className="d-none d-lg-block col">
          <ProjectList isSidebar={true} />
        </div>
      </div>
    </Container>
  );
}

export default News;
