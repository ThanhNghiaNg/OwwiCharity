import classes from "./DonationInfo.module.css";
import Card from "../UI/Card";
import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";

function DonationInfo({projectId}) {

  return (
    <Card className={`p-4 ${classes.donation_info}`}>
      <h5 className="fs-4">Thông tin quyên góp</h5>
      <p>
        <span className="fw-bold fs-4">3.696.684đ</span> quyên góp / 67.000.000đ
      </p>
      <ProgressBar now={Math.random() * 100} striped />
      <div className={classes.info_detail}>
        <div className={classes.infor_detail__item}>
          <p>Lượt quyên góp</p>
          <p>265</p>
        </div>
        <div className={classes.infor_detail__item}>
          <p>Đạt được</p>
          <p>265</p>
        </div>
        <div className={classes.infor_detail__item}>
          <p>Thời hạn còn</p>
          <p>265</p>
        </div>
      </div>
      <Link to={`/donation/${projectId}`} className="btn btn-primary w-100">
        Quyên góp
      </Link>
    </Card>
  );
}

export default DonationInfo;
