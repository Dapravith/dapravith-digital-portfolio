
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    links: {
      github?: string;
      demo?: string;
    };
  };
  index: number;
}

const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      delay: i * 0.1,
    }
  })
};

const ProjectCard = ({ project, index }: ProjectCardProps) => (
  <motion.div
    custom={index}
    variants={projectVariants}
    className="h-full"
  >
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 hover:scale-[1.02] transform">
      <CardContent className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <Badge 
                key={i} 
                variant="secondary" 
                className="text-xs"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="flex gap-3 mt-auto">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={18} />
              <span className="sr-only">GitHub</span>
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink size={18} />
              <span className="sr-only">Live Demo</span>
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export default ProjectCard;
