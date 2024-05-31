/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/image.png";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "GlowCare - A Skincare Website",
    description:
      "Collaborated with my group mates to create a website for our Full Stack Web Development Course. This project is created using MERN Stack",
    url: "https://github.com/mahrukh-dev/glow-care-mern",
  },
  {
    title: "Pet Planet",
    description:
      "Created a mobile application for pet lovers using Flutter. This app is designed to help pet owners find the best pet care services in their area.",
    url: "https://github.com/javeeriiaaa/PetPlanet_App",
  },
  {
    title: "Next Knock",
    description:
      "Collaborated with a team to create an app for hostel students to find hostel rooms. This app is created using Flutter. I worked on creating multiple screens and integrating the backend.",
    url: "https://github.com/devupix1/next_knock_app",
  },
  {
    title: "Hand Gesture Controlled Game",
    description:
      "Created a game with my group mates using Python, MediaPipe, and OpenCV. This game is controlled using hand gestures.",
    url: "https://github.com/mahrukh-dev/HandGestureCarGame",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
