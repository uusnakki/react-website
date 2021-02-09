import React from "react";
import Typical from 'react-typical'

const DefaultPage = () => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <br />
          <img
            src={require('./photos/cv.JPG')}
            alt="joonas"
            style={{ borderRadius: "8px",
              width: "200px"}}
          />
        </div>
        
      </div>
      <div className="col">
        <h2 className="col"style={{ paddingTop: "2em" }}>Joonas Uusnäkki</h2>
        <h4 className="col"style={{ color: "grey" }}>
          I am a{" "}
          <Typical
          steps={[
          'musician',
          1000,
          'university student',
          1000,
          'developer',
          1000
          ]}
          loop={Infinity}
          wrapper="b"
          />
          </h4>
        <hr className="col"style={{ borderTop: "3px solid #833fb6", width: "50%" }} />
        </div>
        
    </div>
  );
};

export default DefaultPage;
