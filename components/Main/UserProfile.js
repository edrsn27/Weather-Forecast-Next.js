import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
// initialized values in the context
import { useAuth } from "../../context/AuthProvider";

export default function SignIn() {
  // use signIn function from context
  const { currentUser } = useAuth();

  return (
    <Card border="0" className="text-center d-none d-lg-block">
      <Card.Body>
        <Card.Text>{currentUser && currentUser.gitHubUrl}</Card.Text>
      </Card.Body>
    </Card>
  );
}
