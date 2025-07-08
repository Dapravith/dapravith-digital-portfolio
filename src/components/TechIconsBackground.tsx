import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaAngular,
  FaJava,
  FaLinux,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiNestjs,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiTypescript,
  SiJavascript,
  SiKubernetes,
  SiNextdotjs,
  SiTailwindcss,
  SiGraphql,
} from "react-icons/si";

const techIcons = [
  { Icon: FaReact, color: "text-blue-400", size: "text-2xl" },
  { Icon: FaNodeJs, color: "text-green-600", size: "text-3xl" },
  { Icon: FaDocker, color: "text-blue-500", size: "text-2xl" },
  { Icon: SiTypescript, color: "text-blue-500", size: "text-2xl" },
  { Icon: SiJavascript, color: "text-yellow-400", size: "text-2xl" },
  { Icon: FaAngular, color: "text-red-500", size: "text-3xl" },
  { Icon: FaJava, color: "text-red-600", size: "text-2xl" },
  { Icon: SiSpringboot, color: "text-green-600", size: "text-2xl" },
  { Icon: SiMongodb, color: "text-green-600", size: "text-3xl" },
  { Icon: SiMysql, color: "text-blue-600", size: "text-2xl" },
  { Icon: SiKubernetes, color: "text-blue-500", size: "text-2xl" },
  { Icon: SiNextdotjs, color: "text-foreground", size: "text-2xl" },
  { Icon: SiTailwindcss, color: "text-blue-400", size: "text-2xl" },
  { Icon: SiGraphql, color: "text-pink-500", size: "text-2xl" },
  { Icon: FaAws, color: "text-orange-400", size: "text-3xl" },
  { Icon: FaLinux, color: "text-foreground", size: "text-2xl" },
];

const TechIconsBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {techIcons.map((tech, index) => (
        <motion.div
          key={index}
          className={`absolute ${tech.color} ${tech.size}`}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0.3,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: 360,
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
            delay: Math.random() * 5,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          <tech.Icon />
        </motion.div>
      ))}
    </div>
  );
};

export default TechIconsBackground;