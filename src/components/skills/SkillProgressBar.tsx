
import { motion } from "framer-motion";
import { Skill } from "@/data/skillsData";

interface SkillProgressBarProps {
  skill: Skill;
  categoryIndex: number;
  skillIndex: number;
}

const SkillProgressBar = ({ skill, categoryIndex, skillIndex }: SkillProgressBarProps) => {
  return (
    <motion.div
      className="space-y-2"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-3">
          <div className="text-lg">
            {skill.icon}
          </div>
          <span className="text-white font-medium text-sm">
            {skill.name}
          </span>
        </div>
        <span className="text-cyan-400 font-semibold text-sm">
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-slate-700 rounded-full h-2">
        <motion.div
          className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
        />
      </div>
    </motion.div>
  );
};

export default SkillProgressBar;
