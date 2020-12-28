import { Navbar, Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar">


<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home"> Diego Quezada</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
        <Link to = "/Home">
            <Nav.Link href="#home">Home</Nav.Link>
        </Link>
        <Link to = "/Resume">
            <Nav.Link href="#resume">Resume</Nav.Link>
        </Link>
        <Link to = "/Projects">
            <Nav.Link href="#projects">Projects</Nav.Link>
        </Link>
    </Nav>

    <Nav>
        <Link to = "/AboutMe">
            <Nav.Link href="#aboutme">About me </Nav.Link>
        </Link>
        <Link to = "/Contact">
            <Nav.Link href="#contact">Contact</Nav.Link>
        </Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
 

    </div>
    
  );
}

export default NavBar;
