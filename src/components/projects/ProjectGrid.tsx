
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string[];
  links: {
    github?: string;
    demo?: string;
  };
}

interface ProjectGridProps {
  projects: Project[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
};

const ProjectGrid = ({ projects }: ProjectGridProps) => (
  <motion.div
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    {projects.map((project, index) => (
      <ProjectCard key={index} project={project} index={index} />
    ))}
  </motion.div>
);

export default ProjectGrid;
