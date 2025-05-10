import { motion } from 'framer-motion';
import '../styles/Projects.scss';

const placeholderImages = {
  ecommerce: "public/ecommerce.png",
  studentmanager: "public/studentms.png",
  dashboard: "https://via.placeholder.com/600x400?text=Social+Dashboard",
  chatApp: "public/chatapp.png"
};

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "An e-commerce platform with features like user authentication, shopping cart, payment integration, and admin dashboard. Built with React.js, Tailwind CSS, API.",
      image: placeholderImages.ecommerce,
      technologies: ["React", "Tailwind CSS", "API"],
      github: "https://github.com/Sohil-Shaikh/greencorner-personal.git",
      live: "https://ecommerce-demo.com",
      category: "Web App"
    },
    // {
    //   title: "Task Management System",
    //   description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team workspace. Features include task assignment, progress tracking, and notifications.",
    //   image: placeholderImages.taskmanager,
    //   technologies: ["React", "Firebase", "Material-UI", "Redux", "Socket.io"],
    //   github: "https://github.com/yourusername/taskmanager",
    //   live: "https://taskmanager-demo.com",
    //   category: "Web App"
    // },

    {
      title: "Student Management System",
      description: "A collaborative task management application with real-time updates.",
      image: placeholderImages.studentmanager,
      technologies: ["Python", "MySql", "tkinter"],
      github: "https://github.com/Sohil-Shaikh/Student-Management-System.git",
      live: "https://taskmanager-demo.com",
      category: "Web App"
    },
    // {
    //   title: "Social Media Dashboard",
    //   description: "A comprehensive social media analytics dashboard with real-time data visualization, sentiment analysis, and automated reporting. Integrates with multiple social platforms.",
    //   image: placeholderImages.dashboard,
    //   technologies: ["React", "D3.js", "Node.js", "PostgreSQL", "AWS"],
    //   github: "https://github.com/yourusername/dashboard",
    //   live: "https://dashboard-demo.com",
    //   category: "Analytics"
    // },
    // {
    //   title: "AI Chat Application",
    //   description: "Real-time chat application with AI-powered features like message translation, sentiment analysis, and automated responses. Supports group chats and file sharing.",
    //   image: placeholderImages.chatApp,
    //   technologies: ["React", "Python", "TensorFlow", "WebSocket", "Docker"],
    //   github: "https://github.com/yourusername/chat-app",
    //   live: "https://chat-app-demo.com",
    //   category: "AI/ML"
    // }
    {
      title: "AI Chatbot Application",
      description: "Real-time chat application with AI-powered features like generate the text and images.",
      image: placeholderImages.chatApp,
      technologies: ["React", "CSS", "OpenAI", "AI",],
      github: "https://github.com/Sohil-Shaikh/AI-Chatbot-Application.git",
      live: "https://chat-app-demo.com",
      category: "Web App / AI"
    }
  ];

  return (
    <motion.div 
      className="projects-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="projects-container">
        <motion.div 
          className="projects-header"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>My Projects</h2>
          <p>Showcasing my expertise through real-world applications</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              className="project-card" 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <span className="project-category">{project.category}</span>
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn github-btn"
                    >
                      <i className="fab fa-github"></i>
                      View Code
                    </a>
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn live-btn"
                    >
                      <i className="fas fa-external-link-alt"></i>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects; 