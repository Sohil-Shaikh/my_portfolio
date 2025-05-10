import { motion } from 'framer-motion';
import { useState } from 'react';
import '../styles/Resume.scss';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const resumeData = {
    details: [
      "Graduated with First Class Honors",
      "Specialized in Web Technologies and Software Engineering",
      "Led student web development club",
      "Completed internship at leading tech company"
    ],
    experience: [
      {
        title: "Frontend Development Intern",
        company: "Robowaves",
        period: "2024 - 2025",
        location: "Banglore, Karnataka",
        responsibilities: [
          "Assisted in developing front-end features using React.js",
          "Created responsive UI components and implemented user interactions",
          "Participated in daily stand-ups and sprint planning meetings",
          "Contributed to bug fixes and feature implementations"
        ]
      }
    ],
    education: [
      {
        degree: "Bachelor of Enigineering in Information Technology",
        institution: "Sant Gadge Baba Amravati University",
        period: "2020 - 2024",
        location: "Buldhana, Maharashtra",
        details: [
          "Graduated with First Class Honors",
          "CGPA : 8.2/10",
          "Led student web development club",
        ]
      },
      {
        degree: "Higher Secondary Education",
        institution: "DES Junior College",
        period: "2018 - 2020",
        location: "Buldhana, Maharashtra",
        details: [
          "Completed with distinction",
          "Focus on Mathematics and Computer Science",
          "Member of the Science Club"
        ]
      }
    ],
    skills: {
      technical: [
        { name: "Python", level: 95 },
        { name: "Django", level: 90 },
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 90 },
        { name: "SQL", level: 95 },
      ],
      soft: [
        "Leadership",
        "Problem Solving",
        "Communication",
        "Team Management",
        "Agile Methodology"
      ]
    }
  };

  return (
    <motion.div
      className="resume-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="resume-container">
        <div className="resume-header">
          <h2>My Resume</h2>
          <div className="resume-actions">
            <a
              href="/your-resume.pdf"
              download
              className="download-btn"
            >
              <i className="fas fa-download"></i>
              Download CV
            </a>
          </div>
        </div>

        <div className="resume-tabs">
          <button
            className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            <i className="fas fa-briefcase"></i>
            Experience
          </button>
          <button
            className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            <i className="fas fa-graduation-cap"></i>
            Education
          </button>
          <button
            className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            <i className="fas fa-code"></i>
            Skills
          </button>
        </div>

        <div className="resume-content">
          {activeTab === 'experience' && (
            <motion.div
              className="experience-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {resumeData.experience.map((exp, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h3>{exp.title}</h3>
                    <div className="company-info">
                      <span className="company">{exp.company}</span>
                      <span className="period">{exp.period}</span>
                    </div>
                    <span className="location">
                      <i className="fas fa-map-marker-alt"></i>
                      {exp.location}
                    </span>
                    <ul className="responsibilities">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'education' && (
            <motion.div
              className="education-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {resumeData.education.map((edu, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h3>{edu.degree}</h3>
                    <div className="institution-info">
                      <span className="institution">{edu.institution}</span>
                      <span className="period">{edu.period}</span>
                    </div>
                    <span className="location">
                      <i className="fas fa-map-marker-alt"></i>
                      {edu.location}
                    </span>
                    <ul className="details">
                      {edu.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'skills' && (
            <motion.div
              className="skills-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="technical-skills">
                <h3>Technical Skills</h3>
                <div className="skills-grid">
                  {resumeData.skills.technical.map((skill, index) => (
                    <div className="skill-item" key={index}>
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="soft-skills">
                <h3>Soft Skills</h3>
                <div className="soft-skills-grid">
                  {resumeData.skills.soft.map((skill, index) => (
                    <motion.div
                      className="soft-skill-item"
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <i className="fas fa-check-circle"></i>
                      <span>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Resume; 