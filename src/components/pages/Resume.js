import React, { useState } from "react";

export default function Resume() {
  return (
    <div className="resume text-center">
      <section className="resume-section">
        <h3 className="download-resume">
          Download my resume{" "}
          <a href="https://drive.google.com/file/d/1qEuDgETIKcalGnUMJHNgMxzyZkwGtJec/view?usp=sharing">
            here
          </a>
          !
        </h3>

        <ul>
          <u><b>Front-End Skills</b></u>
          <li>HTML & CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Bootstrap</li>
          <li>React.js</li>
          <li>Handlebars</li>
        </ul>
        <ul>
          <u><b>Back-End Skills</b></u>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MySQL & sequelize</li>
          <li>MongoDB & mongoose</li>
          <li>React</li>
          <li>Python</li>
          <li>Java</li>
        </ul>
      </section>
    </div>
  );
}
