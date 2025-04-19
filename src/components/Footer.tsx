import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  ArrowUp,
  Phone,
  MapPin
} from "lucide-react";

const Footer = () => {
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
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-white transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="flex items-center mb-2 text-gray-400">
              <MapPin className="h-4 w-4 mr-2" />
              <p>Russeykeo, Phnom Penh, Cambodia</p>
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
            
            <div className="mb-4 rounded overflow-hidden h-32">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62523.10126324276!2d104.85963722106!3d11.612173745887247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951add5e2cd81%3A0x171e0b69c7c6f7ba!2sRussey%20Keo%2C%20Phnom%20Penh%2C%20Cambodia!5e0!3m2!1sen!2sus!4v1713548123935!5m2!1sen!2sus"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Russeykeo, Phnom Penh, Cambodia"
              />
            </div>
            
            <button 
              onClick={scrollToTop}
              className="flex items-center text-gray-400 hover:text-white transition-colors"
              aria-label="Back to Top"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>
            © 2025 Rotha Dapravith. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
