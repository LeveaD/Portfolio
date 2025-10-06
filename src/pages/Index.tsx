import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import AcademicHistory from "@/components/AcademicHistory";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <AboutMe />
      <Skills />
      <Projects />
      <Certifications />
      <AcademicHistory />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
