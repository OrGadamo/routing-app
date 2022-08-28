import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <Link to={"/"}>
        <span>Home</span>
      </Link>
      <Link to={"Contact"}>
        <span>Contact</span>
      </Link>
      <Link to={"About"}>
        <span>About</span>
      </Link>
      <Link to={"Phones"}>
        <span>Phones</span>
      </Link>
      <Link to={"Movies"}>
        <span>Movies</span>
      </Link>
      <Link to={"moviesdetails"}>
        <span>Movies Details</span>
      </Link>
    </div>
  );
}

export default Navbar;
