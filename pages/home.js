import React from "react";
import { Container } from "react-bootstrap";
import MainLayout from "../layouts/Main";

import UserProfile from "../components/Main/UserProfile";
import CityDisplayInput from "../components/Main/CityDisplayInput";


export default function Index() {
 
  return (
    <MainLayout>
      <Container
        className="h-100 d-flex align-items-center justify-content-center"
        style={{ minHeight: "300px" }}
      >
        <div className="w-100 " style={{ maxWidth: "700px" }}>
          <UserProfile />
          <CityDisplayInput />
        </div>
      </Container>
    </MainLayout>
  );
}
