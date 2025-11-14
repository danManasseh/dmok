export interface Certification {
  id: string;
  name: string;
  issuer: string;
  status: 'completed' | 'in-progress';
  date?: string;
  credentialUrl?: string;
}

export const certifications: Certification[] = [
  {
    id: "1",
    name: "AWS Certified Developer Associate",
    issuer: "Amazon Web Services",
    status: "in-progress"
  },
  {
    id: "2",
    name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    status: "in-progress"
  },
  {
    id: "3",
    name: "CrowdStrike Endpoint Security",
    issuer: "CrowdStrike (Internal Training)",
    status: "completed"
  },
  {
    id: "4",
    name: "Carbon Black Endpoint Security",
    issuer: "Carbon Black (Internal Training)",
    status: "completed"
  }
];
