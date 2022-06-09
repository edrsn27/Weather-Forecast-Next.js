import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
// initialized useAuth hook from context
import { useAuth } from "../../context/AuthProvider";
export default function Header() {
  // use signIn function from context
  const { signout, currentUser } = useAuth();

  const handleSignOut = async () => {
    try {
      await signout();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#">
          <i class="fa fa-cloud fa-2x" aria-hidden="true"></i>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {currentUser && (
              <a href="#signout" onClick={handleSignOut}>
                Signout
              </a>
            )}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
