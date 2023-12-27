import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/css/Header.css";
import logo from "../assets/akhillogo.png";

const Header = () => {
  return (
    <>
      <Navbar className="header-navbar">
        <Container fluid>
          <Navbar.Brand as={Link} to={"/"}>
            <img
              alt="Akhil"
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav className="ml-auto">
            <Nav.Link as={Link} to={"/about"}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to={"/project"}>
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to={"/work"}>
              Work
            </Nav.Link>
          </Nav>
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
