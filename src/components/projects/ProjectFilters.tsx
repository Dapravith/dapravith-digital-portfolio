
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ProjectFiltersProps {
  filters: Record<string, string>;
  currentFilter: string;
  onFilterChange: (key: string) => void;
  isInView: boolean;
}

const ProjectFilters = ({ filters, currentFilter, onFilterChange, isInView }: ProjectFiltersProps) => (
  <motion.div
    className="flex flex-wrap gap-2 justify-center mb-8"
    initial={{ opacity: 0, y: 10 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
    transition={{ duration: 0.5, delay: 0.4 }}
  >
    {Object.entries(filters).map(([key, value], index) => (
      <motion.div
        key={key}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
      >
        <Button
          variant={currentFilter === key ? "default" : "outline"}
          onClick={() => onFilterChange(key)}
          className="rounded-full text-sm px-4"
        >
          {value}
        </Button>
      </motion.div>
    ))}
  </motion.div>
);

export default ProjectFilters;
