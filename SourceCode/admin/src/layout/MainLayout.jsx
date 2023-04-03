import React from "react";
// import Container from "../components/UI/Container";
import Container from 'react-bootstrap/Container'
import Header from "../components/Header/Header";
function MainLayout(props) {
  return (
    <div>
      <Header />
      <Container>{props.children}</Container>
    </div>
  );
}

export default MainLayout;
