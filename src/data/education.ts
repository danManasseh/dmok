export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  coursework: string[];
}

export const education: Education[] = [
  {
    id: "1",
    degree: "Master of Engineering",
    field: "Software Engineering",
    institution: "Memorial University of Newfoundland",
    location: "St. John's, Canada",
    period: "Sep 2022 - Apr 2024",
    gpa: "3.5/4.0",
    coursework: [
      "Cloud Computing",
      "Distributed Systems",
      "Data Security",
      "Advanced Algorithms"
    ]
  },
  {
    id: "2",
    degree: "Bachelor of Science",
    field: "Computer Engineering",
    institution: "Kwame Nkrumah University of Science and Technology",
    location: "Kumasi, Ghana",
    period: "Sep 2017 - Nov 2021",
    gpa: "70.07 CWA",
    coursework: [
      "Network Security",
      "Cloud Computing",
      "Data Structures",
      "Software Architecture"
    ]
  }
];
