import React from "react";

export default function Footer(){
  const styles = {
    i: {
      marginLeft: '20px',
    }
  }

    return (<footer>
      <a href="https://www.linkedin.com/in/cindyung56/"><i className="bi bi-linkedin"></i></a>
      <a href="https://github.com/cindyung56"><i className="bi bi-github" style={styles.i}></i></a>
    </footer>)
}