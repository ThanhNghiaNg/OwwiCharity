import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
function Header() {
  const logoutHandler = () => {};
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* <Navbar.Brand as={Link} href="/">Owwi Charity</Navbar.Brand> */}
        <Link className="navbar-brand">Owwi Charity</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Trang chủ
            </Nav.Link>
            <Nav.Link as={Link} to="/projects">
              Các dự án quyên góp
            </Nav.Link>
            <NavDropdown title="Cá nhân" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/user/information">
                Thông tin
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/user/password/change">
                Đổi mật khẩu
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/user/history">
                Lịch sử quyên góp
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={logoutHandler}>
                Đăng xuất
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
