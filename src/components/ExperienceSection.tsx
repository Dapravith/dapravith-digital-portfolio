
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ChevronRight,
  GraduationCap
} from "lucide-react";

const ExperienceSection = () => {
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

  // Experience and education items from translation
  const experienceItems = [
    "current",
    "job1",
    "job2",
    "job3"
  ];

  const educationItems = [
    "education1",
    "education2"
  ];

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          className="flex flex-col gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Work Experience Section */}
          <motion.div className="text-center" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("experience.title")}</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              {t("experience.subtitle")}
            </p>
          </motion.div>

          {/* Work Experience Timeline */}
          <motion.div 
            className="relative pl-8 md:pl-0 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            {/* Timeline Line - Desktop */}
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 ml-6"></div>

            {/* Work Experience Items */}
            <div className="space-y-12">
              {experienceItems.map((item, index) => (
                <motion.div 
                  key={item}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline Dot - Desktop */}
                  <div className="hidden md:block timeline-dot"></div>

                  {/* Work Experience Content */}
                  <div className="md:ml-12 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                      <h3 className="text-xl font-bold">{t(`experience.timeline.${item}.title`)}</h3>
                      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{t(`experience.timeline.${item}.period`)}</span>
                      </div>
                    </div>

                    <div className="flex items-center mb-4">
                      <Briefcase className="h-4 w-4 text-primary mr-2" />
                      <div className="text-lg text-gray-700 dark:text-gray-300">
                        {t(`experience.timeline.${item}.company`)}
                      </div>
                    </div>

                    <div className="flex items-center mb-4">
                      <MapPin className="h-4 w-4 text-primary mr-2" />
                      <div className="text-gray-600 dark:text-gray-400">
                        {t(`experience.timeline.${item}.location`)}
                      </div>
                    </div>

                    <ul className="space-y-2 mt-4">
                      {(() => {
                        const descriptions = t(`experience.timeline.${item}.description`, { returnObjects: true }) as string[];
                        return descriptions.map((desc: string, i: number) => (
                          <li key={i} className="flex items-start">
                            <ChevronRight className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                            <span>{desc}</span>
                          </li>
                        ));
                      })()}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div id="education" className="text-center pt-8" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("education.title")}</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              {t("education.subtitle")}
            </p>
          </motion.div>

          {/* Education Timeline */}
          <motion.div 
            className="relative pl-8 md:pl-0 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            {/* Timeline Line - Desktop */}
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 ml-6"></div>

            {/* Education Items */}
            <div className="space-y-12">
              {educationItems.map((item, index) => (
                <motion.div 
                  key={item}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline Dot - Desktop */}
                  <div className="hidden md:block timeline-dot"></div>

                  {/* Education Content */}
                  <div className="md:ml-12 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                      <h3 className="text-xl font-bold">{t(`education.timeline.${item}.degree`)}</h3>
                      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{t(`education.timeline.${item}.period`)}</span>
                      </div>
                    </div>

                    <div className="flex items-center mb-4">
                      <GraduationCap className="h-4 w-4 text-primary mr-2" />
                      <div className="text-lg text-gray-700 dark:text-gray-300">
                        {t(`education.timeline.${item}.institution`)}
                      </div>
                    </div>

                    <div className="flex items-center mb-4">
                      <MapPin className="h-4 w-4 text-primary mr-2" />
                      <div className="text-gray-600 dark:text-gray-400">
                        {t(`education.timeline.${item}.location`)}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
