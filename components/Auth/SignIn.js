import React from "react";
import { Card, Button } from "react-bootstrap";
// initialized values in the context
import { useAuth } from "../../context/AuthProvider";
export default function SignIn() {
  // use signIn function from context
  const { signin } = useAuth();

  const handleSignIn = async () => {
    try {
      await signin();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card border="light">
      <Card.Body>
        <Card.Text>
          Welcome to weather forecast web application. Please login with your
          Github user to use the application and view the weather in your city.
        </Card.Text>

        <Button onClick={handleSignIn}>
          <i className="fa fa-github" aria-hidden="true"></i> Github
        </Button>
      </Card.Body>
    </Card>
  );
}
