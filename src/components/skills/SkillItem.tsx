
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { skillIcons, skillLevels } from "./skillsData";

interface SkillItemProps {
  skill: string;
  category: keyof typeof skillIcons;
}

const SkillItem = ({ skill, category }: SkillItemProps) => {
  const level = skillLevels[category]?.[skill] || 70;
  
  return (
    <motion.div
      className="space-y-2"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {skillIcons[category]?.[skill] ||
            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold">
              {skill.charAt(0)}
            </div>
          }
          <span className="text-sm font-medium">{skill}</span>
        </div>
        <span className="text-sm font-semibold text-primary">{level}%</span>
      </div>
      <Progress 
        value={level} 
        className="h-2 bg-gray-200 dark:bg-gray-700"
      />
    </motion.div>
  );
};

export default SkillItem;
