import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  ArrowUp,
  Phone,
  MapPin
} from "lucide-react";
import { useTranslation } from "react-i18next";

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
    <footer className="bg-gray-900 text-white py-12">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                href="mailto:dapravithrotha@gmail.com" 
                className="text-gray-400 hover:text-white transition-colors"
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
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  {tNav("home")}
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  {tNav("about")}
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-white transition-colors">
                  {tNav("experience")}
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
                  {tNav("skills")}
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                  {tNav("projects")}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  {tNav("contact")}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t("contact")}</h3>
            <div className="flex items-center mb-2 text-gray-400">
              <MapPin className="h-4 w-4 mr-2" />
              <p>{t("address.full")}</p>
            </div>
            
            <div className="flex items-center mb-2 text-gray-400">
              <Mail className="h-4 w-4 mr-2" />
              <a href="mailto:dapravithrotha@gmail.com" className="hover:text-white transition-colors">
                dapravithrotha@gmail.com
              </a>
            </div>
            
            <div className="flex items-center mb-4 text-gray-400">
              <Phone className="h-4 w-4 mr-2" />
              <a href="tel:+85589337798" className="hover:text-white transition-colors">
                +855 089 933 7798
              </a>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="flex items-center text-gray-400 hover:text-white transition-colors"
              aria-label={t("backToTop")}
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              {t("backToTop")}
            </button>
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
