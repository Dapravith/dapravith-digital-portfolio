
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectFilters from "./projects/ProjectFilters";
import ProjectGrid from "./projects/ProjectGrid";
import { useTranslation } from "react-i18next";

const ProjectsSection = () => {
  const { t } = useTranslation("projects");
  const [filter, setFilter] = useState("all");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const filters = {
    all: t("filters.all"),
    frontend: t("filters.frontend"),
    backend: t("filters.backend"),
    devops: t("filters.devops")
  };
  
  // Use translations for the projects data
  const projects = t("items", { returnObjects: true });

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter((project: any) => project.category.includes(filter));

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
            {t("title")}
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {t("subtitle")}
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
