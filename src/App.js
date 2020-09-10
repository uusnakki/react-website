import React from "react";
import style from "./App.css";
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
  };

  return (
    <div className="container">
      <DefaultPage />

      <Router>
        <div>
          <Link style={padding} to="/">
            Home
          </Link>
          <Link style={padding} to="/education">
            Education
          </Link>
          <Link style={padding} to="/experience">
            Experience
          </Link>
          <Link style={padding} to="/about">
            About
          </Link>
          <Link style={padding} to="/skills">
            Skills
          </Link>
          <Link style={padding} to="/future">
            Future
          </Link>
        </div>

        <Switch>
          <Route path="/education">
            <Education
              schoolName={"University of Jyväskylä"}
              startYear={2019}
              endYear={2024}
              educationAbout={
                "Main concentration on information systems, software development, business studies, economics and IT in general. Highly active in student organization Dumppi ry "
              }
            />
            <Education
              schoolName={"Kuninkaantien lukio"}
              startYear={2013}
              endYear={2016}
              educationAbout={"Matriculation Examination"}
            />
          </Route>
          <Route path="/experience">
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
              experienceAbout={"During my stay at Seattle, WA, I got an opportunity to do some voluntary work at the local Finnish School, which is based on voluntary work of teachers and parents. The school was arranged two times a week: thursday for 6-year olds and saturday for 10-15 year olds. I got to do a large variety of tasks, such as arranging the classes, playing and arranging school yard games and activities for the children, help the teacher during the meal break, teaching the kids Finnish words and grammar and monitor/guide small tests in the classroom."}
            />
            <Experience
              jobName={"Substitute teacher"}
              company={"City of Espoo"}
              startYear={2018}
              endYear={2019}
              experienceAbout={
                "I was given a lot of responsibilities when working for Juvanpuisto school, located at the city of Espoo. During this time period I had a privilege to teach kids from every agegroup, from ages 8 to 15. The experience was priceless because I got to learn how to control, teach, lead and give examples in a large variety of scenarios and classes."
              }
            />
            <Experience
              jobName={"Cashier/Warehouseman"}
              company={"K-Supermarket Kulinaari"}
              startYear={2018}
              endYear={2018}
              experienceAbout={
                "The job included the traditional task of a cashier at the supermarket and the task of a warehouseman on separate workdays. As a warehouseman the daily tasks varied greatly compared to the days as cashier: taking care of the cold room and the fruit section, adding supplements and products to the shelves when they were running low, making sure that the carts where in order and in the right place etc."
              }
            />
            <Experience
              jobName={"Second Lieutenant/Conscript"}
              company={"Finnish defense forces"}
              startYear={2017}
              endYear={2017}
              experienceAbout={
                "Military service as a conscript. I learned a lot of what is it to take responsibility as a platoon leader and how to act under pressure. The experience gave me priceless memories."
              }
            />
            <Experience
              jobName={"Warehouseman"}
              company={"Transval Group"}
              startYear={2016}
              endYear={2016}
              experienceAbout={
                "The job included the traditional task of a cashier at the supermarket and the task of a warehouseman on separate workdays. As a warehouseman the daily tasks varied greatly compared to the days as cashier: taking care of the cold room and the fruit section, adding supplements and products to the shelves when they were running low, making sure that the carts where in order and in the right place etc."
              }
            />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/future">
            <Future />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <div>
          <SocialMedia />
          <i>Joonas Uusnäkki, Information Systems @ JYU</i>
        </div>
      </Router>
    </div>
  );
};

export default App;
