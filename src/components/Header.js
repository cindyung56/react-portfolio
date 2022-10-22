import React, { useState } from "react";

export default function Header() {
  const mistyrose = "#f7e5e4";
  const blackshadow = "#bbacaf";
  const lightred = "#ffd2cf";
  const melon = "#f6acad";

  const styles = {
    header: {
      background: melon,
      color: "white",
      width: "100%",
    },
  };

  return <header style={styles.header}>Cindy Ung</header>;
}
