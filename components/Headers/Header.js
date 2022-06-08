import React from "react";
import { Container,Nav,Navbar } from "react-bootstrap";
export default function Header() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Weather Forecast</Navbar.Brand>
      
      </Container>
    </Navbar>
  );
}
