import { useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { Button } from "./ui/button";

const Navbar = () => {
    const { theme, setTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "#about", label: "About" },
        { href: "#skills", label: "Skills" },
        { href: "#projects", label: "Projects" },
        { href: "#resume", label: "Resume" },
        { href: "#contact", label: "Contact" },
    ];

    const activeId = useScrollSpy(navLinks.map(link => link.href.substring(1)), { rootMargin: "-50% 0px -50% 0px" });

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        >
            <div className="container h-14 flex items-center justify-between">
                <a href="/" className="font-heading font-bold text-lg">Levea Deroshen S</a>

                <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="relative"
                        >
                            {link.label}
                            {activeId === link.href.substring(1) && (
                                <motion.div
                                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"
                                    layoutId="underline"
                                />
                            )}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:flex items-center justify-end space-x-4">
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline">View Resume</Button>
                    </a>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    >
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                </div>

                <div className="md:hidden flex items-center">
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X /> : <Menu />}
                    </Button>
                </div>
            </div>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden pb-4"
                >
                    <nav className="flex flex-col items-center space-y-4 text-sm font-medium">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline">View Resume</Button>
                        </a>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                        >
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </nav>
                </motion.div>
            )}
        </motion.header>
    );
};

export default Navbar;
