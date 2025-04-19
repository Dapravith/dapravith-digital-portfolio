import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
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
    <section id="about" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/30">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          className="flex flex-col gap-16 md:gap-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className="text-center" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Professional Background
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="order-2 md:order-1 flex justify-center"
              variants={itemVariants}
            >
              <Avatar className="w-64 h-64 border-4 border-primary/50 shadow-lg">
                <AvatarImage 
                  src="/lovable-uploads/087f7e66-308a-4440-9671-fcfd0946758d.png" 
                  alt="Rotha Dapravith Profile" 
                  className="object-cover"
                />
                <AvatarFallback>RD</AvatarFallback>
              </Avatar>
            </motion.div>

            <motion.div 
              className="order-1 md:order-2 space-y-6"
              variants={itemVariants}
            >
              <p className="text-lg">
                I am a Full-Stack Developer with over 2 years of experience in building web applications and implementing DevOps solutions. With a strong foundation in Java Spring Boot, React, and modern DevOps practices, I focus on creating efficient, secure, and user-friendly applications.
              </p>
              <p>
                My experience includes developing enterprise applications, implementing Single Sign-On systems, and containerizing applications with Docker. I am passionate about writing clean, maintainable code and automating deployment processes.
              </p>
              <p>
                I hold a degree in Information Technology and have completed specialized training in DevOps, including containerization, CI/CD pipelines, and infrastructure as code.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover-scale">
                  <h4 className="text-2xl font-bold gradient-text">2+</h4>
                  <p className="text-gray-600 dark:text-gray-400">Years Experience</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover-scale">
                  <h4 className="text-2xl font-bold gradient-text">5+</h4>
                  <p className="text-gray-600 dark:text-gray-400">Projects</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
