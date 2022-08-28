import "./About.css";
import React from "react";
import Button from "@mui/material/Button";
function About() {
  return (
    <div className="about">
      <Button variant="outlined">Text</Button>
      <h1>About</h1>
      <img
        id="about_img"
        src="http://www.foreveragency.com/wp-content/uploads/2016/03/gif.gif"
        alt=""
      />
    </div>
  );
}

export default About;
