import React from "react";
import { Grid } from "../components/Grid/Grid.js";
import Enjoyment from "../components/Icons/Enjoyment";
import Experience from "../components/Icons/Experience";
import Proficiency from "../components/Icons/Proficiency";

import "./About.scss";

const resumeLink = "./files/James_Carmichael_-_Resume_(Dec_2021).pdf";

const appList = [
  {
    name: "Figma",
    logo: "figma",
    experience: 9,
    proficiency: 9,
    enjoyment: 10,
  },
  {
    name: "Illustrator",
    logo: "illustrator",
    experience: 10,
    proficiency: 9,
    enjoyment: 6,
  },
  {
    name: "Photoshop",
    logo: "photoshop",
    experience: 10,
    proficiency: 9,
    enjoyment: 7,
  },
  {
    name: "HTML",
    logo: "html",
    experience: 10,
    proficiency: 8,
    enjoyment: 9,
  },
  {
    name: "CSS",
    logo: "css",
    experience: 10,
    proficiency: 9,
    enjoyment: 9,
  },
  {
    name: "VS Code",
    logo: "vscode",
    experience: 8,
    proficiency: 6,
    enjoyment: 9,
  },
  {
    name: "git",
    logo: "git",
    experience: 6,
    proficiency: 5,
    enjoyment: 8,
  },
  {
    name: "React",
    logo: "react",
    experience: 6,
    proficiency: 4,
    enjoyment: 6,
  },
];

const appCards = appList.map(
  ({ name, logo, experience, proficiency, enjoyment }) => (
    <div key={logo} className="app-card-holder">
      <div className="app-card">
        <img
          className="app-card-logo"
          src={`./images/apps/${logo}.png`}
          width="120"
          height="120"
          alt={name}
        />
        <p className="app-card-name">{name}</p>
        <div className="app-card-levels">
          <div className="level" title="Experience">
            <Experience />
            <div className="level-bg">
              <div
                className={`level-lvl lvl-${experience}`}
                style={{ width: experience * 10 + "%" }}
              ></div>
            </div>
          </div>
          <div className="level" title="Proficiency">
            <Proficiency />
            <div className="level-bg">
              <div
                className={`level-lvl lvl-${proficiency}`}
                style={{ width: proficiency * 10 + "%" }}
              ></div>
            </div>
          </div>
          <div className="level" title="Enjoyment">
            <Enjoyment />
            <div className="level-bg">
              <div
                className={`level-lvl lvl-${enjoyment}`}
                style={{ width: enjoyment * 10 + "%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
);

function About(props) {
  return (
    <div id="about" className="panel">
      <Grid>
        <Grid.Row>
          <Grid.Col xs={12} lg={6}>
            <h1>About</h1>
            <p>
              I'm a Quebec City born, Kitchener based UI/UX designer, currently
              working at Intellijoint Surgical, where I'm the owner of the
              product design for the HIP, KNEE, and VIEW apps.
            </p>
            <p>
              I have over 12 years experience in designing and developing web
              apps and websites, as well as print design, branding, and project
              management. I've had the opportunity to work freelance as well as
              within or across small and large teams.
            </p>
            <p>
              I value collaboration, feedback, efficiency, passion, and skill,
              but also self-sufficiency, downtime, beauty, flexibility, and
              humour.
            </p>
            <p>
              I'm obsessively curious and continuously learning about design,
              technology, science, psychology, politics, philosophy, etc. I love
              cycling, hiking, gardening, cooking, camping, travelling, crafts,
              movies, and music.
            </p>
          </Grid.Col>
          <Grid.Col className="col-resume" xs={12} lg={6}>
            <a
              className="resume-img-link"
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./images/home/resume.png"
                alt="resume preview"
                width="1700"
                height="2200"
              />
            </a>
            <br />
            <a
              className="button"
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col>
            <div className="app-cards">{appCards}</div>
          </Grid.Col>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default About;
