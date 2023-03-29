import React from "react";
import Container from "../components/UI/Container";
function MainLayout(props) {
  return (
    <div className="mx-5">
      <Container>{props.children}</Container>
    </div>
  );
}

export default MainLayout;
