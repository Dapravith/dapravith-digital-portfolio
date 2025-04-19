
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGithub,
  FaAngular,
  FaVuejs,
  FaAws,
  FaWindows,
  FaLinux,
  FaApple,
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
  SiFigma,
  SiC,
  SiCplusplus,
  SiTypescript,
  SiJavascript,
  SiBitbucket,
} from "react-icons/si";
import { LuFileStack } from "react-icons/lu";

const SkillsSection = () => {
  const { t } = useTranslation("skills");

  // Define skill icons mapping
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
      "Portainer.io": <LuFileStack className="text-2xl text-blue-400" />,
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
    os: {
      "Windows": <FaWindows className="text-2xl text-blue-500" />,
      "macOS": <FaApple className="text-2xl text-gray-600" />,
      "Linux": <FaLinux className="text-2xl text-yellow-600" />,
      "Ubuntu Server": <FaLinux className="text-2xl text-orange-600" />,
    },
    design: {
      "Figma": <SiFigma className="text-2xl text-purple-500" />,
      "draw.io": <LuFileStack className="text-2xl text-blue-400" />,
      "UML": <LuFileStack className="text-2xl text-gray-600" />,
    },
    versionControl: {
      "GitHub": <FaGithub className="text-2xl text-gray-800 dark:text-gray-200" />,
    },
    languages: {
      "English": <span className="text-2xl">🇬🇧</span>,
      "Khmer": <span className="text-2xl">🇰🇭</span>,
    },
  };

  // Get all skill categories from translations
  const categoriesObj = t("categories", { returnObjects: true }) as Record<string, string>;
  const categories = Object.keys(categoriesObj);

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
            {t("title")}
          </h2>
          <p className="text-muted-foreground text-lg">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            // Get skill items as array safely
            const skillItems = t(`items.${category}`, { returnObjects: true });
            const skillsArray = Array.isArray(skillItems) ? skillItems : [];
            
            return (
              <Card key={category} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 p-4">
                  <h3 className="text-xl font-semibold text-center">
                    {t(`categories.${category}`)}
                  </h3>
                </div>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-4 justify-center">
                    {skillsArray.map((skill: string) => (
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
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
