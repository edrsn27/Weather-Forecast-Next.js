import React from "react";
import { Container, Nav, Navbar,NavDropdown } from "react-bootstrap";
// initialized useAuth hook from context
import { useAuth } from "../../context/AuthProvider";
export default function Header() {
  // use signIn function from context
  const { signout, currentUser } = useAuth();

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
        <Navbar.Brand href="#home">Weather Forecast</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {currentUser && (
              <a href="#signout" onClick={handleSignOut}>
                Signout
              </a>
            )}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
