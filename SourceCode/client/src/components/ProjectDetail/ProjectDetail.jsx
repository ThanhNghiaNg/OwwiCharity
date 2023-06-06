import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/useHttp";
import { serverUrl } from "../../utils/global";
import { Spin } from "antd";
import DonorList from "./DonorList";
import CustomSpin from "../UI/CustomSpin";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./ProjectDetail.module.css";
import DonationInfo from "./DonationInfo";
import ProjectList from "../ProjectList/ProjectList";

function ProjectDetail(props) {
  const id = useParams().id;
  const [data, setData] = useState(null);
  const { sendRequest: getProjectDetail, isLoading } = useHttp();

  useEffect(() => {
    getProjectDetail({ url: `${serverUrl}/project/${id}` }, (data) => {
      console.log(data);
      setData(data);
    });
  }, []);

  return (
    <div>
      {isLoading && <CustomSpin className="mt-4" />}
      {data && (
        <>
          <div id="HoanCanh">
            <h2>{data.title}</h2>
            <p>{data.shortDesc}</p>
          </div>
          <ul>
            <li>
              <a href="#HoanCanh">Hoàn cảnh</a>
            </li>
            <li>
              <a href="#HoanCanh"> Câu chuyện</a>
            </li>
            <li>
              <a href="#NhaHaoTam">Nhà Hảo Tâm</a>
            </li>
          </ul>
          <Row>
            <Col lg={8} className={`order-2 order-lg-1 ${classes.height100}`}>
              <div
                id="CauChuyen"
                dangerouslySetInnerHTML={{ __html: data.story }}
              ></div>
              <DonorList id="NhaHaoTam" />
            </Col>
            <Col lg={4} className={`order-1 order-lg-2 ${classes.height100}`}>
              <DonationInfo />
              <ProjectList isSidebar={true} title="Các dự án đang diễn ra" />
            </Col>
          </Row>
        </>
      )}
    </div>
  );
}

export default ProjectDetail;
