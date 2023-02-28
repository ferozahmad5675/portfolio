import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import indeed from "../assets/indeed.png";
import feroz from "../assets/feroz-pic.jpg";

function Home() {
  return (
    <div className="home">
      <div className="pic">
        <img src={feroz} alt="" />
      </div>
      <div className="about">
        <h2> Hi, My Name is Feroz</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <Link to="https://github.com/ferozahmad5675?tab=repositories">
            {" "}
            <GitHubIcon />
          </Link>
          <Link to="https://profile.indeed.com/">
            <img
              style={{
                width: "50px",
                height: "55px",
                marginLeft: "3px",
                marginRight: "-8px",
                borderRadius: "8px",
                marginBottom: "5px",
              }}
              src={indeed}
              alt=""
            />
          </Link>
          <Link to="https://www.linkedin.com/in/feroz-ahmad-a7b42b22b/">
            {" "}
            <LinkedInIcon />
          </Link>{" "}
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>ReactJS, Redux, HTML, CSS, BootStrap, MaterialUI</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, MongoDB</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
