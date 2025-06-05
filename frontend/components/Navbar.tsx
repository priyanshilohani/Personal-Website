import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/programs">Programs</Link>
      <Link href="/research">Research Papers</Link>
      <a href="https://github.com/priyanshilohani" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      <a href="https://www.linkedin.com/in/priyanshi-lohani-566635249/" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
    </nav>
  );
};

export default Navbar;
