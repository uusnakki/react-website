import React from "react";
import { Grid, Cell } from "react-mdl";

const Experience = ({ startYear, endYear, experienceAbout, jobName, company}) => {
  return (
    <Grid>
      <Cell col={4}>
        {startYear} - {endYear}
      </Cell>
      <Cell col={8}></Cell>
      <h4 style={{ marginTop: "0px" }}>{jobName}</h4>
      <h5 style={{ marginTop: "0px" }}>{company}</h5>
      <p>{experienceAbout}</p>
    </Grid>
  );
};

export default Experience;
