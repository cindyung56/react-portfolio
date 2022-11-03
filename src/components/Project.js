import React from "react";

export default function Project({ projectTitle, projectLink, gitHubLink, projectImg }) {
  const blackshadow = "#bbacaf";

  const styles = {
    projectCard: {
      backgroundImage: `url(${projectImg})`,
      border: "1px solid black",
      borderRadius: "10px",
      height: "450px",
      width: "450px",
      backgroundSize: "100% 100%",
      marginBottom: "30px",
      padding: 0,
    },
    projectTitleStyle: {
      backgroundColor: blackshadow,
      fontSize: '220%',
      color: "white",
      width: "100%",
      textAlign: "left",
      padding: '5px 10px',
      borderRadius: "10px 10px 0 0",
    },
  };

  return (
    <div className="project-card" style={styles.projectCard}>
      <h1 className="project-title" style={styles.projectTitleStyle}>
        {projectTitle}
        <a className="project-link" href={projectLink}>
          <i class="bi bi-link-45deg"></i>
        </a>
        <a className="project-link" href={gitHubLink}>
        <i class="bi bi-github"></i>
        </a>
      </h1>
    </div>
  );
}
