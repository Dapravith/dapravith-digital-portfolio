
import { motion } from "framer-motion";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ChevronRight
} from "lucide-react";
import { useTranslation } from "react-i18next";

const ExperienceSection = () => {
  const { t } = useTranslation("experience");
  
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

  // Use translation data for experience items
  const experienceItems = [
    {
      title: t("timeline.current.title"),
      company: t("timeline.current.company"),
      period: t("timeline.current.period"),
      location: t("timeline.current.location"),
      description: t("timeline.current.description", { returnObjects: true }) as string[]
    },
    {
      title: t("timeline.job1.title"),
      company: t("timeline.job1.company"),
      period: t("timeline.job1.period"),
      location: t("timeline.job1.location"),
      description: t("timeline.job1.description", { returnObjects: true }) as string[]
    },
    {
      title: t("timeline.job2.title"),
      company: t("timeline.job2.company"),
      period: t("timeline.job2.period"),
      location: t("timeline.job2.location"),
      description: t("timeline.job2.description", { returnObjects: true }) as string[]
    },
    {
      title: t("timeline.job3.title"),
      company: t("timeline.job3.company"),
      period: t("timeline.job3.period"),
      location: t("timeline.job3.location"),
      description: t("timeline.job3.description", { returnObjects: true }) as string[]
    }
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
          <motion.div className="text-center" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              {t("subtitle")}
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
                  key={index}
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
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    <div className="flex items-center mb-4">
                      <Briefcase className="h-4 w-4 text-primary mr-2" />
                      <div className="text-lg text-gray-700 dark:text-gray-300">
                        {item.company}
                      </div>
                    </div>

                    <div className="flex items-center mb-4">
                      <MapPin className="h-4 w-4 text-primary mr-2" />
                      <div className="text-gray-600 dark:text-gray-400">
                        {item.location}
                      </div>
                    </div>

                    <ul className="space-y-2 mt-4">
                      {item.description.map((desc, i) => (
                        <li key={i} className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
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
