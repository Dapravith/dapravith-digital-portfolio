
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      aria-label={theme === "light" ? t("theme.dark") : t("theme.light")}
    >
      <span className="sr-only">
        {theme === "light" ? t("theme.dark") : t("theme.light")}
      </span>
      
      {theme === "light" ? (
        <motion.div
          initial={{ rotate: -30, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 30, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Moon className="h-5 w-5" />
        </motion.div>
      ) : (
        <motion.div
          initial={{ rotate: 30, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: -30, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Sun className="h-5 w-5" />
        </motion.div>
      )}
    </Button>
  );
};

export default ThemeSwitcher;
