
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const timelineData = [
  {
    type: "Education",
    title: "Bachelor of Science in Computer Science",
    institution: "University of Example",
    date: "2022 - 2026",
    description: "Relevant coursework in Data Structures, Algorithms, and Software Engineering.",
    icon: <GraduationCap />,
  },
  {
    type: "Certification",
    title: "Oracle Certified Associate, Java SE 8 Programmer",
    institution: "Oracle",
    date: "2023",
    description: "Demonstrated proficiency in Java programming and object-oriented principles.",
    icon: <Award />,
  },
  {
    type: "Experience",
    title: "Software Engineer Intern",
    institution: "Tech Company Inc.",
    date: "Summer 2024",
    description: "Worked on the backend team to develop new features for the main product using Python and Flask.",
    icon: <Briefcase />,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">My Journey</h2>
          <p className="text-muted-foreground mt-2">A timeline of my professional and academic milestones.</p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border"></div>
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-8 flex items-center w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <Card className="bg-card/50 backdrop-blur-sm hover:border-primary transition-colors duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg font-semibold">{item.title}</CardTitle>
                      <span className="text-xs text-muted-foreground">{item.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">{item.institution}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-background rounded-full border-2 border-primary flex items-center justify-center text-primary">
                {item.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
