import React from "react";
import Thumb from "../components/Thumb/Thumb";
import { Grid } from "../components/Grid/Grid";
import { ProjectList } from "../work/ProjectList";

function Work(props) {
  return (
    <div id="work" className="panel">
      <Grid>
        <Grid.Row className="center-xs">
          {ProjectList.map(work => (
            <Thumb
              link={work.link}
              image={work.image}
              title={work.title}
              description={work.description}
            />
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Work;
