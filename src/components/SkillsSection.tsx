
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { skillCategories } from "@/data/skillsData";
import SkillCategoryCard from "./skills/SkillCategoryCard";

const SkillsSection = () => {
  const { t } = useTranslation("skills");

  return (
    <section id="skills" className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <motion.div
        className="container max-w-7xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-400">
            {t('title')}
          </h2>
          <p className="text-slate-300 text-lg">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <SkillCategoryCard
              key={category.key}
              category={category}
              categoryIndex={categoryIndex}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
