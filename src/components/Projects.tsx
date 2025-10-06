import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Github, ExternalLink } from "lucide-react";

const projectsData = [
  {
    title: "Project One",
    description: "A brief description of Project One, highlighting the key technologies and its purpose.",
    image: "/src/assets/project-placeholder.png",
    tags: ["React", "Node.js", "PostgreSQL"],
    github: "#",
    live: "#",
  },
  {
    title: "Project Two",
    description: "A brief description of Project Two, highlighting the key technologies and its purpose.",
    image: "/src/assets/project-placeholder.png",
    tags: ["Python", "Flask", "SQLite"],
    github: "#",
    live: "#",
  },
  {
    title: "Project Three",
    description: "A brief description of Project Three, highlighting the key technologies and its purpose.",
    image: "/src/assets/project-placeholder.png",
    tags: ["Java", "Spring Boot", "MySQL"],
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">My Projects</h2>
          <p className="text-muted-foreground mt-2">Here are some of the projects I've worked on.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary transition-colors duration-300">
                <CardHeader>
                  <div className="aspect-video rounded-md overflow-hidden mb-4">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;