import React from "react";
import Container from "react-bootstrap/esm/Container";
import ProjectList from "../components/ProjectList/ProjectList";
import PartnerList from "../components/PartnerList/PartnerList";
import NumberAnimation from "../components/UI/NumberAnimation";
function Home(props) {
  return (
    <Container>
      <div>
        <NumberAnimation desNumber={70} />
        <NumberAnimation desNumber={125} />
        <NumberAnimation desNumber={700} />
      </div>
      <ProjectList
        title="Các hoàn cảnh Quyên góp"
        pageSize={8}
        useSeeAllButton={true}
      />
      <PartnerList gridColumn={3} useSeeAllButton={true} pageSize={9} />
    </Container>
  );
}

export default Home;
