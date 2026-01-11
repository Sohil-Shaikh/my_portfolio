import { motion } from 'framer-motion';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/About.scss';
import profileImg from "../assets/profile.png"

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <motion.div 
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="about-container">
        <motion.div 
          className="about-header"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>About Me</h2>
          <div className="header-line"></div>
        </motion.div>

        <div className="about-content">
          <div className="about-text-container" data-aos="fade-right">
            <div className="profile-image">
              <img src="/src/assets/about.jpeg" alt="Profile" />
              <div className="image-overlay"></div>
            </div>
            <div className="about-text">
              <h3>Hello! I'm <span className="highlight">Sohil</span></h3>
              <h4>Full Stack Developer</h4>
              <p>
                A passionate full-stack developer with a keen interest in creating 
                beautiful and functional web applications. I specialize in building 
                responsive and user-friendly applications that solve real-world problems.
              </p>
              <p>
                My journey in programming started with a curiosity about how websites 
                work, and that curiosity has grown into a full-fledged passion for 
                web development. I love learning new technologies and solving complex 
                problems through clean and efficient code.
              </p>
              {/* <div className="interests">
                <h4>My Interests</h4>
                <ul>
                  <li>Web Development</li>
                  <li>Backend Development</li>
                  <li>Mobile App Development</li>
                  <li>Cloud Computing</li>
                  <li>Open Source</li>
                </ul>
              </div>
              <div className="tech-stack">
                <h4>Technologies I Love</h4>
                <div className="tech-tags">
                  <span>Python</span>
                  <span>React</span>
                  <span>SQL</span>
                  <span>JavaScript</span>
                  <span>HTML/CSS</span>
                  <span>AWS</span>
                  <span>Django</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About; 