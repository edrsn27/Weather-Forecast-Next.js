import React from "react";
import MainLayout from "../layouts/Main";
import SignIn from "../components/Auth/SignIn";
import UserProfile from "../components/Main/UserProfile";
import CityDisplayInput from "../components/Main/CityDisplayInput";
import { Container } from "react-bootstrap";
import { useAuth } from "../context/AuthProvider";
export default function Index() {
 
  return (
    <MainLayout>
      <Container
        className="h-100 d-flex align-items-center justify-content-center"
        style={{ minHeight: "200px" }}
      >
        <div className="w-100 " style={{ maxWidth: "700px" }}>
          <UserProfile />
          <CityDisplayInput />
        </div>
      </Container>
    </MainLayout>
  );
}
