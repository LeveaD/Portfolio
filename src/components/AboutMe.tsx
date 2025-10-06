import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Github, Linkedin } from "lucide-react";

const AboutMe = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="overflow-hidden bg-card/50 backdrop-blur-sm">
            <div className="md:flex">
              <div className="md:w-1/3 bg-secondary/30 p-8 flex flex-col items-center justify-center border-r border-border/40">
                <Avatar className="w-32 h-32 mb-4 border-2 border-primary">
                  <AvatarImage src="/placeholder.svg" alt="Levea Deroshen S" />
                  <AvatarFallback>LDS</AvatarFallback>
                </Avatar>
                <h2 className="text-2xl font-bold text-center">Levea Deroshen S</h2>
                <p className="text-muted-foreground text-center">Computer Science Student</p>
                <div className="flex gap-4 mt-4">
                  <a href="#" target="_blank" rel="noopener noreferrer"><Github /></a>
                  <a href="#" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold">About Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    I’m a Computer Science student who enjoys solving problems more than memorizing solutions. With 60+ LeetCode problems solved, I’m committed to building a strong foundation in data structures and algorithms, and actively exploring how those skills translate into real-world software. I am especially drawn to building smart systems and meaningful user experiences, and I’m always on the lookout for opportunities to learn by doing — whether through projects, internships, or collaboration.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2 text-lg">Certifications</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Oracle Certified Associate</Badge>
                        <Badge variant="outline">Java SE 8 Programmer</Badge>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-lg">Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge>Java</Badge>
                        <Badge>Python</Badge>
                        <Badge>React</Badge>
                        <Badge>Node.js</Badge>
                        <Badge>SQL</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
