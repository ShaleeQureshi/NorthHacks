import React from "react";
import { Container, Button, Row, Image, Col } from "react-bootstrap";

// Importing my Components
import Navigation from "../components/navigation";
import Jumbo from "../components/jumbo";
import ControlledCarousel from "../components/carousel";
import ListItems from "../components/list-items";
import Footer from "../components/footer";

// Importing Assets
import LOGO from "../assets/images/rsz_8787df2b-4510-4d59-a7a4-f07feb691132.jpg";
import PIC1 from "../assets/images/north hacks carasouel_1.png";
import PIC2 from "../assets/images/north hacks carasouel.png";
import PIC3 from "../assets/images/north hacks carasouel_2.png";

const HomeApp = () => {
  return (
    <div className="bg-home">
      <div className="wrapper">
        <Navigation />
        <Jumbo
          elements={
            <Row>
              <Col sm={8}>
                {" "}
                <Image
                  src={LOGO}
                  roundedCircle
                  className="landing-img float-left mr-5 mb-5"
                />
                <div className="landing-txt light-text mt-3 ml-5">
                  <h1>North Hacks</h1>
                  <p>Led by Student's for Students</p>
                </div>{" "}
              </Col>
              <Col sm={4}>
                <ControlledCarousel pic1={PIC3} pic2={PIC2} pic3={PIC1} />
              </Col>
            </Row>
          }
        />
        <section>
          <Container>
            <h1 className="blue-text text-center regular-text">
              What is North Hacks?
            </h1>
            <Row className="justify-content-around mt-5 mb-5">
              {" "}
              <ListItems
                customclass="blue-text box-shadow-list mt-5"
                srcfile="https://img.icons8.com/pastel-glyph/64/000000/mission-of-a-company.png"
                srcalt="Mission"
                header="Mission"
                listelements={
                  <div>
                    <p>
                      Our focus is on raising awareness of global issues through
                      fun and interactive competitions such as the upcoming
                      hackathon. More news to come in the future!
                    </p>
                    <Button variant="dark" href="/NorthHacks/#/mission">
                      Coming Soon
                    </Button>
                  </div>
                }
              />
              <ListItems
                customclass="blue-text box-shadow-list mt-5"
                srcfile="https://img.icons8.com/ios/80/000000/add-user-male.png"
                srcalt="Register"
                header="Register"
                listelements={
                  <div>
                    <p>
                      We hope to host competitive events on a regular basis. If
                      it sounds like something you would be interested in
                      register now for free!{" "}
                    </p>
                    <Button href="/NorthHacks/#/register" variant="dark">
                      Register for Free
                    </Button>
                  </div>
                }
              />
            </Row>
          </Container>
        </section>
      </div>
      <Footer />
    </div>
  );
};
export default HomeApp;
