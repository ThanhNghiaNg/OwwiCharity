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
import { useRef } from "react";

function ProjectDetail(props) {
  const id = useParams().id;
  const [data, setData] = useState(null);
  const [activeTab, setActiveTab] = useState("Situation");
  const { sendRequest: getProjectDetail, isLoading } = useHttp();

  const donorsRef = useRef();
  const storyRef = useRef();
  const situationRef = useRef();

  useEffect(() => {
    getProjectDetail({ url: `${serverUrl}/project/${id}` }, (data) => {
      setData(data);
    });
  }, []);

  return (
    <div>
      {isLoading && <CustomSpin className="mt-4" />}
      {data && (
        <>
          <div id="Situation" ref={situationRef}>
            <h2>{data.title}</h2>
            <p>{data.shortDesc}</p>
          </div>
          <ul className={`${classes.scrollTab}`}>
            <li className={activeTab === "Situation" ? classes.activeTab : ""}>
              <button
                onClick={() => {
                  setActiveTab("Situation");
                  const { top } = situationRef.current.getBoundingClientRect();
                  window.scrollTo({
                    top: top + window.pageYOffset - 16 * 4,
                    behavior: "smooth",
                  });
                }}
              >
                Hoàn cảnh
              </button>
            </li>
            <li className={activeTab === "Story" ? classes.activeTab : ""}>
              <button
                onClick={() => {
                  setActiveTab("Story");
                  const { top } = storyRef.current.getBoundingClientRect();
                  window.scrollTo({
                    top: top + window.pageYOffset - 16 * 4,
                    behavior: "smooth",
                  });
                }}
              >
                Câu chuyện
              </button>
            </li>
            <li className={activeTab === "Donors" ? classes.activeTab : ""}>
              <button
                onClick={() => {
                  setActiveTab("Donors");
                  const { top } = donorsRef.current.getBoundingClientRect();
                  window.scrollTo({
                    top: top + window.pageYOffset - 16 * 4,
                    behavior: "smooth",
                  });
                }}
              >
                Nhà Hảo Tâm
              </button>
            </li>
          </ul>
          <Row>
            <Col lg={8} className={`order-2 order-lg-1`}>
              <Row
                id="CauChuyen"
                dangerouslySetInnerHTML={{ __html: data.story }}
                ref={storyRef}
                className={classes.height100}
              ></Row>
              <Row ref={donorsRef}>
                <DonorList />
              </Row>
            </Col>
            <Col lg={4} className={`order-1 order-lg-2 ${classes.height100}`}>
              <Row>
                <DonationInfo projectId={id} />
              </Row>
              <Row className="d-none d-lg-block">
                <ProjectList
                  isSidebar={true}
                  title="Các dự án đang diễn ra"
                  pageSize={2}
                />
              </Row>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
}

export default ProjectDetail;
