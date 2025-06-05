"use client";

import { useEffect, useState } from "react";
import styles from "../styles/Projects.module.css"; // reuse same styling

interface ResearchPaper {
  title: string;
  abstract: string;
  authors: string[];
  link?: string;
}

const ResearchList: React.FC = () => {
  const [papers, setPapers] = useState<ResearchPaper[]>([]);

  useEffect(() => {
    const fetchPapers = async () => {
      try {
        const res = await fetch("https://tsx-unstop-python-mrj1.onrender.com/api/research");
        const data = await res.json();
        setPapers(data);
      } catch (err) {
        console.error("Failed to fetch research papers", err);
      }
    };
    fetchPapers();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Research Papers</h2>
      <div className={styles.projectGrid}>
        {papers.map((paper, idx) => (
          <div key={idx} className={styles.projectCard}>
            <h4>{paper.title}</h4>
            <p><strong>Authors:</strong> {paper.authors.join(", ")}</p>
            <p>{paper.abstract}</p>
            {paper.link && (
              <p>
                🔗{" "}
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  Read Paper
                </a>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchList;
