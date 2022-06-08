import React from "react";
import AuthLayout from "../layouts/Auth";
import SignIn from "../components/Auth/SignIn";
import { Container } from "react-bootstrap";
export default function Index() {
  return (
    <AuthLayout>
      <Container
        className="h-100 d-flex align-items-center justify-content-center"
        style={{ minHeight: "200px" }}
      >
        <div className="w-100 " style={{ maxWidth: "700px" }}>
          <SignIn />
        </div>
      </Container>
    </AuthLayout>
  );
}
