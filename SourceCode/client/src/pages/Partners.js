import React from "react";
import PartnerList from "../components/PartnerList/PartnerList";
import Container from "react-bootstrap/esm/Container";

function Partners(props) {
  return (
    <Container>
      <div className="row">
        <div className="col-8">
          <PartnerList />
        </div>
        <div className="col"></div>
      </div>
    </Container>
  );
}

export default Partners;
