import React, { useEffect, useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaLinkedin, FaLink } from "react-icons/fa";

function Footer() {
  <footer className="footer">
    <a
      href="https://www.linkedin.com/in/piqulsky/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaLinkedin size={30} color="white" />
    </a>
    <a
      href="https://linktr.ee/Piqulsky"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaLink size={30} color="white" />
    </a>
  </footer>;
}
export default Footer;
