import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/about/About";
import SkillsSection from "./components/Skills/SkillsSection";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="App">
        <About />
        <SkillsSection />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
