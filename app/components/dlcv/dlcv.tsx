import "./dlcv.sass"

const DownloadCV = () => {
  return (
    <div className="cv-container">
      <a href="/Mistral.Antoine.CV.pdf" download="Mistral.Antoine.CV.pdf" className="cv-button">
        Télécharger mon CV
      </a>
    </div>
  );
};

export default DownloadCV;
