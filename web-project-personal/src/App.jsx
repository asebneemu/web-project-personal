import "./App.css"
import Header from './components/Header/Header';
import Heroes from './components/Heroes/Heroes';  // Heroes componentini import ediyoruz
import ProfileComponent from './components/Profile/ProfileComponent';
import SkillItems from './components/Skills/SkillItems';
import Projects from "./components/Projects/Projects"
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="flex flex-col items-center">
      <Heroes />
      <Header />
      <SkillItems />
      <ProfileComponent />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;

