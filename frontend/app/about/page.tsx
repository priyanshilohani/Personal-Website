import styles from "../../styles/About.module.css";
import Image from "next/image";

export default function About() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <Image
          src="/images/profile.jpg"
          alt="Profile Picture"
          width={300}
          height={300}
          className={styles.profileImage}
        />
        <div className={styles.bio}>
          <h1>Hi, I am Priyanshi Lohani 👋</h1>
          <p>
            I am a passionate student specializing in <b>Artificial Intelligence</b>, <b>Web Development</b>, <b>Machine learning</b>, and <b>Deep Learning</b>.
            I love solving complex problems and building innovative solutions that make a difference.
          </p>
          <p>
            Currently pursuing a <b>B.Tech in Computer Science and Artificial Intelligence</b> at Banasthali Vidyapith, I have hands-on experience with cutting-edge technologies
            and frameworks like <b>Next.js</b>, <b>Python</b>, <b>TensorFlow</b>, <b>LangChain</b>, <b>Flask</b>.
          </p>
          <a href="https://tsx-unstop-python-mrj1.onrender.com/api/resume" download className={styles.resumeBtn}>
            📄 Download Resume
          </a>
        </div>
      </div>

      {/* Skills Section */}
      <h2 className={styles.sectionTitle}>Technical Skills and Study Projects</h2>
      <div className={styles.skillsGrid}>
        {[
          "C/C++",
          "Python",
          "Java",
          "Next.js",
          "React.js",
          "Artificial Intelligence",
          "Machine Learning",
          "Deep Learning",
          "Neural Networks",
          "Flask",
          "TensorFlow",
          "MongoDB",
          "SQL",
          "LangChain",
          "JWT",
          "Computer Vision",
          "Image Processing",
        ].map((skill, index) => (
          <div key={index} className={styles.skillCard}>
            {skill}
          </div>
        ))}
      </div>

      {/* More About Me */}
      <h2 className={styles.sectionTitle}>More About Me</h2>
      <p className={styles.aboutDetails}>
        🌟 <b>Problem Solver</b>: I thrive in solving real-world problems and creating intuitive user experiences.  
        📚 <b>Lifelong Learner</b>: I stay updated with the latest trends in AI and Web Development.  
        🤝 <b>Collaborator</b>: I enjoy working with diverse teams and contributing to open-source projects.  
      </p>

      {/* Contact Links */}
      <div className={styles.contactSection}>
        <h2>Let us Connect!</h2>
        <div className={styles.contactLinks}>
          <a
            href="https://github.com/priyanshilohani"
            target="_blank"
            rel="noopener noreferrer"
          >
            💻 GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/priyanshi-lohani-566635249/"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 LinkedIn
          </a>
          <a href="mailto:lohanipriyanshi@gmail.com">📧 Email Me</a>
        </div>
      </div>
    </div>
  );
}
