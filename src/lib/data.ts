export const SITE = {
  name: "Jayesh",
  handle: "jxyxia",
  domain: "jxyxia.dev",
  email: "jayesh.workarchive@gmail.com",
  github: "https://github.com/jxyxia",
  linkedin: "https://www.linkedin.com/in/jayesh0735/",
  university: "University of Mumbai",
  degree: "B.E. Computer Engineering",
  semester: "VII — 2026",
  graduation: "Aug 2027",
  status: "Seeking Internship",
};

export const PROJECTS = [
  {
    id: "01",
    tag: "Featured Project",
    title: "FinLens - Spot what your bank statement is hiding.",
    description:
      "An AI-powered finance analyzer that detects unusual transactions in your bank statement, categorizes your spending, and forecasts your month-end balance - with plain-English explanations for every anomaly it finds.",
    stack: ["Next.js", "Python", "scikit-learn", "FastAPI", "Vercel"],
    link: "https://github.com/jxyxia/finlens",
    liveLink: "https://finlens-eight.vercel.app",
    featured: true,
  },
  {
    id: "02",
    tag: "Mobile / IoT",
    title: "IoT Dashboard",
    description:
      "Real-time sensor data visualisation app built as part of final year coursework.",
    stack: ["React Native", "MQTT", "Node.js"],
    link: "https://github.com/jxyxia",
    liveLink: "#",
    featured: false,
  },

  {
    id: "03",
    tag: "Web Dev",
    title: "CloudFN - Serverless Function-as-a-Service Platform",
    description:
      "A serverless platform built on top of AWS, providing a seamless developer experience for deploying and managing serverless functions with a user-friendly interface and robust monitoring tools.",
    stack: ["Python", "Streamlit", "AWS"],
    link: "https://github.com/jxyxia",
    liveLink: "https://cloudfn.dev",
    featured: false,
  },
];

export const SKILLS = [
  {
    group: "Languages",
    items: ["JavaScript / TypeScript", "Python", "Java"],
  },
  {
    group: "Frontend",
    items: ["React / Next.js", "Tailwind CSS", "HTML / CSS", "Framer Motion"],
  },
  {
    group: "Backend & Cloud",
    items: ["Node.js", "REST APIs", "Serverless / Cloud", "Git / GitHub"],
  },
];
