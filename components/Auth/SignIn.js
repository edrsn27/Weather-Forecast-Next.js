import React from "react";
import { Card, Button } from "react-bootstrap";
// initialized values in the context
import { useAuth } from "../../context/AuthProvider";
export default function SignIn() {
  // use signIn function from context
  const { signin } = useAuth();

  const handleSignIn = async (provider) => {
    try {
      await signin(provider);
    } catch (error) {
      alert(error.message)
    }
  };

  return (
    <Card border="light">
      <Card.Body>
        <Card.Text>Hello, World!</Card.Text>
        <Card.Text>
          Welcome to weather forecast web application. Please login with your
          Github user to use the application and view the weather in your city.
        </Card.Text>

        <Button onClick={()=>handleSignIn("github")}>
          <i className="fa fa-github" aria-hidden="true"></i> Github
        </Button>
        <br />
        <Button onClick={()=>handleSignIn("google")}  variant="warning" className="mt-4">
          <i className="fa fa-google" aria-hidden="true"></i> Google
        </Button>
      </Card.Body>
    </Card>
  );
}
