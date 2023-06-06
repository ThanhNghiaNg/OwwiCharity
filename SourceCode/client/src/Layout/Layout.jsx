import React from "react";
import classes from "./Layout.module.css";
import Header from "../components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer/Footer";

function Layout(props) {
  return (
    <div>
      <Header />
      <div className={classes.container}>{props.children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
