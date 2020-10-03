import React, { useCallback } from "react";
import * as firebase from "firebase";
import { Container, Button, Form } from "react-bootstrap";

// Importing my Components
import Navigation from "../components/navigation";
import Jumbo from "../components/jumbo";
import Footer from "../components/footer";

const RegisterApp = ({ history }) => {
  const SignUpUser = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password, teamSize, teamName } = event.target.elements;
      try {
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
        await firebase
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        firebase.auth().onAuthStateChanged((user) => {
          firebase
            .database()
            .ref(`/users/${user["uid"]}`)
            .update({
              uid: user["uid"],
              email: user["email"],
              creationTime: user["metadata"]["creationTime"],
              teamSize: teamSize.value,
              teamName: teamName.value,
            })
            .then(function () {
              history.push("/profile");
            });
        });
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div className="bg-home">
      <div className="wrapper">
        <Navigation />
        <Jumbo
          elements={
            <div className="landing-txt">
              <h1>Register</h1>
              <p>Register for Free to participate in our upcoming Hackathon!</p>
            </div>
          }
        />
        <section>
          <Container>
            <div className="blue-text mt-5 mb-5">
              <h1>Registration</h1>
              <p>
                <span className="italic-text">
                  Powered with Google Firebase Authentication
                </span>
                <br />
                <span className="bold-text">
                  {" "}
                  Note: Only 1 person should register per team!
                </span>
              </p>
            </div>
            <Form onSubmit={SignUpUser}>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  id="email"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  id="password"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Team Size (1-3)</Form.Label>
                <Form.Control as="select" id="teamSize" required>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Team Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g Team Hack"
                  id="teamName"
                  required
                />
              </Form.Group>
              <Button variant="dark" type="submit">
                Register
              </Button>
              <Button
                variant="link"
                href="#"
                onClick={() => {
                  alert("Coming Soon");
                }}
              >
                Already have an account?
              </Button>
            </Form>
          </Container>
        </section>
      </div>
      <Footer />
    </div>
  );
};
export default RegisterApp;
