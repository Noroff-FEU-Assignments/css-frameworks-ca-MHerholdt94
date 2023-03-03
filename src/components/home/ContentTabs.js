import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import tabOne from "../../images/tab-1.jpg";
import tabTwo from "../../images/tab-2.jpg";
import tabThree from "../../images/tab-3.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function ContentTabs() {
  return (
    <Tabs defaultActiveKey="first" id="uncontrolled-tab-example">
      <Tab eventKey="first" title="First">
        <Container>
          <Row className="p-5">
            <Col className="col-5">
              <img src={tabOne} alt="Old TV"></img>
            </Col>
            <Col className="col-7">
              <p>
                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
                venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
                ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
                Sed condimentum mattis rhoncus.
              </p>

              <p className="text-black text-uppercase share-icons">
                Share <FaFacebookF /> <FaTwitter />
              </p>
            </Col>
          </Row>
        </Container>
      </Tab>
      <Tab eventKey="second" title="Second">
        <Container>
          <Row className="p-5">
            <Col className="col-5">
              <img src={tabTwo} alt="Pictures on a wall"></img>
            </Col>
            <Col className="col-7">
              <p>
                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
                venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
                ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
                Sed condimentum mattis rhoncus.
              </p>

              <p className="text-black text-uppercase share-icons">
                Share <FaFacebookF /> <FaTwitter />
              </p>
            </Col>
          </Row>
        </Container>
      </Tab>
      <Tab eventKey="third" title="Third">
        <Container>
          <Row className="p-5">
            <Col className="col-5">
              <img src={tabThree} alt="Broken window"></img>
            </Col>
            <Col className="col-7">
              <p>
                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
                venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
                ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
                Sed condimentum mattis rhoncus.
              </p>

              <p className="text-black text-uppercase share-icons">
                Share <FaFacebookF /> <FaTwitter />
              </p>
            </Col>
          </Row>
        </Container>
      </Tab>
    </Tabs>
  );
}

export default ContentTabs;
