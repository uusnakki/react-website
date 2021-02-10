import React from "react";
import styles from "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Future from "./components/Future";
import SocialMedia from "./components/SocialMedia";
import DefaultPage from "./components/DefaultPage";
import Education from "./components/Education";
import Experience from "./components/Experience";

const App = () => {
  const padding = {
    padding: 5,
    color: "black",
  };

  return (
    <Router
      class="navbar navbar-expand-lg bg-dark py-md-3"
      style={styles.navigation}
    >
      <div>
        <Link style={padding} to="/">
          <img
            src={"https://static.thenounproject.com/png/423483-200.png"}
            alt="home"
            style={{ height: "20px", opacity: "0.6" }}
          />
          Home
        </Link>
        <Link style={padding} to="/education">
          <img
            src={
              "https://www.iconfinder.com/data/icons/resume-pictograms/100/Resume_Graduate-512.png"
            }
            alt="education"
            style={{ height: "20px" }}
          />
          Education
        </Link>
        <Link style={padding} to="/experience">
          <img
            src={"https://static.thenounproject.com/png/2372865-200.png"}
            alt="experience"
            style={{ height: "20px", opacity: "0.5" }}
          />
          Experience
        </Link>
        <Link style={padding} to="/about">
          <img
            src={"https://static.thenounproject.com/png/1471455-200.png"}
            alt="about"
            style={{ height: "24px", opacity: "0.9" }}
          />
          About
        </Link>
        <Link style={padding} to="/skills">
          <img
            src={"https://static.thenounproject.com/png/369287-200.png"}
            alt="skills"
            style={{ height: "24px", opacity: "0.7" }}
          />
          Skills
        </Link>
        <Link style={padding} to="/future">
          <img
            src={"https://static.thenounproject.com/png/2373229-200.png"}
            alt="future"
            style={{ height: "22px", opacity: "0.9" }}
          />
          Future
        </Link>
      </div>
      <DefaultPage />
      <Switch>
        <Route path="/education">
          <Education
            schoolName={<div>University of Jyväskylä</div>}
            subject={<div>M.Sc. Economics, Information Systems Science</div>}
            src={"https://www.jyu.fi/@@site-logo/logo.png"}
            alt={"jyu"}
            startYear={2019}
            endYear={2024}
            educationAbout={
              <div>
                Main concentration on information systems, software development,
                business studies, economics and IT in general. <br />
                Highly active in student organization Dumppi ry.
              </div>
            }
          />
          <Education
            schoolName={"Kuninkaantien lukio"}
            src={
              "data:image/png;base64,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"
            }
            alt={"kunkku"}
            startYear={2013}
            endYear={2016}
            educationAbout={<div>Matriculation Examination</div>}
          />
        </Route>
        <Route path="/experience">
          <Experience
            jobName={"Research Assistant & Software Developer"}
            company={"University of Jyväskylä, StartupLab JYU"}
            startYear={2020}
            endYear={2020}
            experienceAbout={
              <div>
                Working in a dynamic environment at StartupLab JYU.
                <br />
                Developing software and assisting on master's level
                DevSecOps-course.
                <br />
                <br />
                Main responsibilites:
                <br />
                - Software development
                <br />
                - Course assistance
                <br />- New technologies
              </div>
            }
          />
          <Experience
            jobName={"Course Assistant"}
            company={"University of Jyväskylä"}
            startYear={2020}
            endYear={2020}
            experienceAbout={
              <div>
                Assisting on Bachelor's level "Introduction to Software
                Development" course.
                <br />
                <br />
                Main responsibilites:
                <br />
                - Organizing weekly assignments
                <br />
                - Supporting students in small-group tasks
                <br />- Lecturing via Zoom.
              </div>
            }
          />
          <Experience
            jobName={"Communications manager & Secretary"}
            company={"Dumppi ry"}
            startYear={2019}
            endYear={2020}
            experienceAbout={
              "The task includes managing social media accounts, taking care of all the e-mail accounts, producing a welcome-letter to new students etc."
            }
          />
          <Experience
            jobName={"Assistant, Voluntary work overseas"}
            company={"Finnish School of Seattle"}
            startYear={2018}
            endYear={2018}
            experienceAbout={
              <div>
                During my stay at Seattle, WA, I got an opportunity to do some
                voluntary work at the local Finnish School,
                <br /> which is based on voluntary work of teachers and parents.{" "}
                <br />
                The school was arranged two times a week: thursday for 6-year
                olds and saturday for 10-15 year olds. <br />I got to do a large
                variety of tasks, such as arranging the classes,
                <br /> playing and arranging school yard games and activities
                for the children,
                <br />
                help the teacher during the meal break, <br />
                teaching the kids Finnish words and grammar and monitor/guide
                small tests in the classroom.
              </div>
            }
          />
          <Experience
            jobName={"Substitute teacher"}
            company={"City of Espoo"}
            startYear={2018}
            endYear={2019}
            experienceAbout={
              <div>
                I was given a lot of responsibilities when working for
                Juvanpuisto school, located at the city of Espoo.
                <br /> During this time period I had a privilege to teach kids
                from every agegroup, from ages 8 to 15.
                <br /> The experience was priceless because I got to learn how
                to control, teach, lead and give examples in a large variety of
                scenarios and classes.
              </div>
            }
          />
          <Experience
            jobName={"Cashier/Warehouseman"}
            company={"K-Supermarket Kulinaari"}
            startYear={2018}
            endYear={2018}
            experienceAbout={
              <div>
                The job included the traditional task of a cashier at the
                supermarket and the task of a warehouseman on separate workdays.
              </div>
            }
          />
          <Experience
            jobName={"Second Lieutenant/Conscript"}
            company={"Finnish defense forces"}
            startYear={2017}
            endYear={2017}
            experienceAbout={
              <div>
                Military service as a conscript. I learned a lot of what is it
                to take responsibility as a platoon leader and <br /> how to act
                under pressure. The experience gave me priceless memories.
              </div>
            }
          />
          <Experience
            jobName={"Warehouseman"}
            company={"Transval Group"}
            startYear={2016}
            endYear={2016}
            experienceAbout={
              <div>
                Working in a large storage gave me a broad insight about the
                logistics of the industry.
              </div>
            }
          />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/skills">
          <Skills skill={"JavaScript(React, ReactNative, NodeJS)"} now={70} />
          <Skills skill={"Python"} now={50} />
          <Skills skill={"Java"} now={40} />
          <Skills skill={"C#"} now={40} />
          <Skills skill={"SQL"} now={20} />
        </Route>
        <Route path="/future">
          <Future />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

      <SocialMedia />
      <h5 style={{ fontSize: "15px" }}>Information Systems @ JYU</h5>
    </Router>
  );
};

export default App;
