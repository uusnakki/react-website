import React from "react";
import styles from "../App.css";
const About = () => {
  return (
    <div className={styles}>
      
        My name is Joonas Uusnäkki. I am 22-year-old student from Espoo.<br/>
        Currently I am studying information systems and economics at University
        of Jyväskylä.<br/>
        <div id="container">
          <img
            src={require('./photos/ma.JPG')}
            alt="joonas on beach"
            style={{ borderRadius: "8px",
              width: "300px", marginRight: '10px'}}
          />
          { }
          <img
            src={require('./photos/holly.JPG')}
            alt="joonas hollywood"
            style={{ borderRadius: "8px",
              width: "300px",marginLeft: '10px'}}
          />
          </div>
        <br/> My studies consists heavily of computer science and
        economics, two subjects that I hope I can combine at future work.<br/>
        Freetime-activities such as producing music, taking aesthetic photos and
        creating video content are the most rewarding ones for me personally.<br/><br/>
        In the future I would like to get better at these things and at the same
        time learn more about my<br/> field of study, such as AI, Internet Of Things
        and large variety of programming languages.
      
    </div>
  );
};

export default About;
