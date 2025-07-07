
import { Card, CardContent } from "@/components/ui/card";
import SkillItem from "./SkillItem";
import { skillIcons } from "./skillsData";

interface SkillCardProps {
  category: keyof typeof skillIcons;
  categoryName: string;
  skills: string[];
}

const SkillCard = ({ category, categoryName, skills }: SkillCardProps) => {
  return (
    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4">
        <h3 className="text-xl font-semibold text-center">
          {categoryName}
        </h3>
      </div>
      <CardContent className="p-6">
        <div className="space-y-4">
          {skills?.map((skill) => (
            <SkillItem 
              key={skill} 
              skill={skill} 
              category={category} 
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
