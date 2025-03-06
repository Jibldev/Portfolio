import "./dlcv.sass"

const DownloadCV = () => {
  return (
    <div className="cv-container">
      <a href="/cv.pdf" download="Mistral.AntoineCV.pdf" className="cv-button">
        Télécharger mon CV
      </a>
    </div>
  );
};

export default DownloadCV;
