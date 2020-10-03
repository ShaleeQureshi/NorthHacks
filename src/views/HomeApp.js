import React from "react";
import { Container, Button, Row } from "react-bootstrap";

// Importing my Components
import Navigation from "../components/navigation";
import Jumbo from "../components/jumbo";
import ListItems from "../components/list-items";
import Footer from "../components/footer";

const HomeApp = () => {
  return (
    <div className="bg-home">
      <div className="wrapper">
        <Navigation />
        <Jumbo
          elements={
            <div className="landing-txt">
              <h1>North Hacks</h1>
              <p>Led by Students for Students</p>
            </div>
          }
        />
        <section>
          <Container>
            <h1 className="blue-text text-center">What is North Hacks?</h1>
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
                    <Button variant="dark" href="#">
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
                    <Button href="/register" variant="dark">
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
