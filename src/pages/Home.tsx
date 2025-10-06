import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import AcademicHistory from "@/components/AcademicHistory";
import Certifications from "@/components/Certifications";
import Resume from "@/components/Resume";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Experience />
        <AcademicHistory />
        <Certifications />
        <Resume />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
