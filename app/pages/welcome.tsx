import Footer from "../components/footer/footer";
import Banner from "../components/banner/banner";
import DownloadCV from "~/components/dlcv/dlcv";
import Projects from "~/components/projectcard/projectcard";
import "app/styles/welcome.sass"

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="headerpic">
          <img src="/background.jpg" alt="Background" className="background-pic" />
        </div>
        <div className="about">
          <img src="/profil.jpg" alt="Photo de profil" className="profile-pic" />
          <div className="txt">
            <h1>Bienvenue sur mon portfolio</h1>
            <p>Je suis Mistral Antoine, développeur web passionné. Découvrez mes projets et mon parcours.</p>
            <p>Que ce soit pour améliorer un site web en place ou développer de nouvelles fonctionnalités, je suis à votre disposition pour vous proposer des solutions techniques adaptées.</p>
          </div>
        </div>
        <div className="competences">
          <Banner
            backgroundImage="/banner.jpg"
            text="Mes compétences"
          />
          <div className="details">
            <div className="front">
              <img src="/html5.png" alt="HTML" className="front-pic"></img>
              <br></br>
              <h2>Front-End</h2>
              <p><b>Langages :</b> Javascript, Typescript</p>
              <p><b>Frameworks et Bibliothèques :</b> React</p>
              <p><b>Intégration Web :</b> HTML5, CSS3 (Flexbox, Grid, animations CSS)</p>
            </div>
            <div className="back">
              <img src="/backend.jpg" alt="Backend" className="back-pic"></img>
              <h2>Back-end</h2>
              <p><b>Langages et Frameworks :</b> Node.js(Express.js)</p>
              <p><b>Base de données :</b> MongoDB</p>
              <p><b>API :</b> Création et consommation d'API REST</p>
            </div>
          </div>
        </div>
        <div className="CVbutton">
          <DownloadCV />
        </div>
        <div className="projects">
          <Banner
            backgroundImage="/banner.jpg"
            text="Mes projets"
          />
          <Projects />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
