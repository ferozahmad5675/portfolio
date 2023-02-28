import React from "react";
import { Link, useNavigate } from "react-router-dom";

function ProjectItem({ image, name, id, link, desc }) {
  const navigate = useNavigate();
  return (
    <div className="projectItem">
      <h1> {name} </h1>
      <div>
        <img className="img" src={image} alt=" no image" />
      </div>

      <p
        style={{
          fontFamily: "Helvetica",
          fontWeight: "30px",
          gap: ".5rem",
          display: "flex",
          padding: "1rem",
        }}
      >
        {desc}
      </p>
      <Link to={link} style={{ color: "Orange" }}>
        Click Here for the Visit
      </Link>
    </div>
  );
}

export default ProjectItem;
