import React from "react";
import Typical from "react-typical";
import { Container, Row, Col, Image } from "react-bootstrap";

// Importing my components
import Navigation from "../components/navigation";
import Jumbo from "../components/jumbo";
import ControlledCarousel from "../components/carousel";
import Footer from "../components/footer";

const MissionApp = () => {
  return (
    <div className="bg-home">
      <div className="wrapper">
        <Navigation />
        <Jumbo
          elements={
            <Row className="justify-content-around">
              <div className="landing-txt light-text text-center">
                <h1>Mission</h1>
                <Typical
                  steps={["Learn", 1000, "Compete", 1000, "Grow", 1000]}
                  loop={Infinity}
                  wrapper="p"
                />
              </div>
            </Row>
          }
        />
      </div>
      <Footer />
    </div>
  );
};
export default MissionApp;
