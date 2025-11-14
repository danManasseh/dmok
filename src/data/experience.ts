export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "1",
    title: "IT Analyst",
    company: "Carnegie Learning Zorbits, Inc.",
    location: "St. John's, Canada",
    period: "Jul 2024 - Jun 2025",
    description: [
      "Automated support tasks using Python and Bash, improving response time and efficiency",
      "Delivered frontline support to internal teams, resolving software and platform issues",
      "Led the transition to CrowdStrike endpoint protection and ensured system compliance",
      "Used tools like SolarWinds and Jira for monitoring, documentation, and tracking issues"
    ],
    technologies: ["Python", "Bash", "CrowdStrike", "SolarWinds", "Jira"]
  },
  {
    id: "2",
    title: "Graduate Associate (Application Integration Manager)",
    company: "Huawei",
    location: "Greater Accra, Ghana",
    period: "Oct 2021 - Aug 2022",
    description: [
      "Led integration of internal systems by evaluating technologies and managing team deliverables",
      "Ensured seamless collaboration between cross-functional teams and third-party services",
      "Maintained compliance, project documentation, and monitored data pipelines",
      "Gained exposure to large-scale infrastructure and secure software design"
    ],
    technologies: ["System Integration", "API Management", "Data Pipelines", "Documentation"]
  },
  {
    id: "3",
    title: "Software Engineering Intern",
    company: "ALX AFRICA",
    location: "Remote",
    period: "Dec 2021 - Aug 2022",
    description: [
      "Contributed to cloud-based microservices using Python and C",
      "Built automated deployment pipelines with CI/CD tools and Infrastructure as Code",
      "Participated in peer code reviews and followed best practices for scalability and security",
      "Developed modular services and helped maintain open-source standards across projects"
    ],
    technologies: ["Python", "C", "CI/CD", "Microservices", "Infrastructure as Code"]
  },
  {
    id: "4",
    title: "Software Engineer",
    company: "Npontu Technologies",
    location: "Ghana (Remote)",
    period: "Jun 2020 - Sep 2020",
    description: [
      "Developed and maintained web application features using Python and JavaScript",
      "Collaborated with frontend engineers to implement functional UI enhancements",
      "Participated in Agile sprints, code reviews, and backend optimization",
      "Integrated APIs and implemented unit tests to validate business logic"
    ],
    technologies: ["Python", "JavaScript", "REST APIs", "Agile", "Unit Testing"]
  },
  {
    id: "5",
    title: "Data Analyst",
    company: "Datamaker_GH",
    location: "Ghana",
    period: "Jun 2019 - Sep 2019",
    description: [
      "Performed data analysis using Python to generate actionable insights",
      "Built reports and dashboards to communicate patterns and anomalies",
      "Worked with raw datasets to clean, normalize, and visualize metrics",
      "Supported decision-making processes with data-driven reports"
    ],
    technologies: ["Python", "Data Analysis", "Data Visualization", "Reporting"]
  }
];
