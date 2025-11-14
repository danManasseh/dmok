export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  detailedDescription: string;
  technologies: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Cloud-Based Financial Analytics Platform',
    description: 'A cloud-native data pipeline for processing and analyzing financial data at scale.',
    image: 'https://c.animaapp.com/mhxune92GUYq1t/img/ai_3.png',
    category: 'Cloud',
    tags: ['AWS', 'Python', 'Data Pipeline', 'Security'],
    technologies: ['AWS Lambda', 'S3', 'IAM', 'Python', 'CloudWatch'],
    highlights: [
      'Developed cloud-native data pipeline using AWS Lambda and S3',
      'Improved platform efficiency for handling large-scale data sets',
      'Implemented automated security controls for data protection',
      'Managed user access via AWS IAM policies'
    ],
    detailedDescription: 'This personal project demonstrates expertise in cloud architecture and data engineering. Built a serverless data pipeline that processes financial data in real-time, with automated security controls and scalable infrastructure. The platform handles large volumes of data efficiently while maintaining strict security and compliance standards.'
  },
  {
    id: '2',
    title: 'Crowdfunding Platform',
    description: 'A distributed crowdfunding platform with mobile money integration for seamless transactions.',
    image: 'https://c.animaapp.com/mhxune92GUYq1t/img/ai_4.png',
    category: 'Backend',
    tags: ['Python', 'Distributed Systems', 'Payment Integration', 'Cloud'],
    technologies: ['Python', 'PostgreSQL', 'REST APIs', 'Cloud Infrastructure', 'Mobile Money API'],
    highlights: [
      'Developed backend for student crowdfunding platform',
      'Integrated mobile money systems for seamless transactions',
      'Designed distributed architecture for scalability and security',
      'Led team deployment on cloud infrastructure',
      'Implemented security protocols for financial data protection'
    ],
    detailedDescription: 'University capstone project that involved building a complete backend system for a crowdfunding platform. Led a team of three in designing and deploying a distributed architecture that ensures scalability, security, and reliability. Integrated with mobile money payment systems to enable seamless financial transactions while maintaining strict security protocols.'
  },
  {
    id: '3',
    title: 'Automated CI/CD Pipeline',
    description: 'Infrastructure as Code solution for automated deployment and testing workflows.',
    image: 'https://c.animaapp.com/mhxune92GUYq1t/img/ai_5.png',
    category: 'DevOps',
    tags: ['CI/CD', 'Docker', 'Kubernetes', 'Jenkins'],
    technologies: ['Jenkins', 'Docker', 'Kubernetes', 'Bash', 'Git'],
    highlights: [
      'Built automated deployment pipelines with CI/CD tools',
      'Implemented Infrastructure as Code practices',
      'Containerized microservices using Docker',
      'Orchestrated deployments with Kubernetes',
      'Reduced deployment time by 60%'
    ],
    detailedDescription: 'Developed during my internship at ALX AFRICA, this project showcases modern DevOps practices. Created a complete CI/CD pipeline that automates testing, building, and deployment of microservices. Used containerization and orchestration to ensure consistent environments across development, staging, and production.'
  },
  {
    id: '4',
    title: 'Neural Network Model Training Tool',
    description: 'A comprehensive ML training framework with modular pipelines for automated experiments and statistical reporting.',
    image: 'https://c.animaapp.com/mhxune92GUYq1t/img/ai_3.png',
    category: 'Machine Learning',
    tags: ['Python', 'Machine Learning', 'Neural Networks', 'Research'],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'NumPy', 'Pandas', 'Matplotlib'],
    highlights: [
      'Built modular training and evaluation pipelines for neural networks',
      'Automated experiment workflows with reproducible configurations',
      'Implemented statistical reporting and visualization tools',
      'Gained experience in empirical ML evaluation and reproducibility',
      'Designed extensible architecture for multiple model types'
    ],
    detailedDescription: 'Graduate research project focused on creating a robust framework for training and evaluating neural network models. The tool features modular pipelines that support various architectures, automated hyperparameter tuning, and comprehensive statistical analysis. Emphasis on reproducibility and empirical evaluation made this tool valuable for academic research and experimentation.'
  }
];

export const categories = ['All', 'Cloud', 'Backend', 'DevOps', 'Machine Learning'];
