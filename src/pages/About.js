import React from "react";
import { Grid } from "../components/Grid/Grid.js";
import Enjoyment from "../components/Icons/Enjoyment";
import Experience from "../components/Icons/Experience";
import Proficiency from "../components/Icons/Proficiency";

import "./About.scss";

const resumeLink = "./files/James_Carmichael_-_Resume_(Apr_2020).pdf";

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
    <div id="about" className="panel">
      <Grid>
        <Grid.Row>
          <Grid.Col xs={12} lg={6}>
            <h1>About</h1>
            <p>
              I have over 10 years experience designing and coding for the web.
              I'm currently a UI/UX designer at Texada Software, where I'm
              responsible for the design of their web and mobile apps. I've also
              had the opportunity to learn development in React and redesign the
              company's new branding.
            </p>
            <p>
              I enjoy solving interesting problems and collaborate with talented
              and passionate people. I place a lot of importance in good work
              ethic and continuous learning. I'm naturally organized, efficient,
              and can be obsessive about making designs pixel perfect.
            </p>
            <p>
              When I'm not designing, cooking or watching TV, I like to play the
              piano and the occasional video game, hiking, camping, or read
              about technology, science, politics, and philosophy. I'm
              originally from a small town in Quebec and currently live in
              Kitchener, Ontario.
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
                src="./images/home/resume-z-0.png"
                alt="resume preview"
                width="500"
                height="647"
              />
              <img
                src="./images/home/resume-z-1.png"
                alt="resume preview"
                width="500"
                height="647"
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
