import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useTranslation } from "react-i18next";
import {
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaAngular,
  FaVuejs,
  FaGitAlt,
  FaFigma,
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
  SiAnsible,
  SiKubernetes,
  SiRedis,
  SiApachekafka,
  SiIntellijidea,
  SiPostman,
  SiSwagger,
  SiVercel,
  SiCloudflare,
  SiGithubactions,
} from "react-icons/si";

const SkillsSection = () => {
  const { t } = useTranslation("skills");

  const categories = {
    webDev: t("categories.webDev"),
    databases: t("categories.databases"),
    devOps: t("categories.devOps"),
    tools: t("categories.tools")
  };

  const skillIcons = {
    webDev: {
      "C": <SiC className="text-2xl text-blue-600" />,
      "C++": <SiCplusplus className="text-2xl text-blue-700" />,
      "Python": <FaPython className="text-2xl text-yellow-600" />,
      "Java": <FaJava className="text-2xl text-red-600" />,
      "JavaScript": <SiJavascript className="text-2xl text-yellow-400" />,
      "TypeScript": <SiTypescript className="text-2xl text-blue-500" />,
      "ReactJS": <FaReact className="text-2xl text-blue-400" />,
      "Angular": <FaAngular className="text-2xl text-red-500" />,
      "Vue": <FaVuejs className="text-2xl text-green-500" />,
      "NodeJS": <FaNodeJs className="text-2xl text-green-600" />,
      "ExpressJS": <SiExpress className="text-2xl text-gray-600" />,
      "NestJS": <SiNestjs className="text-2xl text-red-600" />,
      "Spring Boot": <SiSpringboot className="text-2xl text-green-600" />,
      "Master Authentication and Authorization": <SiKeycloak className="text-2xl text-blue-600" />,
      "OAuth2.0": <SiAuth0 className="text-2xl text-blue-600" />,
      "Keycloak": <SiKeycloak className="text-2xl text-red-600" />,
      "JWT": <SiJsonwebtokens className="text-2xl text-purple-600" />,
      "OpenID Connect": <SiOpenid className="text-2xl text-orange-600" />,
      "SSO": <SiKeycloak className="text-2xl text-green-600" />,
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
      "Ansible": <SiAnsible className="text-2xl text-red-600" />,
      "Kubernetes": <SiKubernetes className="text-2xl text-blue-500" />,
      "Microservices": <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold">MS</div>,
      "Redis": <SiRedis className="text-2xl text-red-500" />,
      "Kafka": <SiApachekafka className="text-2xl text-gray-800" />,
      "GitHub Actions": <SiGithubactions className="text-2xl text-gray-800" />,
      "Vercel": <SiVercel className="text-2xl text-black" />,
      "Cloudflare": <SiCloudflare className="text-2xl text-orange-500" />,
      "Deployment": <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">D</div>,
    },
    tools: {
      "VSCode": <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">VS</div>,
      "IntelliJ IDEA": <SiIntellijidea className="text-2xl text-red-600" />,
      "Git": <FaGitAlt className="text-2xl text-red-500" />,
      "Figma": <FaFigma className="text-2xl text-purple-500" />,
      "Postman": <SiPostman className="text-2xl text-orange-500" />,
      "Swagger API": <SiSwagger className="text-2xl text-green-500" />,
      "Draw.io": <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold">D</div>,
      "JWT": <SiJsonwebtokens className="text-2xl text-purple-600" />,
    }
  };

  // Skill proficiency levels (percentages)
  const skillLevels = {
    webDev: {
      "Java": 90,
      "JavaScript": 85,
      "TypeScript": 80,
      "ReactJS": 85,
      "Angular": 75,
      "NodeJS": 80,
      "ExpressJS": 85,
      "NestJS": 75,
      "Spring Boot": 90,
      "Master Authentication and Authorization": 85,
      "JWT": 80
    },
    databases: {
      "MySQL": 85,
      "MongoDB": 80,
      "PostgresQL": 75
    },
    devOps: {
      "Docker": 85,
      "Nginx": 70,
      "Jenkins": 75,
      "AWS": 70,
      "Kubernetes": 65,
      "Redis": 70,
      "Kafka": 60,
      "Deployment": 80
    },
    tools: {
      "VSCode": 90,
      "IntelliJ IDEA": 85,
      "Git": 90,
      "Figma": 70,
      "Postman": 85,
      "Swagger API": 80,
      "JWT": 80
    }
  };

  const skillItems = {
    webDev: t("items.webDev", { returnObjects: true }) as string[],
    databases: t("items.databases", { returnObjects: true }) as string[],
    devOps: t("items.devOps", { returnObjects: true }) as string[],
    tools: t("items.tools", { returnObjects: true }) as string[]
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
            {t("title")}
          </h2>
          <p className="text-muted-foreground text-lg">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(categories).map(([category, categoryName]) => (
            <Card key={category} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4">
                <h3 className="text-xl font-semibold text-center">
                  {categoryName}
                </h3>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {skillItems[category as keyof typeof skillItems]?.map((skill) => {
                    const level = skillLevels[category as keyof typeof skillLevels]?.[skill] || 70;
                    return (
                      <motion.div
                        key={skill}
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            {skillIcons[category as keyof typeof skillIcons]?.[skill] ||
                              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold">
                                {skill.charAt(0)}
                              </div>
                            }
                            <span className="text-sm font-medium">{skill}</span>
                          </div>
                          <span className="text-sm font-semibold text-primary">{level}%</span>
                        </div>
                        <Progress 
                          value={level} 
                          className="h-2 bg-gray-200 dark:bg-gray-700"
                        />
                      </motion.div>
                    );
                  })}
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
