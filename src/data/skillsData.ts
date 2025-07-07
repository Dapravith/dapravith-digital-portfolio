
import {
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaLinux,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiNginx,
  SiJenkins,
  SiRedis,
  SiApachekafka,
  SiKubernetes,
  SiGraphql,
  SiRabbitmq,
  SiElasticsearch,
  SiSonarqube,
  SiPrometheus,
  SiGrafana,
  SiGithub,
  SiSpring,
} from "react-icons/si";

export interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
}

export interface SkillCategory {
  key: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    key: "backendApis",
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
    key: "databasesMessaging",
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
    key: "devopsCloud",
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
    key: "qualityMonitoring",
    skills: [
      { name: "SonarQube", level: 85, icon: <SiSonarqube className="text-blue-600" /> },
      { name: "Git/GitHub", level: 90, icon: <SiGithub className="text-gray-800" /> },
      { name: "Prometheus", level: 80, icon: <SiPrometheus className="text-orange-500" /> },
      { name: "Grafana", level: 80, icon: <SiGrafana className="text-orange-600" /> },
    ]
  }
];
