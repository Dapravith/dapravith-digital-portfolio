
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaAngular,
  FaVuejs,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiNginx,
  SiJenkins,
  SiKeycloak,
  SiJsonwebtokens,
  SiAuth0,
  SiOpenid,
  SiC,
  SiCplusplus,
  SiTypescript,
  SiJavascript,
  SiBitbucket,
} from "react-icons/si";

const SkillsSection = () => {
  const categories = {
    programming: "Programming Languages",
    webDev: "Web Development",
    databases: "Databases",
    devOps: "DevOps",
    security: "Security"
  };

  const skillIcons = {
    programming: {
      "C": <SiC className="text-2xl text-blue-600" />,
      "C++": <SiCplusplus className="text-2xl text-blue-700" />,
      "Python": <FaPython className="text-2xl text-yellow-600" />,
      "Java": <FaJava className="text-2xl text-red-600" />,
      "JavaScript": <SiJavascript className="text-2xl text-yellow-400" />,
      "TypeScript": <SiTypescript className="text-2xl text-blue-500" />,
    },
    webDev: {
      "ReactJS": <FaReact className="text-2xl text-blue-400" />,
      "Angular": <FaAngular className="text-2xl text-red-500" />,
      "Vue": <FaVuejs className="text-2xl text-green-500" />,
      "NodeJS": <FaNodeJs className="text-2xl text-green-600" />,
      "ExpressJS": <SiExpress className="text-2xl text-gray-600" />,
      "NestJS": <SiNestjs className="text-2xl text-red-600" />,
      "Spring Boot": <SiSpringboot className="text-2xl text-green-600" />,
    },
    databases: {
      "MySQL": <SiMysql className="text-2xl text-blue-600" />,
      "MongoDB": <SiMongodb className="text-2xl text-green-600" />,
      "PostgresQL": <SiPostgresql className="text-2xl text-blue-400" />,
    },
    devOps: {
      "Docker": <FaDocker className="text-2xl text-blue-500" />,
      "Nginx": <SiNginx className="text-2xl text-green-600" />,
      "Jenkins": <SiJenkins className="text-2xl text-red-500" />,
      "Portainer.io": <FaDocker className="text-2xl text-blue-400" />,
      "AWS": <FaAws className="text-2xl text-orange-400" />,
      "Bitbucket": <SiBitbucket className="text-2xl text-blue-600" />,
      "CI/CD": <SiJenkins className="text-2xl text-gray-600" />,
    },
    security: {
      "OAuth2.0": <SiAuth0 className="text-2xl text-blue-600" />,
      "Keycloak": <SiKeycloak className="text-2xl text-red-600" />,
      "JWT": <SiJsonwebtokens className="text-2xl text-purple-600" />,
      "OpenID Connect": <SiOpenid className="text-2xl text-orange-600" />,
      "SSO": <SiKeycloak className="text-2xl text-green-600" />,
    },
  };

  const skillItems = {
    programming: ["C", "C++", "Python", "Java", "JavaScript", "TypeScript"],
    webDev: ["ReactJS", "Angular", "Vue", "NodeJS", "ExpressJS", "NestJS", "Spring Boot"],
    databases: ["MySQL", "MongoDB", "PostgresQL"],
    devOps: ["Docker", "Nginx", "Jenkins", "Portainer.io", "AWS", "Bitbucket", "CI/CD"],
    security: ["OAuth2.0", "Keycloak", "JWT", "OpenID Connect", "SSO"]
  };

  return (
    <section id="skills" className="py-16 bg-muted/30">
      <motion.div
        className="container max-w-7xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Skills
          </h2>
          <p className="text-muted-foreground text-lg">Technical Skills</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(categories).map(([category, categoryName]) => (
            <Card key={category} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 p-4">
                <h3 className="text-xl font-semibold text-center">
                  {categoryName}
                </h3>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-4 justify-center">
                  {skillItems[category as keyof typeof skillItems]?.map((skill) => (
                    <div
                      key={skill}
                      className="flex flex-col items-center justify-center p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <div className="mb-2">
                        {skillIcons[category as keyof typeof skillIcons]?.[skill] ||
                          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                            {skill.charAt(0)}
                          </div>
                        }
                      </div>
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
