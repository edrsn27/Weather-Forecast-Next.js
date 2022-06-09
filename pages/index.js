import React from "react";
import AuthLayout from "../layouts/Auth";
import SignIn from "../components/Auth/SignIn";
import UserProfile from "../components/Main/UserProfile";
import CityDisplayInput from "../components/Main/CityDisplayInput";
import { Container } from "react-bootstrap";
import { useAuth } from "../context/AuthProvider";
export default function Index() {
  const { currentUser, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  return (
    <AuthLayout>
      <Container
        className="h-100 d-flex align-items-center justify-content-center"
        style={{ minHeight: "300px" }}
      >
        <div className="w-100 " style={{ maxWidth: "700px" }}>
          <SignIn />
        </div>
      </Container>
    </AuthLayout>
  );
}
