import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DownloadIcon, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const titleRef = useRef("Full-Stack Developer | DevOps Engineer | Creator");
  
  // Typing effect
  useEffect(() => {
    setTypedText("");
    setIsTypingComplete(false);
    
    let currentIndex = 0;
    const textToType = titleRef.current;
    
    const typingInterval = setInterval(() => {
      if (currentIndex < textToType.length) {
        setTypedText(textToType.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, 50);
    
    return () => clearInterval(typingInterval);
  }, []);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16">
      <motion.div 
        className="container max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Text Content */}
        <motion.div className="flex flex-col gap-4 order-2 md:order-1 text-center md:text-left">
          <motion.h2 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400"
            variants={itemVariants}
          >
            Hi, I'm
          </motion.h2>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text"
            variants={itemVariants}
          >
            Rotha Dapravith
          </motion.h1>
          
          <motion.div 
            className="relative min-h-[60px] md:min-h-[80px] flex items-center"
            variants={itemVariants}
          >
            <h3 className="text-xl md:text-2xl lg:text-3xl">
              {typedText}
              {!isTypingComplete && (
                <span className="inline-block w-1 h-6 bg-primary animate-blink-caret ml-1"></span>
              )}
            </h3>
          </motion.div>
          
          <motion.p 
            className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-xl"
            variants={itemVariants}
          >
            A Full-Stack Developer with over 2 years of experience in building solutions.
          </motion.p>
          
          <motion.div 
            className="flex gap-4 mt-6 flex-wrap justify-center md:justify-start"
            variants={itemVariants}
          >
            <Button className="button-gradient">
              <DownloadIcon className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
            
            <Button variant="outline">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Hero Image/Animation */}
        <motion.div 
          className="order-1 md:order-2 flex justify-center"
          variants={itemVariants}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-blue/20 to-primary-emerald/20 animate-pulse" />
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary-blue/30 to-primary-emerald/30 animate-pulse [animation-delay:0.3s]" />
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary-blue/40 to-primary-emerald/40 animate-pulse [animation-delay:0.6s]" />
            <div className="absolute inset-12 rounded-full bg-gradient-to-br from-primary-blue/50 to-primary-emerald/50 animate-pulse [animation-delay:0.9s]" />
            <div className="absolute inset-16 rounded-full bg-gradient-to-br from-primary-blue/60 to-primary-emerald/60 animate-pulse [animation-delay:1.2s]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary">RD</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
