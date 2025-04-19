
import { useTranslation } from "react-i18next";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  ArrowUp 
} from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Name and Brief */}
          <div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">Rotha Dapravith</h3>
            <p className="text-gray-400 mb-4">
              Full-Stack Developer & DevOps Engineer
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="mailto:contact@example.com" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  {t("nav.home")}
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-white transition-colors">
                  {t("nav.experience")}
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
                  {t("nav.skills")}
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                  {t("nav.projects")}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t("nav.contact")}</h3>
            <p className="text-gray-400 mb-2">
              Phnom Penh, Cambodia
            </p>
            <p className="text-gray-400 mb-2">
              contact@example.com
            </p>
            <p className="text-gray-400 mb-4">
              +855 123 456 789
            </p>
            
            <button 
              onClick={scrollToTop}
              className="flex items-center text-gray-400 hover:text-white transition-colors"
              aria-label={t("footer.backToTop")}
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              {t("footer.backToTop")}
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
