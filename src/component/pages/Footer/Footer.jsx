import "./Footer.css";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>
          <Link to="/">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="Contact">
            <span>Contact</span>
          </Link>
        </li>
        <li>
          <Link to="About">
            <span>About</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
