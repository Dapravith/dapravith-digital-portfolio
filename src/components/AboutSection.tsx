
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";

const AboutSection = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/30">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          className="flex flex-col gap-16 md:gap-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Section Header */}
          <motion.div className="text-center" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("about.title")}</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              {t("about.subtitle")}
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image / Resume Preview */}
            <motion.div 
              className="order-2 md:order-1"
              variants={itemVariants}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden h-96 relative">
                {/* Resume Preview Placeholder */}
                <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                  <h3 className="font-medium">resume.pdf</h3>
                  <Button className="button-gradient">
                    <DownloadIcon className="mr-2 h-4 w-4" />
                    {t("about.resume")}
                  </Button>
                </div>
                <div className="p-6 h-full overflow-auto">
                  {/* This would be replaced with an actual PDF preview */}
                  <div className="space-y-4">
                    <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-3/4 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-5/6 animate-pulse"></div>
                    <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-md mt-8 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-4/5 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-3/4 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div 
              className="order-1 md:order-2 space-y-6"
              variants={itemVariants}
            >
              <p className="text-lg">
                {t("about.paragraph1")}
              </p>
              <p>
                {t("about.paragraph2")}
              </p>
              <p>
                {t("about.paragraph3")}
              </p>

              {/* Stats or Additional Info */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover-scale">
                  <h4 className="text-2xl font-bold gradient-text">2+</h4>
                  <p className="text-gray-600 dark:text-gray-400">Years Experience</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover-scale">
                  <h4 className="text-2xl font-bold gradient-text">5+</h4>
                  <p className="text-gray-600 dark:text-gray-400">Projects</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
