
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
  FaLinux,
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
  SiNextdotjs,
  SiTailwindcss,
  SiShadcnui,
  SiGraphql,
  SiRabbitmq,
  SiElasticsearch,
  SiPrometheus,
  SiGrafana,
  SiGithub,
  SiSonarqube,
} from "react-icons/si";

const SkillsSection = () => {
  const { t } = useTranslation("skills");

  const categories = {
    frontend: t("categories.frontend"),
    backendApis: t("categories.backendApis"),
    databases: t("categories.databases"),
    devOpsCloud: t("categories.devOpsCloud"),
    qualityMonitoring: t("categories.qualityMonitoring"),
    systemArchitect: t("categories.systemArchitect")
  };

  const skillIcons = {
    frontend: {
      "React": <FaReact className="text-2xl text-blue-400" />,
      "Angular": <FaAngular className="text-2xl text-red-500" />,
      "Next.js": <SiNextdotjs className="text-2xl text-black dark:text-white" />,
      "Tailwind CSS": <SiTailwindcss className="text-2xl text-blue-400" />,
      "ShadCN UI": <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs font-bold">UI</div>,
      "TypeScript": <SiTypescript className="text-2xl text-blue-500" />,
      "JavaScript": <SiJavascript className="text-2xl text-yellow-400" />,
    },
    backendApis: {
      "Java": <FaJava className="text-2xl text-red-600" />,
      "Spring Boot": <SiSpringboot className="text-2xl text-green-600" />,
      "Node.js": <FaNodeJs className="text-2xl text-green-600" />,
      "NestJS": <SiNestjs className="text-2xl text-red-600" />,
      "JWT": <SiJsonwebtokens className="text-2xl text-purple-600" />,
      "OAuth2.0": <SiAuth0 className="text-2xl text-blue-600" />,
      "REST APIs": <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold">API</div>,
      "GraphQL": <SiGraphql className="text-2xl text-pink-500" />,
    },
    databases: {
      "MySQL": <SiMysql className="text-2xl text-blue-600" />,
      "MongoDB": <SiMongodb className="text-2xl text-green-600" />,
      "PostgreSQL": <SiPostgresql className="text-2xl text-blue-400" />,
      "Redis": <SiRedis className="text-2xl text-red-500" />,
      "Kafka": <SiApachekafka className="text-2xl text-gray-800" />,
      "RabbitMQ": <SiRabbitmq className="text-2xl text-orange-500" />,
      "Elasticsearch": <SiElasticsearch className="text-2xl text-yellow-500" />,
    },
    devOpsCloud: {
      "Docker": <FaDocker className="text-2xl text-blue-500" />,
      "Nginx": <SiNginx className="text-2xl text-green-600" />,
      "Jenkins": <SiJenkins className="text-2xl text-red-500" />,
      "SSL Certbot Let's Encrypt": <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center text-xs font-bold">SSL</div>,
      "CI/CD": <SiJenkins className="text-2xl text-gray-600" />,
      "Ansible": <SiAnsible className="text-2xl text-red-600" />,
      "Kubernetes": <SiKubernetes className="text-2xl text-blue-500" />,
      "Linux": <FaLinux className="text-2xl text-black dark:text-white" />,
      "AWS": <FaAws className="text-2xl text-orange-400" />,
    },
    qualityMonitoring: {
      "Grafana": <SiGrafana className="text-2xl text-orange-500" />,
      "Prometheus": <SiPrometheus className="text-2xl text-orange-600" />,
      "Git/GitHub": <SiGithub className="text-2xl text-gray-800 dark:text-white" />,
      "SonarQube": <SiSonarqube className="text-2xl text-blue-500" />,
    },
    systemArchitect: {
      "Microservices Architecture": <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center text-xs font-bold">μS</div>,
      "Distributed Systems": <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold">DS</div>,
      "System Design": <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold">SD</div>,
      "Scalable Architecture": <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-xs font-bold">SA</div>,
    }
  };

  // Updated skill proficiency levels
  const skillLevels = {
    frontend: {
      "React": 95,
      "Angular": 85,
      "Next.js": 80,
      "Tailwind CSS": 90,
      "ShadCN UI": 85,
      "TypeScript": 90,
      "JavaScript": 95
    },
    backendApis: {
      "Java": 95,
      "Spring Boot": 95,
      "Node.js": 85,
      "NestJS": 80,
      "JWT": 90,
      "OAuth2.0": 85,
      "REST APIs": 95,
      "GraphQL": 80
    },
    databases: {
      "MySQL": 90,
      "MongoDB": 85,
      "PostgreSQL": 90,
      "Redis": 90,
      "Kafka": 85,
      "RabbitMQ": 80,
      "Elasticsearch": 85
    },
    devOpsCloud: {
      "Docker": 90,
      "Nginx": 85,
      "Jenkins": 80,
      "SSL Certbot Let's Encrypt": 85,
      "CI/CD": 90,
      "Ansible": 80,
      "Kubernetes": 85,
      "Linux": 85,
      "AWS": 85
    },
    qualityMonitoring: {
      "Grafana": 80,
      "Prometheus": 80,
      "Git/GitHub": 90,
      "SonarQube": 85
    },
    systemArchitect: {
      "Microservices Architecture": 90,
      "Distributed Systems": 85,
      "System Design": 90,
      "Scalable Architecture": 90
    }
  };

  const skillItems = {
    frontend: t("items.frontend", { returnObjects: true }) as string[],
    backendApis: t("items.backendApis", { returnObjects: true }) as string[],
    databases: t("items.databases", { returnObjects: true }) as string[],
    devOpsCloud: t("items.devOpsCloud", { returnObjects: true }) as string[],
    qualityMonitoring: t("items.qualityMonitoring", { returnObjects: true }) as string[],
    systemArchitect: t("items.systemArchitect", { returnObjects: true }) as string[]
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
                    const level = skillLevels[category as keyof typeof skillLevels]?.[skill] || 80;
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
