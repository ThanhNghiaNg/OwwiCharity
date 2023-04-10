import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/esm/Container";
import UserBlockAccount from "./UserBlockAccount";
import UserInformation from "./UserInformation";
import UserPassword from "./UserPassword";
import { USER_TAB } from "../../utils/global";
import { useLocation, useNavigate } from "react-router-dom";
import UserHistory from "./UserHistory";

function User(props) {
  const path = useLocation().pathname;
  const navigate = useNavigate();
  const [defaultActive, setDefaultActive] = useState();

  const changeTabHandler = (event) => {
    const selectedPath = event.target.getAttribute("data-rr-ui-event-key");
    navigate(selectedPath);
  };

  useEffect(() => {
    setDefaultActive(path);
  }, [path]);

  return (
    <div>
      <Container className="pt-5">
        <Tab.Container id="left-tabs-example" activeKey={defaultActive}>
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item onClick={changeTabHandler}>
                  <Nav.Link eventKey={USER_TAB.INFORMATION}>
                    Information
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item onClick={changeTabHandler}>
                  <Nav.Link eventKey={USER_TAB.PASSWORD}>Password</Nav.Link>
                </Nav.Item>
                <Nav.Item onClick={changeTabHandler}>
                  <Nav.Link eventKey={USER_TAB.HISTORY}>History</Nav.Link>
                </Nav.Item>
                <Nav.Item onClick={changeTabHandler}>
                  <Nav.Link eventKey={USER_TAB.BLOCK}>
                    Block Your Account
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey={USER_TAB.INFORMATION}>
                  <UserInformation />
                </Tab.Pane>
                <Tab.Pane eventKey={USER_TAB.PASSWORD}>
                  <UserPassword />
                </Tab.Pane>
                <Tab.Pane eventKey={USER_TAB.HISTORY}>
                  <UserHistory />
                </Tab.Pane>
                <Tab.Pane eventKey={USER_TAB.BLOCK}>
                  <UserBlockAccount />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
}

export default User;
