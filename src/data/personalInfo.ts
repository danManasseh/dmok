export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github?: string;
  tagline: string;
  bio: string[];
  skills: {
    category: string;
    items: string[];
  }[];
}

export const personalInfo: PersonalInfo = {
  name: "Daniel Manasseh Ofei Kwafo",
  title: "Software Engineer",
  location: "St. John's, NL, Canada",
  email: "danielmanasseh100@gmail.com",
  phone: "(709) 725-0460",
  linkedin: "https://linkedin.com/in/daniel-kwafo",
  tagline: "Building scalable, maintainable applications through clean, efficient code",
  bio: [
    "Detail-oriented and motivated software engineer with strong proficiency in Python, JavaScript, and system design. Passionate about building scalable, maintainable applications and solving complex problems through clean, efficient code.",
    "I specialize in cloud-native architectures, backend development, and DevOps practices. My approach combines technical expertise with collaborative teamwork, ensuring that every project meets both business objectives and user needs.",
    "Currently seeking opportunities to contribute to high-impact products, collaborate in Agile teams, and grow through continuous learning and mentorship."
  ],
  skills: [
    {
      category: "Languages",
      items: ["Python", "JavaScript", "Java", "Bash", "SQL"]
    },
    {
      category: "Web & APIs",
      items: ["HTML5", "CSS3", "REST APIs", "JSON", "XML"]
    },
    {
      category: "Frameworks & Tools",
      items: ["Git", "Docker", "Kubernetes", "Jenkins", "Spring Boot"]
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Oracle"]
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS", "Azure", "CI/CD", "Infrastructure as Code"]
    },
    {
      category: "Practices",
      items: ["OOP", "Agile/Scrum", "TDD", "Microservices"]
    }
  ]
};
