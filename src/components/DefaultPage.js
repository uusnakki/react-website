import React from "react";
import { Grid, Cell } from "react-mdl";

const DefaultPage = () => {
  return (
    <div>
     <Grid>
        <Cell col={4}>
          <div>
            <img
              src="https://pbs.twimg.com/profile_images/1074419112451940353/ump3N7iv_400x400.jpg"
              alt="programming"
              style={{ height: "200px" }}
            />
          </div>
          <h2 style={{paddingTop:"2em"}}>Joonas Uusnäkki</h2>
          <h4 style={{color:"grey"}}>Student at University of Jyväskylä</h4>
          <hr style={{borderTop:"3px solid #833fb6",width:"50%"}}/>
        </Cell>
      </Grid>
    </div>
  );
};

export default DefaultPage;
