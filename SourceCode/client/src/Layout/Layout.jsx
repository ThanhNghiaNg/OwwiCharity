import React from "react";
import Header from "../components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";

function Layout(props) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}

export default Layout;
