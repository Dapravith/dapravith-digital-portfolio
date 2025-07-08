
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaServer, FaKey, FaTerminal, FaCode, FaDatabase, FaCloud } from "react-icons/fa";
import { SiDocker, SiKubernetes, SiLinux } from "react-icons/si";

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
          setTimeout(onComplete, 300);
          return 100;
        }
        return newProgress;
      });
    }, 25);
    
    return () => clearInterval(interval);
  }, [onComplete]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.5 } }
  };
  
  const progressVariants = {
    hidden: { width: "0%" },
    visible: { width: `${progress}%` }
  };
  
  const serverIcons = [
    { Icon: FaServer, delay: 0.2, color: "text-blue-500" },
    { Icon: FaKey, delay: 0.4, color: "text-green-500" },
    { Icon: FaTerminal, delay: 0.6, color: "text-purple-500" },
    { Icon: SiDocker, delay: 0.8, color: "text-blue-400" },
    { Icon: SiKubernetes, delay: 1.0, color: "text-blue-600" },
    { Icon: FaDatabase, delay: 1.2, color: "text-orange-500" },
    { Icon: FaCloud, delay: 1.4, color: "text-gray-500" },
    { Icon: SiLinux, delay: 1.6, color: "text-black dark:text-white" },
  ];
  
  const codeLines = [
    "ssh -i ~/.ssh/id_rsa dapravith@server",
    "$ sudo docker-compose up -d",
    "$ kubectl apply -f deployment.yaml", 
    "$ git clone https://github.com/dapravith/portfolio",
    "$ npm run build && npm start",
    "✓ Server deployment successful!"
  ];
  
  return (
    <motion.div 
      className="fixed inset-0 flex flex-col items-center justify-center bg-background z-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Name Animation */}
      <motion.div 
        className="mb-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent"
          animate={{ 
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            backgroundSize: "200% 200%"
          }}
        >
          Dapravith
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p 
          className="text-lg md:text-xl text-center text-muted-foreground mt-2 font-medium"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Fullstack Developer
        </motion.p>
      </motion.div>
      
      {/* SSH/Server Icons Animation */}
      <motion.div 
        className="flex flex-wrap justify-center gap-4 mb-8 max-w-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        {serverIcons.map(({ Icon, delay, color }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ 
              opacity: [0, 1, 0.7],
              scale: [0.5, 1.2, 1],
              y: [20, -5, 0]
            }}
            transition={{
              duration: 1.5,
              delay: delay,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut"
            }}
          >
            <Icon className={`text-2xl ${color}`} />
          </motion.div>
        ))}
      </motion.div>
      
      {/* Terminal Code Animation */}
      <div className="w-80 h-40 bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-hidden mb-8 font-mono text-sm border border-gray-700">
        <div className="flex items-center mb-2 text-gray-400">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="ml-2 text-xs">SSH Terminal</span>
        </div>
        {codeLines.slice(0, Math.ceil(codeLines.length * progress / 100)).map((line, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.3 }}
            className={`text-sm mb-1 ${
              line.includes('✓') ? 'text-green-400' : 
              line.includes('$') ? 'text-blue-400' : 
              line.includes('ssh') ? 'text-purple-400' : 
              'text-gray-300'
            }`}
          >
            {line}
          </motion.div>
        ))}
        
        {/* Cursor */}
        <motion.div
          className="inline-block w-2 h-4 bg-green-400"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </div>
      
      {/* Progress Bar */}
      <div className="w-80 h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-primary via-purple-500 to-secondary relative"
          variants={progressVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.1 }}
        >
          {/* Animated shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
      
      <motion.div 
        className="mt-4 text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <FaCode className="text-primary" />
        <span>Loading... {progress}%</span>
      </motion.div>
    </motion.div>
  );
};

export default LoadingAnimation;
