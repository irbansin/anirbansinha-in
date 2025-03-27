import styles from "./Projects.module.scss";
import { useState } from "react";

function Projects() {
  const [ProjectsList, setProjectsList] = useState([]);

  return (
    <div>
      <h1>Projects</h1>
      <p>This is a placeholder for the projects page.</p>
      {ProjectsList.map((project) => (
        <div key={project.id} className={styles.project}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}
export default Projects;
