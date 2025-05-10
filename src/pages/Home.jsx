import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import "../styles/Home.scss";

const Home = () => {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="hero">
        <div className="content-left">
          <motion.h1
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I'm <span className="highlight">Sohil Shaikh</span>
          </motion.h1>
          <h2>Full Stack Developer</h2>
          <p>Crafting digital experiences through elegant code and creative solutions</p>

          <div className="cta-buttons">
            <a href="/contact" className="btn primary">Get in Touch</a>
            {/* <a href="/projects" className="btn secondary">View Projects</a> */}
          </div>

          {/* <div className="social-links">
            <a href="https://github.com/Sohil-Shaikh" target="_blank" rel="noopener noreferrer" className="social-link">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/sohil-shaikh-977736254/" target="_blank" rel="noopener noreferrer" className="social-link">
              LinkedIn
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
              Twitter
            </a>
          </div> */}
          <div className="social-links">
            <a href="https://github.com/Sohil-Shaikh" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/sohil-shaikh-977736254/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>

        <div className="content-right">
          <div className="hero-image">
            <img className='profile-img' src="/src/assets/profile.png" alt="Sohil Shaikh" />
            <div className="background-shape"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home; 