import projects from "../../data/projects";
import type { Project } from "../../data/projects";
import "../projectcard/projectcard.sass"


const Projects = () => {
  return (
    <section className="projects">
      <h2>Mes projets</h2>
      <div className="project-list">
        {projects.map((project: Project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Voir le projet
              </a>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                Code GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
