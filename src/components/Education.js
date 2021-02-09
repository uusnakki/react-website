import React from "react";
import centerStyle from "../App.css";

const Education = ({
  startYear,
  endYear,
  educationAbout,
  schoolName,
  src,
  alt,
}) => {
  return (
    <div style={centerStyle}>
      <h4 style={{ marginTop: "0px" }}>{schoolName}</h4>
      {startYear} - {endYear}
      <br />
      <img
        src={src}
        alt={alt}
        style={{ height: "100px", borderRadius: "8px" }}
      />
      {educationAbout}
      <div>
        <hr style={{ borderTop: "3px solid #833fb6", width: "50%" }} />
      </div>
    </div>
  );
};

export default Education;
