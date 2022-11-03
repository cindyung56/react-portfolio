import React from "react";
import Project from "../Project";
import iChooseYou from "../../assets/i-choose-you.jpg";
import resumeCreator from "../../assets/resume-creator.jpg";
import foodAdventure from "../../assets/food-adventure.jpg";
import techBlog from "../../assets/tech-blog.jpg";
import weatherDashboard from "../../assets/weather-dashboard.jpg";
import noteTaker from "../../assets/note-taker.png";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h1 className="portfolio-title text-center mb-3">My Projects</h1>
      <section className="mx-2 row d-flex flex-wrap justify-content-evenly">
        <Project
          projectTitle="I Choose You!"
          projectLink="https://ichooseyou.herokuapp.com"
          gitHubLink="https://github.com/a-riveragonzalez/i-choose-you"
          projectImg={iChooseYou}
        />
        <Project
          projectTitle="Resume Creator"
          projectLink="https://fierce-ravine-29010.herokuapp.com/"
          gitHubLink="https://github.com/cindyung56/resume-creator"
          projectImg={resumeCreator}
        />
        <Project
          projectTitle="Food Adventure"
          projectLink="https://cindyung56.github.io/food-adventure/"
          gitHubLink="https://github.com/cindyung56/food-adventure"
          projectImg={foodAdventure}
        />
        <Project
          projectTitle="The Tech Blog"
          projectLink="https://salty-earth-22984.herokuapp.com/"
          gitHubLink="https://github.com/cindyung56/tech-blog"
          projectImg={techBlog}
        />
        <Project
          projectTitle="Weather Dashboard"
          projectLink="https://cindyung56.github.io/weather-dashboard/"
          gitHubLink="https://github.com/cindyung56/weather-dashboard"
          projectImg={weatherDashboard}
        />
        <Project
          projectTitle="Note Taker"
          projectLink="https://immense-crag-90629.herokuapp.com/"
          gitHubLink="https://github.com/cindyung56/note-taker"
          projectImg={noteTaker}
        />
      </section>
    </div>
  );
}
