import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
// initialized useAuth hook from context

export default function Header() {
  // use signIn function from context
 
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#">
          <i className="fa fa-cloud fa-2x" aria-hidden="true"></i>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
           
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
