
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const { t } = useTranslation("hero");

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = '/resume_rotha_dapravith (10) (1).pdf'; // Path to the resume file
    link.download = '/public/resume_rotha_dapravith (10) (1).pdf'; // Default name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-xl md:text-2xl font-medium">
            {t("greeting")}
          </h2>
          
          <div className="animate-typing inline-block">
            <h1 className="text-4xl md:text-6xl font-bold animate-gradient-text">
              {t("name")}
            </h1>
          </div>

          <div className="animate-typing inline-block delay-500">
            <h2 className="text-2xl md:text-3xl font-semibold animate-gradient-text">
              {t("title")}
            </h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            {t("description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex items-center justify-center gap-4 pt-8"
          >
            <Button size="lg" onClick={downloadResume}>
              {t("cta.resume")}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToProjects}
            >
              {t("cta.projects")}
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="h-8 w-8 animate-bounce text-gray-400" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
