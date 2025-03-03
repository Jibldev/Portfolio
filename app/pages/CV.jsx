import Header from "../components/header/header";
import Footer from "../components/footer/footer"

const CV = () => {
  return (
    <>
    <Header />
    <div className="cv">
      <h1>Mon CV</h1>
      <p>Téléchargez mon CV en cliquant sur le bouton ci-dessous :</p>
      <a href="/cv.pdf" download="Mon_CV.pdf" className="download-btn">Télécharger le CV</a>
    </div>
    <Footer />
    </>
  );
};

export default CV;
