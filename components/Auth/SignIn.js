import React from "react";
import { Card, Button } from "react-bootstrap";

import Image from "next/image";

export default function SignIn() {
  return (
    <Card border="light">
      <Card.Body>
        <Card.Text>
          Welcome to weather forecast web application. Please login with your
          Github user to use the application and view the weather in your city.
        </Card.Text>

        <Button>
          <i className="fa fa-github" aria-hidden="true"></i> Github
        </Button>
      </Card.Body>
    </Card>
  );
}
