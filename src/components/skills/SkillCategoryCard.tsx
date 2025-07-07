
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { SkillCategory } from "@/data/skillsData";
import SkillProgressBar from "./SkillProgressBar";

interface SkillCategoryCardProps {
  category: SkillCategory;
  categoryIndex: number;
}

const SkillCategoryCard = ({ category, categoryIndex }: SkillCategoryCardProps) => {
  const { t } = useTranslation("skills");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
    >
      <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-2">
              {t(`categories.${category.key}`)}
            </h3>
            <p className="text-slate-300 text-sm">
              {t(`descriptions.${category.key}`)}
            </p>
          </div>

          <div className="space-y-4">
            {category.skills.map((skill, skillIndex) => (
              <SkillProgressBar
                key={skill.name}
                skill={skill}
                categoryIndex={categoryIndex}
                skillIndex={skillIndex}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SkillCategoryCard;
