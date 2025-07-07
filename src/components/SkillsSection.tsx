
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SkillCategory from "./skills/SkillCategory";
import { skillIcons } from "./skills/SkillIcons";

const SkillsSection = () => {
  const { t } = useTranslation("skills");

  const categories = {
    frontend: t("categories.frontend"),
    backendApis: t("categories.backendApis"),
    databases: t("categories.databases"),
    devOpsCloud: t("categories.devOpsCloud"),
    qualityMonitoring: t("categories.qualityMonitoring")
  };

  const skillItems = {
    frontend: t("items.frontend", { returnObjects: true }) as string[],
    backendApis: t("items.backendApis", { returnObjects: true }) as string[],
    databases: t("items.databases", { returnObjects: true }) as string[],
    devOpsCloud: t("items.devOpsCloud", { returnObjects: true }) as string[],
    qualityMonitoring: t("items.qualityMonitoring", { returnObjects: true }) as string[]
  };

  return (
    <section id="skills" className="py-16 bg-muted/30">
      <motion.div
        className="container max-w-7xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            {t("title")}
          </h2>
          <p className="text-muted-foreground text-lg">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(categories).map(([category, categoryName]) => (
            <SkillCategory
              key={category}
              category={category as keyof typeof skillIcons}
              categoryName={categoryName}
              skills={skillItems[category as keyof typeof skillItems]}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
