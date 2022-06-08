import React from "react";
import Header from "../components/Headers/Header";
import { Container } from "react-bootstrap";
export default function Auth({ children }) {
  return (
    <div>
      <Header />
      <main>
        <Container className="mt-4" >
          {children}
        </Container>
      </main>
    </div>
  );
}
