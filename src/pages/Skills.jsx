import { motion } from 'framer-motion';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Skills.scss';

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const skills = [
  
    {
      category: "Backend",
      items: [
        { name: "Python", level: 100 },
        { name: "FastAPI", level: 100 },
        { name: "Django", level: 100 },
        { name: "SQL", level: 100 }
      ]
    },
    {
      category: "Frontend",
      items: [
        { name: "React", level: 100 },
        { name: "JavaScript", level: 100 },
        { name: "HTML/CSS", level: 100 },
        { name: "Redux", level: 100 }
      ]
    },
    {
      category: "Tools & Others",
      items: [
        { name: "Git", level: 100 },
        { name: "VS Code", level: 100 },
        { name: "AWS", level: 100 },
        { name: "API", level: 100 }
      ]
    }
  ];

  return (
    <motion.div 
      className="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="skills-container">
        <motion.div 
          className="skills-header"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>My Skills</h2>
          <div className="header-line"></div>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skillCategory, index) => (
            <div 
              className="skill-category" 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3>{skillCategory.category}</h3>
              <div className="skills-list">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div className="skill-item" key={skillIndex}>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      {/* <span className="skill-percentage">{skill.level}%</span> */}
                    </div>
                    <div className="progress-bar">
                      <motion.div 
                        className="progress"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills; 