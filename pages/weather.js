import React from "react";
import MainLayout from "../layouts/Main";

import WeatherTable from "../components/Main/WeatherTable";
import { Container } from "react-bootstrap";

export default function Index() {
  return (
    <MainLayout>
      <Container
        className="h-100 d-flex align-items-center justify-content-center"
        style={{ minHeight: "300px" }}
      >
        <div className="w-100 " style={{ maxWidth: "700px" }}>
          <WeatherTable />
        </div>
      </Container>
    </MainLayout>
  );
}
