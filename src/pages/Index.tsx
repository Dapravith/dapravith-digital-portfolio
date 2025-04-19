
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

// Components
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import LoadingAnimation from "@/components/LoadingAnimation";

// Context providers
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";

// i18n initialization
import "@/i18n/i18n";

const Index = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading time (2-3 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingAnimation onComplete={() => setIsLoading(false)} key="loading" />
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="min-h-screen bg-background text-foreground"
            >
              <Navbar />
              <main>
                <HeroSection />
                <AboutSection />
                <ExperienceSection />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
              </main>
              <Footer />
              <BackToTop />
            </motion.div>
          )}
        </AnimatePresence>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;
