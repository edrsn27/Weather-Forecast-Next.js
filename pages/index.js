import React from "react";
import AuthLayout from "../layouts/Auth";
import SignIn from "../components/Auth/SignIn";
import UserProfile from "../components/Main/UserProfile";
import { Container } from "react-bootstrap";

export default function Index() {

  return (
    <AuthLayout>
      <Container
        className="h-100 d-flex align-items-center justify-content-center"
        style={{ minHeight: "200px" }}
      >
        <div className="w-100 " style={{ maxWidth: "700px" }}>
          <UserProfile />
          <SignIn />
        </div>
      </Container>
    </AuthLayout>
  );
}
