import React from "react";
import Container from "../PortfolioContainer";

export default function Home() {
  const mistyrose = "#f7e5e4";
  const blackshadow = "#bbacaf";
  const lightred = "#ffd2cf";

  const styles = {
    aboutBody: {
      background: lightred,
    },
    img: {
        objectFit: 'contain',
        height: '300px',
        maxWidth: '100%',
        height: 'auto',
        margin: '0 auto',
    },
    h2: {
        background: blackshadow,
        color: 'white',
        border: '2px solid white',
        textAlign: 'center',
        fontSize: '200%',
        fontWeight: 'bolder',
    }
  };

  return (
    <section style={styles.aboutBody} className="mx-5 p-3 row">
      <div className="profile-img col-4">
        <img style={styles.img} src="https://i.kym-cdn.com/entries/icons/original/000/027/475/Screen_Shot_2018-10-25_at_11.02.15_AM.png"></img>
      </div>
      <div className="about-me col-8">
        <h2 style={styles.h2}>About Me</h2>
      </div>
    </section>
  );
}
