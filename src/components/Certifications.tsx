import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const certificationsData = [
  {
    title: "Oracle Certified Associate, Java SE 8 Programmer",
    issuer: "Oracle",
    date: "2023",
    description: "Demonstrated proficiency in Java programming and object-oriented principles.",
  },
  {
    title: "Another Certification",
    issuer: "Another Issuer",
    date: "2024",
    description: "A brief description of the certification.",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">Certifications</h2>
          <p className="text-muted-foreground mt-2">My professional certifications.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificationsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm hover:border-primary transition-colors duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Award className="w-6 h-6" />
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-medium">{item.issuer}</p>
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

export default Certifications;