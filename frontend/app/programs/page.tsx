import ProgramList from "../../components/ProgramList";
import styles from "../../styles/Programs.module.css";

export default function Programs() {
  return (
    <main>
      <h1 className={styles.heading}>My Programs</h1>
      <ProgramList />
    </main>
  );
}
