import React from "react";

import { Container, Row, Button } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="footer sticky-bottom">
      <Row className="text-center d-flex justify-content-center pt-5 mb-3">
        <div className="col-md-2 mb-3">
          <h6 className="text-uppercase font-weight-bold">
            <Button href="/NorthHacks/#/" variant="dark">
              Home
            </Button>
          </h6>
        </div>
        <div className="col-md-2 mb-3">
          <h6 className="text-uppercase font-weight-bold">
            <Button href="#" variant="dark">
              Coming Soon
            </Button>
          </h6>
        </div>
        <div className="col-md-2 mb-3">
          <h6 className="text-uppercase font-weight-bold">
            <Button href="/NorthHacks/#/register" variant="dark">
              Register
            </Button>
          </h6>
        </div>
      </Row>
      <div className="footer-copyright text-center py-3">
        Copyright{" "}
        <a
          href="https://www.squreshi.net/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          @ShahrukhQureshi
        </a>
      </div>
    </Container>
  );
};
export default Footer;
