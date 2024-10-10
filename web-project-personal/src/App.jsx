import "./App.css";
import Header from './components/Header/Header';
import Heroes from './components/Heroes/Heroes';
import ProfileComponent from './components/Profile/ProfileComponent';
import SkillItems from './components/Skills/SkillItems';
import Projects from "./components/Projects/Projects";
import Footer from './components/Footer/Footer';
import DarkModeButton from "./components/Dugmeler/DarkModeButton";
import { useState } from "react";


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (

      <div className={`flex flex-col items-center ${darkMode ? 'dark' : ''}`}>
        {/* Dark Mode Button */}
        <DarkModeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Heroes darkMode={darkMode} />
        <Header darkMode={darkMode} />
        <SkillItems darkMode={darkMode} />
        <ProfileComponent darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Footer darkMode={darkMode} />
      </div>


  );
}

export default App;
