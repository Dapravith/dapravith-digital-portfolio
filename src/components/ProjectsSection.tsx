import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const [filter, setFilter] = useState("all");
  
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

  return (
    <section id="projects" className="py-16">
      <motion.div
        className="container max-w-7xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Projects
          </h2>
          <p className="text-muted-foreground text-lg">Key Works</p>
        </div>
        
        {/* Filter controls */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {Object.entries(filters).map(([key, value]) => (
            <Button
              key={key}
              variant={filter === key ? "default" : "outline"}
              onClick={() => setFilter(key)}
              className="rounded-full text-sm px-4"
            >
              {value}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
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
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
