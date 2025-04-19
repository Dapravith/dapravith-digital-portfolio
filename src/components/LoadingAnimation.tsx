
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation = ({ onComplete }: LoadingAnimationProps) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 1;
        if (newProgress >= 100) {
          clearInterval(interval);
          // Delay the completion to let the animation finish visually
          setTimeout(onComplete, 300);
          return 100;
        }
        return newProgress;
      });
    }, 20); // 2 seconds total (20ms * 100)
    
    return () => clearInterval(interval);
  }, [onComplete]);
  
  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.5 } }
  };
  
  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.5 
      }
    }
  };
  
  const progressVariants = {
    hidden: { width: "0%" },
    visible: { width: `${progress}%` }
  };
  
  const codeLines = [
    "const portfolio = new Portfolio();",
    "portfolio.initialize();",
    "portfolio.loadComponents();",
    "await portfolio.fetchExperience();",
    "await portfolio.fetchProjects();",
    "portfolio.render();"
  ];
  
  return (
    <motion.div 
      className="fixed inset-0 flex flex-col items-center justify-center bg-background z-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div 
        className="text-4xl font-bold mb-6 gradient-text"
        variants={logoVariants}
      >
        RD
      </motion.div>
      
      <div className="w-64 h-36 bg-gray-100 dark:bg-gray-800 rounded-md p-3 overflow-hidden mb-8 font-mono text-xs">
        {codeLines.slice(0, Math.ceil(codeLines.length * progress / 100)).map((line, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="text-gray-700 dark:text-gray-300"
          >
            {line}
          </motion.div>
        ))}
      </div>
      
      <div className="w-64 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-primary-blue to-primary-emerald"
          variants={progressVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.1 }}
        />
      </div>
      
      <motion.div 
        className="mt-3 text-sm text-gray-500 dark:text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {progress}%
      </motion.div>
    </motion.div>
  );
};

export default LoadingAnimation;
