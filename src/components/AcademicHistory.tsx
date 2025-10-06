import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const academicData = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Example",
    date: "2022 - 2026",
    description: "Relevant coursework in Data Structures, Algorithms, and Software Engineering.",
  },
  {
    degree: "High School Diploma",
    institution: "Example High School",
    date: "2020 - 2022",
    description: "Graduated with honors.",
  },
];

const AcademicHistory = () => {
  return (
    <section id="academic-history" className="py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">Academic History</h2>
          <p className="text-muted-foreground mt-2">My educational background.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {academicData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm hover:border-primary transition-colors duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  <GraduationCap className="w-6 h-6" />
                  <CardTitle>{item.degree}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-medium">{item.institution}</p>
                  <p className="text-muted-foreground text-sm mb-4">{item.date}</p>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicHistory;