import React from "react";

export default function Home() {
  const mistyrose = "#f7e5e4";
  const blackshadow = "#bbacaf";
  const lightred = "#ffd2cf";

  const styles = {
    aboutBody: {
      background: lightred,
    },
  };

  return (
    <div style={styles.aboutBody} className="mx-5">
      <h2>About Me</h2>
    </div>
  );
}
