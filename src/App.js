import "./App.css";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import MainSection from "./components/about/MainSection";
import Navbar from "./components/Navbar/Navbar";
import SkillsSection from "./components/Skills/SkillsSection";

function App() {
  return (
    <>
      <Navbar />
      <main className="App">
        <MainSection />
        <SkillsSection />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
