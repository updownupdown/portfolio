import React from "react";
import Thumb from "../components/Thumb/Thumb.js";
import { ProjectList } from "../work/ProjectList.js";

function Work(props) {
  return (
    <div id="work" className="panel">
      {ProjectList.map(work => (
        <Thumb
          link={work.link}
          image={work.image}
          title={work.title}
          description={work.description}
        />
      ))}
    </div>
  );
}

export default Work;
