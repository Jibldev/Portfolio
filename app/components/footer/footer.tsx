import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./footer.sass"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/Jibldev" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/antoine-mistral-3683902b2/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  )
};

export default Footer