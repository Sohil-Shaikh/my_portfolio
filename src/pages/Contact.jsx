import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import '../styles/Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faPhone, 
  faLocationDot 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faLinkedin, 
  faGithub, 
  faTwitter ,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      'service_grpnsjs', // Replace with your EmailJS service ID
      'template_xgjh26d', // Replace with your EmailJS template ID
      form.current,
      'X5Kzc82eixwN7wkr-' // Replace with your EmailJS public key
    )
      .then(() => {
        setStatus('success');
        form.current.reset();
      })
      .catch(() => {
        setStatus('error');
      });
  };

  return (
    <motion.div 
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="contact-container">
        <motion.div 
          className="contact-header"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Get In Touch</h2>
          <div className="header-line"></div>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="info-card">
              <h3>Let's Connect</h3>
              <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
              
              <div className="contact-details">
                <div className="detail-item">
                  <FontAwesomeIcon icon={faEnvelope} className="icon" />
                  <div>
                    <h4>Mail Me</h4>
                    <a href="mailto:sohilshaikh36542@gmail.com">sohilshaikh36542@gmail.com</a>
                  </div>
                </div>

                <div className="detail-item">
                  <FontAwesomeIcon icon={faPhone} className="icon" />
                  <div>
                    <h4>Call Me</h4>
                    <a href="tel:+917666541563">+91 7666541563</a>
                  </div>
                </div>

                <div className="detail-item">
                  <FontAwesomeIcon icon={faLocationDot} className="icon" />
                  <div>
                    <h4>Location</h4>
                    <p>Pune, Maharashtra, India</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <a href="https://linkedin.com/in/sohil-shaikh-977736254/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className="icon" />
                </a>
                <a href="https://github.com/Sohil-Shaikh" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="icon" />
                </a>
                <a href="https://instagram.com/sohilshaikh_143" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className="icon" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name" 
                  placeholder="Enter your name" 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email" 
                  placeholder="Enter your email" 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="title">Subject</label>
                <input 
                  type="text" 
                  id="title"
                  name="title" 
                  placeholder="Enter subject" 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message"
                  name="message" 
                  placeholder="Enter your message" 
                ></textarea>
              </div>
              <button 
                type="submit" 
                className={`submit-btn ${status === 'sending' ? 'sending' : ''}`}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : 'Send Message'}
              </button>
              {status === 'success' && (
                <motion.p 
                  className="success-message"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <i className="fas fa-check-circle"></i>
                  Message sent successfully!
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p 
                  className="error-message"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <i className="fas fa-exclamation-circle"></i>
                  Failed to send message. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact; 