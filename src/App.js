import "./App.css";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Navbar from "./components/Navbar/Navbar";
import SkillsSection from "./components/Skills/SkillsSection";

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
