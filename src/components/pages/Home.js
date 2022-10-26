import React from "react";
import Container from "../PortfolioContainer";
import profilePic from "../../assets/profile-pic.jpg";

export default function Home() {
  const mistyrose = "#f7e5e4";
  const melon = "#f6acad";
  const blackshadow = "#bbacaf";
  const lightred = "#ffd2cf";

  const styles = {
    aboutBody: {
      background: lightred,
      margin: "0 50px 30px",
      borderRadius: "10px",
      zIndex: '1',
      width: "60%",
    },
    externalLinks: {
      background: "white",
    },
    profileImg: {
      width: "50%",
      margin: "0 auto",
      boxShadow: `3px 3px 0.9em ${melon}`,
      position: 'absolute',
      zIndex: '0.9',
    },
    img: {
      objectFit: "contain",
      maxWidth: "100%",
    },
    h2: {
      background: blackshadow,
      color: "white",
      border: "2px solid white",
      textAlign: "center",
      fontSize: "200%",
      fontWeight: "bolder",
      borderRadius: "10px",
      padding: "5px 0",
    },
    i: {
      color: blackshadow,
      fontSize: "200%",
    },
  };

  return (
    <div id="homeBody">

      {/* <section
        className="profile-img home-section"
        style={styles.profileImg}
      >
        <img style={styles.img} src={profilePic}></img>
      </section>

      <section style={styles.aboutBody} className="p-3 home-section ">
        <div className="about-me">
          <h2 style={styles.h2}>About Me</h2>
          <p>
            Hello! I'm Cindy! I'm a full stack developer with a focus in
            front-end design and development. I namely use HTML, CSS,
            Javascript, Python, node.js, express.js, and more! I graduated from
            UC Irvine with a Bachelor's degree in Informatics, specializing in
            Human Computer Interaction and the Full-Stack Coding Bootcamp from
            UCLA Extension with a certificate in full-stack development. I
            currently work as a Coding Coach at theCoderSchool Pasadena, where I
            teach kids and adults how to code in basic Python, Java, and
            Javascript.
          </p>
          <p>Fun facts about myself:</p>
          <ul>
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
        </div>
      </section>

      <section style={styles.externalLinks} className="p-3 row text-center">
        <i className="bi bi-linkedin" style={styles.i}></i>
      </section> */}
    </div>
  );
}
