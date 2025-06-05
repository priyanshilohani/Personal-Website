"use client";

import styles from "../styles/Programs.module.css";

// Program Data Structure
interface Program {
  title: string;
  organization: string;
  image: string;
  description: string[];
}

// Program Data
const programs: Program[] = [
  {
    title: "Flipkart Girls Wanna Code 2025",
    organization: "Flipkart",
    image: "/images/flipkart.webp",
    description: [
      "Selected participant in Flipkart's prestigious program for women in tech.",
      "Covered advanced modules: Data Structures, Algorithms, Greedy Algorithms, Dynamic Programming.",
      "Received mentorship from senior engineers and industry professionals.",
    ],
  },
];

const ProgramList: React.FC = () => {
  return (
    <div className={styles.container}>

      {/* Program Card Display */}
      <div className={styles.programGrid}>
        {programs.map((program, index) => (
          <div key={index} className={styles.programCard}>
            <img
              src={program.image}
              alt={program.title}
              className={styles.programImage}
            />
            <div className={styles.programContent}>
              <h3>{program.title}</h3>
              <h4>{program.organization}</h4>
              <ul>
                {program.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramList;
