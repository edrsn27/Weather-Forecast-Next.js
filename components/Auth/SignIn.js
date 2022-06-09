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
      alert(error.message);
    }
  };

  const buttons = [
    { provider: "github", icon: "github", variant: "primary", name: "Github" },
    { provider: "google", icon: "google", variant: "warning", name: "Google" },
  ];

  return (
    <Card border="light">
      <Card.Body>
        <Card.Text>Hello, World!</Card.Text>
        <Card.Text>
          Welcome to weather forecast web application. Please login with your
          Github user to use the application and view the weather in your city.
        </Card.Text>
        {buttons.map((button,index) => (
          <div className="mt-4" key={index}>
            <Button
              onClick={() => handleSignIn(button.provider)}
              variant={button.variant}
            >
              <i className={"fa fa-" + button.icon} aria-hidden="true"></i>{" "}
              {button.name}
            </Button>
          </div>
        ))}
      </Card.Body>
    </Card>
  );
}
