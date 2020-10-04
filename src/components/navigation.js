import React, { useContext } from "react";
import { AuthContext } from "../scripts/firebase/auth";
import * as firebase from "firebase";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  const { currentUser } = useContext(AuthContext);
  const Logout = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        alert("You have been signed out");
        window.location.reload();
      })
      .catch(function (error) {
        alert(error);
      });
  };
  return (
    <div className="global-nav regular-text">
      <Navbar expand="lg" variant="dark">
        <Navbar.Brand href="/NorthHacks/#/">North Hacks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/NorthHacks/#/mission">Mission</Nav.Link>
          </Nav>
          {currentUser ? (
            <Nav>
              <Nav.Link href="/NorthHacks/#/profile">Profile</Nav.Link>
              <Nav.Link onClick={Logout}>Logout</Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link href="/NorthHacks/#/login">Login</Nav.Link>
              <Nav.Link href="/NorthHacks/#/register">Register</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default Navigation;
