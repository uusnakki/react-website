import React from "react"

const Education = ({
  startYear,
  endYear,
  educationAbout,
  schoolName,
  src,
  alt,
}) => {
  return (
    <div className="row">
      
        <div className="row">
          {startYear} - {endYear}
        
      </div>
      
        <div className="col-1">
          <h4 style={{ marginTop: "0px" }}>{schoolName}</h4>
        </div>
      

      <div className="col-sm-9">
        <img src={src} alt={alt} style={{ height: "100px",  borderRadius: "8px" }} />
      </div>
      <div className="row">
        <p>{educationAbout}</p>
      </div>

      <div className="row">
        <hr style={{ borderTop: "3px solid #833fb6", width: "50%" }} />
      </div>
    </div>
  );
};

export default Education;
