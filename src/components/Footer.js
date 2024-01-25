import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Subin Budhathoki .</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Subin</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/SubinBudhathoki58"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
           
          
            <li className="social-icons">
              <a
                href="https://www.facebook.com/subin.budhathoki.31"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                {/* <FaLinkedinIn /> */}
                <FaFacebook/>
              </a>
            </li>
            
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
