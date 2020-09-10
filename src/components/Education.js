import React from "react";
import { Grid, Cell } from "react-mdl";

const Education = ({ startYear, endYear, educationAbout, schoolName}) => {
  return (
    <Grid>
      <Cell col={4}>
        {startYear} - {endYear}
      </Cell>
      <Cell col={8}></Cell>
      <h4 style={{ marginTop: "0px" }}>{schoolName}</h4>
      <p>{educationAbout}</p>
    </Grid>
  );
};

export default Education;
