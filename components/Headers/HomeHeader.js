import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
// initialized useAuth hook from context
import { useAuth } from "../../context/AuthProvider";
import { useRouter } from "next/router";
export default function Header() {
  // use signIn function from context
  const { signout, currentUser } = useAuth();
  // use router hook
  const router = useRouter();
  //signout handler
  const handleSignOut = async () => {
    try {
      await signout();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#">
          <i className="fa fa-cloud fa-2x" aria-hidden="true"></i>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => router.push("/home")}>Home</Nav.Link>
            <Nav.Link onClick={() => router.push("/weather")}>Weather</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {currentUser && (
              <a href="#" onClick={handleSignOut}>
                Signout
              </a>
            )}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
