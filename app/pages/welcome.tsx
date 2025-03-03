import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import "app/styles/welcome.sass"

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="headerpic">
          < Header />
          <img src="app/images/background.jpg" alt="Background" className="background-pic" />
        </div>
        <div className="about">
          <img src="app/images/profil.jpg" alt="Photo de profil" className="profile-pic" />
          <h1>Bienvenue sur mon portfolio</h1>
          <p>Je suis Mistral Antoine, développeur web passionné. Découvrez mes projets et mon parcours.</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
