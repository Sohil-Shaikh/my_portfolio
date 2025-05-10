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
      category: "Frontend",
      items: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "Redux", level: 85 }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Python", level: 95 },
        { name: "Node.js", level: 85 },
        { name: "Django", level: 90 },
        { name: "SQL", level: 75 }
      ]
    },
    {
      category: "Tools & Others",
      items: [
        { name: "Git", level: 90 },
        { name: "VS Code", level: 80 },
        { name: "AWS", level: 70 },
        { name: "API", level: 85 }
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
                      <span className="skill-percentage">{skill.level}%</span>
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