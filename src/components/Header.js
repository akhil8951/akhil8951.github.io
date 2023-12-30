import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/css/Header.css";
import logo from "../assets/akhillogo.png";
import { useTheme } from "./ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  console.log("Current Theme:", theme);

  const renderThemeButton = () => {
    if (theme === "light") {
      return "🌑";
    } else return "💡";
  };

  return (
    <>
      <Navbar className={`header-navbar ${theme}`}>
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
          <Nav className="ml-auto">
            <Nav.Link className="nav-link" as={Link} to={"/about"}>
              About
            </Nav.Link>
            <Nav.Link className="nav-link" as={Link} to={"/project"}>
              Projects
            </Nav.Link>
            <Nav.Link className="nav-link" as={Link} to={"/work"}>
              Work
            </Nav.Link>
            <Nav.Link onClick={toggleTheme}>{renderThemeButton()}</Nav.Link>
          </Nav>
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
