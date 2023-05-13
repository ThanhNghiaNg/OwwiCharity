import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Header.module.css";
import { USER_TAB, serverUrl } from "../../utils/global";
import useHttp from "../../hooks/useHttp";
import { authActions } from "../../store/authSlice";

function Header() {
  const { sendRequest } = useHttp();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    sendRequest({ url: `${serverUrl}/logout`, method: "POST" }, () => {
      dispatch(authActions.logout());
      navigate("/login");
    });
  };
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Owwi Charity
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* <div className={`d-sm-none d-md-block text-center`}> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto align-items-sm-start align-items-lg-center">
            <Nav.Link as={Link} to="/">
              Trang chủ
            </Nav.Link>
            <Nav.Link as={Link} to="/projects">
              Các dự án quyên góp
            </Nav.Link>
            <Nav.Link as={Link} to="/partners">
              Đối tác đồng hành
            </Nav.Link>
            {!isLoggedIn && (
              <Nav.Link as={Link} to="/login">
                <button className="btn btn-primary">Đăng nhập</button>
              </Nav.Link>
            )}
            {isLoggedIn && (
              <NavDropdown title="Cá nhân" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to={USER_TAB.INFORMATION}>
                  Thông tin
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={USER_TAB.PASSWORD}>
                  Đổi mật khẩu
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={USER_TAB.HISTORY}>
                  Lịch sử quyên góp
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logoutHandler}>
                  Đăng xuất
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
        {/* </div> */}
      </Container>
    </Navbar>
  );
}

export default Header;
