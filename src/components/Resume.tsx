import { Button } from "./ui/button";
import { Download } from "lucide-react";

const Resume = () => {
    const resumeUrl = "/resume.pdf";

    return (
        <section id="resume" className="py-20">
            <div className="container">
                <h2 className="text-3xl font-bold text-center mb-8">My Resume</h2>
                <div className="flex justify-center mb-8">
                    <a href={resumeUrl} download="resume.pdf">
                        <Button>
                            <Download className="mr-2 h-4 w-4" />
                            Download Resume
                        </Button>
                    </a>
                </div>
                <div className="relative h-[800px] border rounded-lg overflow-hidden">
                    <iframe
                        src={resumeUrl}
                        title="Resume"
                        className="w-full h-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default Resume;
