import React from "react";
import { ProgressBar } from "react-bootstrap";
import { Grid, Cell } from "react-mdl";

const Skills = ({ skill, now }) => {
  return (
    <Grid >
      <Cell >
      {skill}
        <ProgressBar asdasd animated now={now} style={({ width: "80px" }, {height: "30px"}, {marginBottom:"15px"})} />
      </Cell>
    </Grid>
  );
};

export default Skills;
