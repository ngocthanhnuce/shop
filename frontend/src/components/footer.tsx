/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <footer style={{ backgroundColor: "#343a40", marginBottom: '20px' }}>
        <Container>
          <Row style={{ paddingTop: "25px", color: "white" }}>
            <Col>
              <h3 style={{color: 'white'}}>QUICK LINKS</h3>
              <p>Contact</p>
              <p>About us</p>
              <p>News</p>
              <p>FAQ</p>
            </Col>
            <Col>
              <h3 style={{color: 'white'}}>GET IN TOUCH</h3>
              <p>
                Sign up to stay in the loop. Receive updates, access to
                exclusive deals, and more.
              </p>
            </Col>
            <Col>
              <h3 style={{color: 'white'}}>NEWSLETTER</h3>
              <Form inline>
                <Form.Control
                  type="text"
                  name="q"
                  placeholder="Email Address"
                  className="mr-sm-2 ml-sm-5"
                ></Form.Control>
                <Button type="submit" variant="outline-success" className="p-2">
                  Search
                </Button>
              </Form>
            </Col>
          </Row>
          <Row style={{borderTop: '1px solid white'}}>
            <Col
              style={{marginTop: '5px', color: "white" }}
              className="text-center py-3"
            >
              Copyright &copy; ProShop
            </Col>
            <Col style={{marginTop: '22px'}}>
              <div className="col">
                <ul className="list-unstyled list-inline text-center mb-0">
                  <li className="list-inline-item">
                    <a className="btn-floating btn-fb mx-1">
                      <i className="fab fa-facebook-f" style={{color: 'white'}}></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-tw mx-1">
                      <i className="fab fa-twitter" style={{color: 'white'}}></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-gplus mx-1">
                      <i className="fab fa-google-plus-g" style={{color: 'white'}}></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-li mx-1">
                      <i className="fab fa-linkedin-in" style={{color: 'white'}}></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-dribbble mx-1">
                      <i className="fab fa-dribbble" style={{color: 'white'}}></i>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
