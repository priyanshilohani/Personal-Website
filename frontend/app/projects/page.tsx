import ProjectList from "../../components/ProjectList";
import styles from "../../styles/Projects.module.css";

export default function Projects() {
  return (
    <main>
      <h1 className={styles.heading}>My Projects</h1>
      <ProjectList />
    </main>
  );
}
