
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <span className="text-lg">
            {language === "en" ? "🇬🇧" : "🇰🇭"}
          </span>
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem 
          onClick={() => setLanguage("en")}
          className={language === "en" ? "font-bold" : ""}
        >
          <span className="mr-2">🇬🇧</span> {t("language.en")}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setLanguage("kh")}
          className={language === "kh" ? "font-bold" : ""}
        >
          <span className="mr-2">🇰🇭</span> {t("language.kh")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
