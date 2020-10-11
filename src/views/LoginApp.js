import React, { useCallback } from "react";
import * as firebase from "firebase";
import { Container, Form, Button, Row } from "react-bootstrap";
import Footer from "../components/footer";
import Jumbo from "../components/jumbo";
import Navigation from "../components/navigation";

const LoginApp = ({ history }) => {
  const loginUser = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
        await firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/profile");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  const resetPassword = (event, email) => {
    event.preventDefault();
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        alert("Password reset email sent to: " + email);
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div className="bg-home">
      <div className="wrapper">
        <Navigation />
        <Jumbo
          elements={
            <Row className="justify-content-around">
              <div className="landing-txt text-center">
                <h1 className="light-text">Login</h1>
                <hr className="jumbo-underline" />
                <p className="italic-text">
                  {" "}
                  Powered with Google Firebase Authentication
                </p>
              </div>
            </Row>
          }
        />
        <section>
          <Container>
            <Form onSubmit={loginUser}>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="example@example.com"
                  id="email"
                  required
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group id="passGrp">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  id="password"
                  required
                />
              </Form.Group>
              <Button variant="dark" type="submit" id="loginBtn">
                Login
              </Button>
              <Button
                variant="dark"
                id="resetPassBtn"
                style={{ display: "none" }}
                onClick={(event) => {
                  resetPassword(event, document.getElementById("email").value);
                }}
              >
                Reset Password
              </Button>
              <Button
                variant="link"
                onClick={(event) => {
                  event.preventDefault();
                  document.getElementById("passGrp").style.display = "none";
                  document.getElementById("loginBtn").style.display = "none";
                  document.getElementById("resetPassBtn").style.display =
                    "inline";
                }}
              >
                Forgot Password?
              </Button>
            </Form>
          </Container>
        </section>
      </div>
      <Footer />
    </div>
  );
};
export default LoginApp;
