import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code, Database, Settings, Star } from "lucide-react";

const skillsData = {
  languages: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
  frameworks: ["React", "Node.js", "Express", "Spring Boot", "Tailwind CSS"],
  tools: ["Git", "Docker", "Postman", "Figma", "VS Code"],
  core: ["Data Structures", "Algorithms", "OOP", "REST APIs"],
};

const iconMap = {
  languages: <Code className="w-6 h-6" />,
  frameworks: <Star className="w-6 h-6" />,
  tools: <Settings className="w-6 h-6" />,
  core: <Database className="w-6 h-6" />,
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">My Technical Skills</h2>
          <p className="text-muted-foreground mt-2">A collection of technologies I work with.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skillsData).map(([category, skills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm hover:border-primary transition-colors duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  {iconMap[category as keyof typeof iconMap]}
                  <CardTitle className="capitalize">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;