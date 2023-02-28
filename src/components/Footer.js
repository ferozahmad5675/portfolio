import React from "react";

import indeed from "../assets/indeed.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Link to="https://profile.indeed.com/">
          {" "}
          <Link to="https://profile.indeed.com/">
            <img
              style={{
                width: "50px",
                height: "55px",
                paddingLeft: "5px",
                marginRight: "30px",
                borderRadius: "8px",
                marginBottom: "25px",
              }}
              src={indeed}
              alt=""
            />
          </Link>
        </Link>
        <Link to="https://github.com/ferozahmad5675?tab=repositories">
          {" "}
          <GitHubIcon />
        </Link>
        <Link to="https://www.linkedin.com/in/feroz-ahmad-a7b42b22b/">
          {" "}
          <LinkedInIcon />
        </Link>{" "}
      </div>
      <p> Phone No : +92302-5878708</p>
      <p> Email: ferozahmad5675@gmail.com</p>
    </div>
  );
}

export default Footer;
