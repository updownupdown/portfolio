import React, { useState } from "react";
import { Link as LinkIcon } from "./icons/Link";
import { Gallery as GalleryIcon } from "./icons/Gallery";
import {
  freelanceWebImages,
  photographyImages,
  texadaRebrandImages,
  texadaWebImages,
  viewImages,
} from "./projectImages";
import clsx from "clsx";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const thumbBaseUrl = "./images/thumbs/";

interface IProject {
  title: string;
  thumb: any;
  thumbShadow?: boolean;
  url?: string;
  images?: any;
  children: React.ReactNode;
}

const Project = ({
  title,
  children,
  images,
  url,
  thumb,
  thumbShadow,
}: IProject) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="project">
      <div className="project__text">
        <h3 className="project__title">{title}</h3>
        {children}
      </div>

      <div
        className={clsx(
          "project__thumb",
          thumbShadow && "project__thumb--shadow"
        )}
        onClick={() => {
          if (url) {
            window.open(url, "_blank");
          }
          if (images) {
            setIsOpen(true);
          }
        }}
      >
        <div className="project__thumb__image">
          <img src={thumbBaseUrl + thumb} alt={`${title} project thumbnail`} />
        </div>

        <div className="project__thumb__link">
          {url ? <LinkIcon /> : <GalleryIcon />}
          <span>{url ? "Open project" : "View gallery"}</span>
        </div>

        {images && (
          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            slides={images}
            carousel={{
              padding: "60px",
            }}
            animation={{ fade: 100, swipe: 0 }}
          />
        )}
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <>
      <Project
        title="Intellijoint VIEW"
        thumb="intellijoint-view.png"
        thumbShadow
        images={viewImages}
      >
        <p>
          I'm currently a Sr. UI/UX Designer at Intellijoint Surgical, where I
          lead the product design for VIEW, a pre-op planning software.
        </p>
        <p>
          Being part of a small team allows me to maintain a holistic approach
          to design, where I can fully own the the design of a product, and
          interact with all team members and play a critical part in defining
          requirements, ideation and prototyping, design, and development.
        </p>
      </Project>
      <Project
        title="Texada Web App"
        thumb="texada-web-app.png"
        thumbShadow
        images={texadaWebImages}
      >
        <p>
          I'm driven to organize, beautify, and optimize, and this naturally
          applies to my work. I've lead multiple projects that involved
          redesigning or drastically unify and improve the design of a product,
          or suite of products.
        </p>
        <p>
          In design like in development, I take time to unify the interface and
          user experience, and create a solid foundation that can be safely
          built upon in the long term, both for the sake of the user, and the
          design and development team.
        </p>
      </Project>
      <Project
        title="Texada Rebrand"
        thumb="texada-rebrand.png"
        images={texadaRebrandImages}
      >
        <p>
          Texada has used several logo designs over the years, but never had a
          coherent or consistent style guide or branding strategy. The existing
          logo looked outdated, was difficult to read, and the colours and
          symbol did not easily lend themselves to be used across product
          designs and marketing material.
        </p>
        <p>
          After discussing with key stakeholders, I suggested a rebranding
          effort that would modernize the logo and establish a clear style guide
          while taking into consideration how the new branding would be
          implemented across our products, print ads, tradeshow banners, etc.
        </p>
      </Project>
      <Project
        title="Piano Chords"
        thumb="piano-chords.png"
        thumbShadow
        url="https://updownupdown.github.io/chords/"
      >
        <p>
          In order to help me learn music theory, I wanted to bring together
          various interactive elements that would interact with each other: a
          playable piano keyboard, the music staff, the circle of fifths, keys,
          chords, etc.
        </p>
        <p>
          I went through multiple iterations of the design as I learned how each
          individual piece worked, how it could be made interactive, and how it
          could in turn interact with other pieces. It became a fun challenge to
          display how much information as possible, while still being intuitive
          and simple to use.
        </p>
      </Project>
      <Project
        title="Photography"
        thumb="photography.png"
        images={photographyImages}
      >
        <p>
          While I no longer am practicing the hobby, I found photography to be a
          great drive for exploration, and it brought me a deep appreciation for
          hidden beauty. It's also a great way to experiment with universal
          design concepts like contrast, colour, focus, composition, balance,
          etc.
        </p>
        <p>
          The photos in this gallery were taken during a one month solo
          backpacking trip in Japan in 2008.
        </p>
      </Project>
      <Project
        title="Freelance Web Design"
        thumb="websites.png"
        thumbShadow
        images={freelanceWebImages}
      >
        <p>
          During college and until I started focus on UI/UX design, I worked as
          a freelance web designer and developer. Most projects were marketing
          websites for local businesses, where I was usually involved in all
          stages of the project, from project management to design, development,
          and launch. I would also occasionally be involved in branding and
          print design.
        </p>

        <p>
          Over time, I maintained a continually improving theme for WordPress,
          made up of custom modular panels that could be refined and reused
          across projects. This was done to increase the quality and efficiency
          of development, while still allowing enough flexibily to tailor each
          design to the client's needs.
        </p>
      </Project>
      <Project
        title="Clockworks"
        thumb="clockworks.png"
        thumbShadow
        url="https://updownupdown.github.io/clockworks/"
      >
        <p>
          After building a pendulum clock kit made from laser cut wood, I
          decided to research mechanical clocks, escapment mechanisms, and gear
          ratios.
        </p>
        <p>
          I wanted to develop a playground where I could experiment with
          different configurations of gear trains, and ultimately have the
          ability to build a simulated mechanical clock from scratch.
        </p>
      </Project>
      <Project
        title="Weather Dashboard"
        thumb="weather.png"
        thumbShadow
        url="https://weather.jamescarmichael.ca/"
      >
        <p>
          I'm very particular about how, and how much, information is displayed.
          This often comes up when trying to look up weather forecasts.
        </p>
        <p>
          I wanted to experiment with accessing the OpenWeather API and
          displaying a large amount of information in an easy to digest way.
          This project was also a great opportunity to learn how to set up a
          backend and basic API.
        </p>
      </Project>
      <Project
        title="World Quiz"
        thumb="world-quiz.png"
        thumbShadow
        url="https://updownupdown.github.io/world-quiz/"
      >
        <p>
          The main goal of this project was to recreate the functionality of an
          old DOS game I played in high-school, which would quiz you on the
          location and capital of every country in the world.
        </p>
        <p>
          The biggest challenge was to generate an interactive 3D globe that
          supported user interaction along with highlighting countries
          independently of each other. Once that was achieved, I started adding
          multiple game modes: type all the country names, guess the capital,
          guess the country by flag, and find the country.
        </p>
      </Project>
      <Project
        title="Learn Kana"
        thumb="learn-kana.png"
        thumbShadow
        url="https://updownupdown.github.io/learn-japanese/"
      >
        <p>
          After several discussions about languages with a Japanese friend, I
          wanted to try learning the Hiragana and Katakana syllabaries, and
          wasn't satisfied with the existing tools available.
        </p>
        <p>
          I thought that creating a web app would be a good opportunity to help
          me memorize the scripts and understand how they're organized, and
          along the way, build some simple, interactive learning tools as well
          as creating a small dictionary of phrases.
        </p>
      </Project>
    </>
  );
};
