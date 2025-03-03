import Header from "../components/header/header";
import Footer from "../components/footer/footer"

const projects = [
  {
    id: 1,
    title: "Projet 1",
    description: "Description du projet 1",
    image: "/images/projet1.png",
    github: "https://github.com/mon-projet-1",
    live: "https://mon-projet-1.vercel.app"
  },
  {
    id: 2,
    title: "Projet 2",
    description: "Description du projet 2",
    image: "/images/projet2.png",
    github: "https://github.com/mon-projet-2",
    live: "https://mon-projet-2.vercel.app"
  }
];

const Projects = () => {
  return (
    <>
      <Header />
      <div className="projects">
        <h1>Mes Projets</h1>
        <div className="projects-list">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} />
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.github} target="_blank">GitHub</a>
              <a href={project.live} target="_blank">Voir en ligne</a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
