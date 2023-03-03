import React from "react";
import Accordion from "react-bootstrap/Accordion";

import tabOne from "../../images/tab-1.jpg";
import tabTwo from "../../images/tab-2.jpg";
import tabThree from "../../images/tab-3.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function ContentAccordion() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0" className="border border-0">
        <Accordion.Header>First</Accordion.Header>
        <Accordion.Body className="border-top">
          <p>
            Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
            venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
            ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
            condimentum mattis rhoncus.
          </p>

          <img src={tabOne} alt="Old TV"></img>

          <p className="text-black text-uppercase share-icons">
            Share <FaFacebookF /> <FaTwitter />
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className="border border-0">
        <Accordion.Header>Second</Accordion.Header>
        <Accordion.Body>
          <p>
            Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
            venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
            ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
            condimentum mattis rhoncus.
          </p>

          <img src={tabTwo} alt="Pictures on a wall"></img>

          <p className="text-black text-uppercase share-icons">
            Share <FaFacebookF /> <FaTwitter />
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className="border border-0">
        <Accordion.Header>Third</Accordion.Header>
        <Accordion.Body>
          <p>
            Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
            venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
            ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
            condimentum mattis rhoncus.
          </p>

          <img src={tabThree} alt="Broken window"></img>

          <p className="text-black text-uppercase share-icons">
            Share <FaFacebookF /> <FaTwitter />
          </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default ContentAccordion;
