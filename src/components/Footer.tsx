
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  ArrowUp,
  Phone,
  Send,
  Facebook
} from "lucide-react";
import { useTranslation } from "react-i18next";
import ThreeJSFooterAnimation from "./ThreeJSFooterAnimation";

const Footer = () => {
  const { t } = useTranslation("footer");
  const { t: tNav } = useTranslation("nav");
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      <ThreeJSFooterAnimation />
      
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Name and Brief */}
          <div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">{t("name")}</h3>
            <p className="text-gray-400 mb-4">
              {t("role")}
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://www.facebook.com/VithRMG/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://t.me/Dapravith_Rotha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-300"
                aria-label="Telegram"
              >
                <Send className="h-5 w-5" />
              </a>
              <a 
                href="mailto:dapravithrotha@gmail.com" 
                className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t("quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors hover:translate-x-2 transform duration-300 inline-block">
                  {tNav("home")}
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors hover:translate-x-2 transform duration-300 inline-block">
                  {tNav("about")}
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-white transition-colors hover:translate-x-2 transform duration-300 inline-block">
                  {tNav("experience")}
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors hover:translate-x-2 transform duration-300 inline-block">
                  {tNav("skills")}
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors hover:translate-x-2 transform duration-300 inline-block">
                  {tNav("projects")}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors hover:translate-x-2 transform duration-300 inline-block">
                  {tNav("contact")}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
