import React from "react";
import profilePic from "../../assets/profile-pic.jpg";

export default function Home() {
  return (
    <div className="home">
      <div className="home-body row">
        <div className="col-lg-8 col-md-12">
          <section className="title-section ">
            <h1 className="job-title">Full-Stack Developer</h1>
          </section>
          <section className="description-section">
            <p>
              Hello! I'm Cindy Ung! I'm a full-stack developer with experience
              in UI/UX Design. I mostly use HTML, CSS, Javascript, Python,
              node.js, express.js, and more! I graduated from UC Irvine with a
              Bachelor's degree in Informatics, specializing in Human Computer
              Interaction. I also graduated from the Full-Stack Coding Bootcamp
              from UCLA Extension with a certificate in full-stack development.
              I currently work as a Coding Coach at theCoderSchool Pasadena,
              where I teach aspiring programmers how to code in basic Python, Java,
              and Javascript.
            </p>
            <p>Fun facts about myself:</p>
            <ul>
              <li>
                I was crowned Back End Master & Most Likely to Inspire Future
                Coders in the bootcamp I attended.
              </li>
              <li>I can't ride a bicycle.</li>
              <li>
                I'm self-taught in Japanese and have been learning on my own for
                more than 10 years.
              </li>
              <li>
                My hobbies include crocheting, watching cat videos, and playing
                video games.
              </li>
              <li>My dream is to become a cat lady.</li>
            </ul>
          </section>
        </div>
        <section className="col-lg-4 col-md-12 img-section text-center mt-3">
          <img className="profile-img" src={profilePic}></img>
        </section>
      </div>

      <div className="skills-section text-center m-3">
        <i class="devicon-html5-plain-wordmark"></i>
        <i class="devicon-css3-plain-wordmark"></i>
        <i class="devicon-javascript-plain"></i>
        <i class="devicon-jquery-plain-wordmark"></i>
        <i class="devicon-mysql-plain-wordmark"></i>
        <i class="devicon-mongodb-plain"></i>
        <i class="devicon-npm-original-wordmark"></i>
        <i class="devicon-nodejs-plain-wordmark"></i>
        <i class="devicon-python-plain-wordmark"></i>
        <i class="devicon-java-plain-wordmark"></i>
        <i class="devicon-handlebars-plain-wordmark"></i>
        <i class="devicon-react-original-wordmark"></i>
        <i class="devicon-vscode-plain"></i>
      </div>
    </div>
  );
}
