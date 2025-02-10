import { useState } from "react";
import './Portfolio.css'
import Projects from "../Projects/Projects.jsx";
import AboutMe from "../AboutMe/AboutMe.jsx";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : "light"}>
      <header>
        <button onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <h1 >My Portfolio</h1>
        
      </header>
      <main>
        <AboutMe />
        <Projects />
      </main>
      <footer>
        <p>&copy; 2025 RC Alum</p>
      </footer>
    </div>
  );
}

export default Portfolio;