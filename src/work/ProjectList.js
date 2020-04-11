import React from "react";

export const ProjectList = [
  {
    component: "TexadaWeb",
    link: "/texada/",
    image: "./images/thumbs/thumb-texada-web.png",
    title: "Texada Web App",
    description:
      "Showcase of some screens from the completely redesigned Texada web app.",
  },
  {
    component: "Rebrand",
    link: "/rebrand/",
    image: "./images/thumbs/thumb-rebrand.png",
    title: "Texada Rebrand",
    description:
      "Rebranding of Texada, including a new logo, style guide, marketing material, email signature, etc.",
  },
  {
    component: "Components",
    link: "/components/",
    image: "./images/thumbs/thumb-components.png",
    title: "Texada Component Library",
    description:
      "A preview of the redesigned and consolidated component library used across two web apps.",
  },
  {
    component: "Websites",
    link: "/websites/",
    title: "Freelance Website Design",
    description:
      "Custom WordPress websites designed during my freelance years.",
    content: (
      <div className="thumb-websites">
        <img
          className="thumb-spacer"
          src="./images/thumbs/thumb-spacer.png"
          alt="spacer"
        />
        <div className="thumb-websites-desktop-screen">
          <img
            src="./images/thumbs/websites-desktop-screen.png"
            alt="Freelance websites"
          />
        </div>
        <img
          className="thumb-websites-desktop-device"
          src="./images/thumbs/websites-desktop-device.png"
          alt="Freelance websites"
        />
        <div className="thumb-websites-mobile-screen">
          <img
            src="./images/thumbs/websites-mobile-screen.png"
            alt="Freelance websites"
          />
        </div>
        <img
          className="thumb-websites-mobile-device"
          src="./images/thumbs/websites-mobile-device.png"
          alt="Freelance websites"
        />
      </div>
    ),
  },
  {
    component: "Photography",
    link: "/photography/",
    title: "Photography",
    description:
      "Photos taken with during a one month solo backpacking trip in Japan in 2008.",
    content: (
      <div className="thumb-photos">
        <img
          className="thumb-spacer"
          src="./images/thumbs/thumb-spacer.png"
          alt="spacer"
        />
        <img src="./images/thumbs/photo-z-1.png" alt="photography" />
        <img src="./images/thumbs/photo-z-2.png" alt="photography" />
        <img src="./images/thumbs/photo-z-3.png" alt="photography" />
        <img src="./images/thumbs/photo-z-4.png" alt="photography" />
        <img src="./images/thumbs/photo-z-5.png" alt="photography" />
        <img src="./images/thumbs/photo-z-6.png" alt="photography" />
      </div>
    ),
  },
  {
    component: "Loaders",
    link: "/loaders/",
    title: "Loading Animations",
    description: "Experiments with dot loader CSS animations.",
    content: (
      <div className="thumb-loaders">
        <img
          className="thumb-spacer"
          src="./images/thumbs/thumb-spacer.png"
          alt="spacer"
        />
        <img src="./images/thumbs/loader-z-1.png" alt="loader" />
        <img src="./images/thumbs/loader-z-2.png" alt="loader" />
        <img src="./images/thumbs/loader-z-3.png" alt="loader" />
        <img src="./images/thumbs/loader-z-4.png" alt="loader" />
        <img src="./images/thumbs/loader-z-5.png" alt="loader" />
      </div>
    ),
  },
];
