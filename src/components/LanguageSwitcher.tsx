
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Switch language</span>
          <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground font-bold">
            {language.toUpperCase()}
          </span>
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
