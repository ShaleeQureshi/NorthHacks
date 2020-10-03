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
        alert("You have been signed out!");
      })
      .catch(function (error) {
        alert(error);
      });
  };
  return (
    <div className="global-nav">
      <Navbar expand="lg" variant="dark">
        <Navbar.Brand href="/">North Hacks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#">Coming Soon</Nav.Link>
          </Nav>
          {currentUser ? (
            <Nav>
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Nav.Link onClick={Logout} href="/">
                Logout
              </Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link href="/register">Register</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default Navigation;
