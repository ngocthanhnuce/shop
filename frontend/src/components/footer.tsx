import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <footer style={{ backgroundColor: "#343a40" }}>
        <Container>
          <Row>
            <Col
              style={{ margin: "15px 0", color: "white" }}
              className="text-center py-3"
            >
              Copyright &copy; ProShop
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
