import { useTheme } from '../context/ThemeContext';
import '../styles/ThemeToggle.scss';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button 
      className={`theme-toggle-circular ${isDarkMode ? 'dark' : 'light'}`}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <div className="icon-wrapper">
        {isDarkMode ? (
          <i className="fas fa-moon"></i>
        ) : (
          <i className="fas fa-sun"></i>
        )}
      </div>
    </button>
  );
};

export default ThemeToggle; 