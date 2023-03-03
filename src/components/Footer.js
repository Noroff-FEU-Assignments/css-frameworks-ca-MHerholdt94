import React from "react";
import { FaVimeoV } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="footer-icons">
        <FaVimeoV /> <FaYoutube />
      </div>
      <p className="footer-email">hello@yay.com</p>
      <p className="footer-copyright">Copyright 2023</p>
    </footer>
  );
}

export default Footer;
