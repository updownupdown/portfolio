import React from "react";
import { Grid } from "../components/Grid/Grid.js";
import Enjoyment from "../components/Icons/Enjoyment";
import Experience from "../components/Icons/Experience";
import Proficiency from "../components/Icons/Proficiency";

const resumeLink = "./resume/James_Carmichael_-_Resume_(Apr_2020).pdf";

const appList = [
  {
    name: "Figma",
    logo: "figma",
    experience: 6,
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
    experience: 4,
    proficiency: 5,
    enjoyment: 9,
  },
  {
    name: "git",
    logo: "git",
    experience: 3,
    proficiency: 3,
    enjoyment: 8,
  },
  {
    name: "React",
    logo: "react",
    experience: 2,
    proficiency: 2,
    enjoyment: 6,
  },
  {
    name: "Node.js",
    logo: "nodejs",
    experience: 2,
    proficiency: 2,
    enjoyment: 4,
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
    <div id="about" className="panel panel-grey">
      <Grid>
        <Grid.Row>
          <Grid.Col xs={12} lg={6}>
            <h1>About</h1>
            <p>
              I have over 10 years experience designing and coding for the web,
              both within agencies and as a freelancer. Recently I've been a
              UI/UX designer at Texada Software, and have had the opportunity to
              the redesign and continuous implement new features for 2 web apps
              and iOS/Android mobile apps, in addition to updating a component
              library, spearheading the company rebrand effort, and contributing
              to React app development.
            </p>
            <p>
              I like problem solving, interesting projects, and open
              collaborating with talented and passionate people. I'm passionate
              about beautiful designs and frictionless user experiences. I
              believe in continuous growth and learning, and I pride myself in
              being highly organized and efficient. I basically just love
              organizing things and making them look just right.
            </p>
            <p>
              Beside UI/UX design, I enjoy playing the piano, hiking, camping,
              and reading about technology, science, politics, and philosophy.
              I'm a Quebec native, currently residing in Kitchener, Ontario.
            </p>
          </Grid.Col>
          <Grid.Col className="col-resume" xs={12} lg={6}>
            <a
              className="img-link-hover"
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./resume/Resume.png" alt="resume preview" />
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
