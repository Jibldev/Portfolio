export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Nina Carducci",
    description: "Optimisation du site, de son SEO et de son accessibilité",
    image: "app/public/Opti.png",
    liveUrl: "https://mon-projet-1.vercel.app",
    githubUrl: "https://github.com/Jibldev/Projet-4",
  },
  {
    id: 2,
    title: "Rental App Master",
    description: "Création d'un site WEB de location immobilière avec React",
    image: "app/public/location.png",
    liveUrl: "https://mon-projet-2.vercel.app",
    githubUrl: "https://github.com/Jibldev/rental-app-master",
  },
  {
    id: 3,
    title: "Mon vieux grimoire",
    description: "Création d'un backend d'un site de notation de livres",
    image: "app/public/livres.png",
    liveUrl: "https://mon-projet-3.vercel.app",
    githubUrl: "https://github.com/Jibldev/Projet-6-Backend",
  },
];

export default projects;
