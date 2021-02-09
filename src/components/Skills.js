import React from "react";
import { ProgressBar } from "react-bootstrap";
import { Grid, Cell } from "react-mdl";
import centerStyle from "../App.css";

const Skills = ({ skill, now }) => {
  return (
    <Grid style={{ justifyItems: "center" }}>
      {skill}

      <Cell style={({ height: "0px" },{margin:"auto"}, { width: "380px" })}>
        <ProgressBar animated now={now} />
      </Cell>
    </Grid>
  );
};

export default Skills;
