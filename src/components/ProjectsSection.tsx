
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const [filter, setFilter] = useState("all");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const filters = {
    all: "All",
    frontend: "Frontend",
    backend: "Backend",
    devops: "DevOps"
  };
  
  const projects = [
    {
      title: "Single Sign-On and DevOps System",
      description: "Developed a secure SSO system with OAuth2.0, Keycloak, and automated CI/CD pipelines using Jenkins, GitLab, Docker, and Nginx. APIs documented with Swagger UI.",
      technologies: ["Spring Boot", "Keycloak", "Docker", "Jenkins", "Nginx"],
      category: ["backend", "devops"],
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "E-commerce Management System",
      description: "Comprehensive e-commerce solution with product management, user authentication, and order processing capabilities.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      category: ["frontend", "backend"],
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "Delivery Service Management System",
      description: "A system for managing delivery services, including tracking, scheduling, and customer management.",
      technologies: ["MERN Stack", "React Native", "QR Code"],
      category: ["frontend", "backend"],
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "Decoration Shop Management System",
      description: "Stock and sales management system for a decoration shop.",
      technologies: ["React", "Spring Boot", "PostgreSQL"],
      category: ["frontend", "backend"],
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "GIC Coffee Management System",
      description: "System for managing coffee shop operations, including stock, sales, and customer management.",
      technologies: ["Angular", "Spring Boot", "MySQL"],
      category: ["frontend", "backend"],
      links: {
        github: "#",
        demo: "#"
      }
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category.includes(filter));

  // Enhanced animation variants
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

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: i => ({
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

  return (
    <section id="projects" className="py-16" ref={sectionRef}>
      <motion.div
        className="container max-w-7xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 gradient-text"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Projects
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Key Works
          </motion.p>
        </div>
        
        {/* Filter controls */}
        <motion.div
          className="flex flex-wrap gap-2 justify-center mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {Object.entries(filters).map(([key, value], index) => (
            <Button
              key={key}
              variant={filter === key ? "default" : "outline"}
              onClick={() => setFilter(key)}
              className="rounded-full text-sm px-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
            >
              {value}
            </Button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
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
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
