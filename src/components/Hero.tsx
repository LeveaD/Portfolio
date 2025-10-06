import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowDown, FileText, Briefcase, Send } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 animate-background-pan" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

      <div className="text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
        >
          Levea Deroshen S
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-lg md:text-xl text-neutral-300"
        >
          Computer Science Student | Problem Solver | Future Innovator
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <Button asChild size="lg" variant="hero">
            <a href="#projects">
              <Briefcase className="mr-2 h-4 w-4" /> Explore Projects
            </a>
          </Button>
          <Button asChild variant="glass" size="lg">
            <a href="/resume.pdf" download>
              <FileText className="mr-2 h-4 w-4" /> View Resume
            </a>
          </Button>
          <Button asChild size="lg" variant="hero">
            <a href="#contact">
              <Send className="mr-2 h-4 w-4" /> Contact Me
            </a>
          </Button>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-10"
      >
        <ArrowDown className="animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
