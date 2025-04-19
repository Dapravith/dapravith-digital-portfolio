import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectFilters from "./projects/ProjectFilters";
import ProjectGrid from "./projects/ProjectGrid";

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
        
        <ProjectFilters
          filters={filters}
          currentFilter={filter}
          onFilterChange={setFilter}
          isInView={isInView}
        />

        <ProjectGrid projects={filteredProjects} />
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
