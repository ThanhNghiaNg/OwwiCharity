import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useHttp from "../../hooks/useHttp";
import { serverUrl } from "../../utils/global";
import { authActions } from "../../store/authSlice";

function Header(props) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { sendRequest } = useHttp();
  const logoutHandler = () => {
    sendRequest({ url: `${serverUrl}/logout`, method: "POST" }, () => {
      dispatch(authActions.logout());
      navigate("/login");
    });
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-5">
        <Container className="d-flex">
          <Navbar.Brand as={Link} to="/">
            Admin
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex justify-content-between">
              {isLoggedIn && (
                <>
                  <Nav.Link as={Link} to="/projects">
                    Projects
                  </Nav.Link>
                  <Nav.Link as={Link} to="/transactions">
                    Transactions
                  </Nav.Link>
                  <Nav.Link as={Link} to="/users">
                    Users
                  </Nav.Link>
                  <Nav.Link as={Link} to="/news">
                    News
                  </Nav.Link>
                  <Nav.Link as={Link} to="/chat">
                    Chat
                  </Nav.Link>
                  <NavDropdown title="Categories" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/categories">
                      All Categories
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/category/create">
                      New Category
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
                </>
              )}
              {!isLoggedIn && (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
