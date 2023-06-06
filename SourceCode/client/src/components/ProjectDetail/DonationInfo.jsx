import classes from "./DonationInfo.module.css";
import Card from "../UI/Card";
import React from "react";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";

function DonationInfo(props) {
  return (
    <Card className={`p-4 ${classes.donation_info}`}>
      <h5 className="fs-4">Thông tin quyên góp</h5>
      <p>
        <span className="fw-bold fs-4">3.696.684đ</span> quyên góp / 67.000.000đ
      </p>
      <ProgressBar now={60} striped />
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
      <Button className="w-100">Quyên góp</Button>
    </Card>
  );
}

export default DonationInfo;
