import React from "react";
import { Row } from "react-bootstrap";
import Footer from "../components/footer";
import Navigation from "../components/navigation";

const NotFoundApp = () => {
  return (
    <div className="bg-home">
      <div className="wrapper">
        <Navigation />
        <Row className="justify-content-around blue-text text-center text-regular center">
          <h1>
            Sorry
            <br />
            That page doesn't exist
            <br />
            :(
          </h1>
        </Row>
      </div>
      <Footer />
    </div>
  );
};
export default NotFoundApp;
