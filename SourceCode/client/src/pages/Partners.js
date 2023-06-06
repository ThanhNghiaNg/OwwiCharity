import React from "react";
import PartnerList from "../components/PartnerList/PartnerList";
import Container from "react-bootstrap/esm/Container";
import ProjectList from "../components/ProjectList/ProjectList";

function Partners(props) {
  return (
    <Container>
      <div className="row">
        <div className="col-12 col-lg-8 ">
          <PartnerList />
        </div>
        <div className="d-none d-lg-block col">
          <ProjectList
            isSidebar={true}
            title="Hoàn cảnh quyên góp mới nhất"
            pageSize={4}
            useSeeAllButton={true}
          />
        </div>
      </div>
    </Container>
  );
}

export default Partners;
