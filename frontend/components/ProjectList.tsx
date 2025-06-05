"use client";

import { useState, useEffect } from "react";
import styles from "../styles/Projects.module.css";

interface Project {
  title: string;
  techStack: string;
  description: string[];
  link?: string;
}

interface ProjectCategory {
  domain: string;
  items: Project[];
}

const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState<ProjectCategory[]>([]);
  const [activeDomain, setActiveDomain] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/projects");
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch project data", error);
      }
    };
    fetchProjects();
  }, []);

  const toggleDomain = (domain: string) => {
    setActiveDomain(activeDomain === domain ? null : domain);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Explore Projects by Domain</h2>

      <div className={styles.filterContainer}>
        {projects.map((category) => (
          <button
            key={category.domain}
            onClick={() => toggleDomain(category.domain)}
            className={`${styles.filterButton} ${
              activeDomain === category.domain ? styles.active : ""
            }`}
          >
            {category.domain}
          </button>
        ))}
      </div>

      <div className={styles.projectContainer}>
        {projects
          .filter(
            (category) => !activeDomain || category.domain === activeDomain
          )
          .map((category) => (
            <div key={category.domain}>
              <h3 className={styles.domainTitle}>{category.domain}</h3>
              <div className={styles.projectGrid}>
                {category.items.map((project, idx) => (
                  <div key={idx} className={styles.projectCard}>
                    <h4>{project.title} ({project.techStack})</h4>
                    {project.description.map((point, i) => (
                      <p key={i}>• {point}</p>
                    ))}
                    {project.link && (
                      <p>
                        🔗{" "}
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.projectLink}
                        >
                          GitHub Repository
                        </a>
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProjectList;
