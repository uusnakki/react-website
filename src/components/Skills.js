import React from "react";
import { ProgressBar } from "react-bootstrap";

const Skills = ({ skill, now }) => {
  return (
    <div className="row">
      <ul className="col">{skill}</ul>
      <div className="col-sm-9">
        <ProgressBar
          animated
          style={{
            width: "30%",
            position: "relative",
            border: "1px solid #333",
          }}
          now={now}
        />
      </div>
    </div>
  );
};

export default Skills;
