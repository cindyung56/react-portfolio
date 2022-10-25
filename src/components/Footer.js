import React, { useState } from "react";


export default function Footer(){
    const mistyrose = "#f7e5e4";
    const blackshadow = "#bbacaf";
    const lightred = "#ffd2cf";
    const melon = "#f6acad";
  
    const styles = {
      footer: {
        background: melon,
        color: "white",
        width: "100%",
        position: 'absolute',
        bottom: 0,
        padding: '5px',
        textAlign: 'center',
      },
    };


    return <footer style={styles.footer}>this is a footer</footer>
}