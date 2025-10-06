import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className="border-t border-border/40 py-6">
            <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
                <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Levea Deroshen S. All rights reserved.
                </p>
                <div className="flex items-center gap-4">
                    <motion.a whileHover={{ scale: 1.2, rotate: 10 }} href="#" target="_blank"><Github className="h-5 w-5" /></motion.a>
                    <motion.a whileHover={{ scale: 1.2, rotate: -10 }} href="#" target="_blank"><Linkedin className="h-5 w-5" /></motion.a>
                    <motion.a whileHover={{ scale: 1.2, rotate: 10 }} href="#" target="_blank"><Twitter className="h-5 w-5" /></motion.a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;