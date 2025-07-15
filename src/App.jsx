import './App.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Achievements from './sections/Achievements/Achievement';
import Navbar from './sections/NavBar/NavBar.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
