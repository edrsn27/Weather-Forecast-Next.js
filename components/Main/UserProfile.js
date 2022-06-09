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
        {currentUser && currentUser.providerData[0].providerId == "github.com" && (
          <>
            <Card.Text>{currentUser.gitHubUrl}</Card.Text>
          </>
        )}
        {currentUser && currentUser.providerData[0].providerId == "google.com" && (
          <>
            <Card.Text>{currentUser.providerData[0].displayName}</Card.Text>
            <Card.Text>{currentUser.providerData[0].email}</Card.Text>
          </>
        )}
      </Card.Body>
    </Card>
  );
}
