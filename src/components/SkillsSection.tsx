
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
  SiGraphql,
  SiRabbitmq,
  SiElasticsearch,
  SiSonarqube,
  SiPrometheus,
  SiGrafana,
  SiGithub,
  SiSpring,
} from "react-icons/si";

const SkillsSection = () => {
  const { t } = useTranslation("skills");

  const skillCategories = [
    {
      title: "Backend & APIs",
      description: "Expertise in building scalable and robust backend systems with modern frameworks and tools.",
      skills: [
        { name: "Java/Spring Boot", level: 95, icon: <FaJava className="text-red-600" /> },
        { name: "Node.js", level: 85, icon: <FaNodeJs className="text-green-600" /> },
        { name: "Python", level: 80, icon: <FaPython className="text-yellow-600" /> },
        { name: "GraphQL", level: 85, icon: <SiGraphql className="text-pink-600" /> },
        { name: "REST APIs", level: 95, icon: <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">R</div> },
        { name: "Spring Cloud", level: 90, icon: <SiSpring className="text-green-600" /> },
      ]
    },
    {
      title: "Databases & Messaging",
      description: "Strong knowledge of various database systems and message brokers for different use cases.",
      skills: [
        { name: "PostgreSQL", level: 90, icon: <SiPostgresql className="text-blue-400" /> },
        { name: "MongoDB", level: 85, icon: <SiMongodb className="text-green-600" /> },
        { name: "Redis", level: 90, icon: <SiRedis className="text-red-500" /> },
        { name: "Kafka", level: 85, icon: <SiApachekafka className="text-gray-800" /> },
        { name: "RabbitMQ", level: 80, icon: <SiRabbitmq className="text-orange-500" /> },
        { name: "Elasticsearch", level: 85, icon: <SiElasticsearch className="text-yellow-500" /> },
      ]
    },
    {
      title: "DevOps & Cloud",
      description: "Experience with modern DevOps practices and cloud infrastructure management.",
      skills: [
        { name: "Docker", level: 90, icon: <FaDocker className="text-blue-500" /> },
        { name: "Kubernetes", level: 85, icon: <SiKubernetes className="text-blue-500" /> },
        { name: "AWS", level: 85, icon: <FaAws className="text-orange-400" /> },
        { name: "Jenkins", level: 80, icon: <SiJenkins className="text-red-500" /> },
        { name: "Linux", level: 85, icon: <FaLinux className="text-gray-800" /> },
        { name: "Nginx", level: 85, icon: <SiNginx className="text-green-600" /> },
      ]
    },
    {
      title: "Quality & Monitoring",
      description: "Focus on code quality, testing, and system monitoring for reliable applications.",
      skills: [
        { name: "SonarQube", level: 85, icon: <SiSonarqube className="text-blue-600" /> },
        { name: "Git/GitHub", level: 90, icon: <SiGithub className="text-gray-800" /> },
        { name: "Prometheus", level: 80, icon: <SiPrometheus className="text-orange-500" /> },
        { name: "Grafana", level: 80, icon: <SiGrafana className="text-orange-600" /> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <motion.div
        className="container max-w-7xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-400">
            02. Skills & Technologies
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {category.title}
                    </h3>
                    <p className="text-slate-300 text-sm">
                      {category.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <div className="text-lg">
                              {skill.icon}
                            </div>
                            <span className="text-white font-medium text-sm">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-cyan-400 font-semibold text-sm">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
