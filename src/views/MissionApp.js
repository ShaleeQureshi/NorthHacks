import React from "react";
import Typical from "react-typical";
import { Container, Row, Card, Image } from "react-bootstrap";

// Importing my components
import Navigation from "../components/navigation";
import Jumbo from "../components/jumbo";
import ControlledCarousel from "../components/carousel";
import Footer from "../components/footer";

// Importing Assets
import MISSION from "../assets/images/Custom Preset_2.png";
import COMPETE from "../assets/images/Custom Preset 2.png";
import GROW from "../assets/images/Custom Preset 2_1.png";

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
        <section>
          <Container>
            <Row className="justify-content-around mt-5">
              <Image src={MISSION} rounded />
              <p className="regular-text text-center word-wrap mt-5">
                North Hacks aims to provide students with enlightening
                experiences through competition. Our hackathons are open to
                multiple types of submissions ranging from written reports to
                presentations to, of course, -CODE!
                <br />
                As an added incentive, we offer prizes{" "}
                <span role="img" aria-label="smile">
                  &#128512;
                </span>
              </p>
            </Row>
            <hr className="mt-5 mb-5" />
            <Row className="justify-content-around">
              <Image src={COMPETE} rounded />
              <p className="regular-text text-center word-wrap mt-5">
                North Hacks aims to provide students with enlightening
                experiences through competition. Our hackathons are open to
                multiple types of submissions ranging from written reports to
                presentations to, of course, -CODE!
                <br />
                As an added incentive, we offer prizes{" "}
                <span role="img" aria-label="smile">
                  &#128512;
                </span>
              </p>
            </Row>
            <hr className="mt-5 mb-5" />
            <Row className="justify-content-around">
              <Image src={GROW} rounded />
              <p className="regular-text text-center word-wrap mt-5">
                In between competitions, our members need to stay focused, so we
                try to give out some practice problems here and there to keep
                them thinking!
                <br />
                Did we mention our events offer prizes?{" "}
                <span role="img" aria-label="smile">
                  &#128512;
                </span>
              </p>
            </Row>
            <hr className="mt-5 mb-5" />
          </Container>
        </section>
      </div>
      <Footer />
    </div>
  );
};
export default MissionApp;
