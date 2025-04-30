import project1 from "../assets/projects/safe-mom.webp";
import project2 from "../assets/projects/duka.webp";
import project3 from "../assets/projects/jifunze.webp";
import project4 from "../assets/projects/blog.webp";

export const HERO_CONTENT = `
I am a passionate Software Engineer with a strong foundation in building innovative, scalable, and impactful web applications. 
With hands-on experience in front-end technologies like React, coupled with back-end expertise in Django, Django REST Framework, and Go, 
I excel in crafting solutions that are both functional and user-centered. 
My specialization in data science, machine learning, and AI further enables me to build intelligent systems that solve real-world problems. 
I aim to leverage my technical skills and creative problem-solving abilities to drive innovation, enhance user experiences, 
and contribute to meaningful projects that make a difference.
`;

export const ABOUT_TEXT = HERO_CONTENT;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: ["Backend Engineer, ", "Data Scientist, ", "Digital Marketing Lead"],
    company: "MMUST iHub",
    description: `
Led a team in developing and maintaining web applications using Python, Django, Django REST Framework, and PostgreSQL. 
Implemented robust APIs and integrated PostgreSQL for efficient data management. 
Collaborated with stakeholders to define requirements, timelines, and align projects with MMUST iHub's innovation goals.
    `,
    technologies: ["Python", "Django", "Django REST", "PostgreSQL"],
  },
  {
    year: "2023 - Present",
    role: "Academy Lead",
    company: "Health IT Academy",
    description: `
Led a community of 162+ members, promoting collaboration and knowledge sharing in Python and Data Science. 
Organized workshops and mentoring sessions to enhance skills in analytics, machine learning, and healthcare tech solutions.
    `,
    technologies: ["HTML", "CSS", "Python", "MySQL"],
  },
  {
    year: "2023 - 2024",
    role: "Technical Writer",
    company: "Google Developer Students Club",
    description: `
Created comprehensive technical documentation, tutorials, and guides. 
Organized over five tech events and collaborated with the university for logistics. 
Facilitated a mini hackathon benefiting 30 students, enhancing innovation and skill development.
    `,
    technologies: ["Python", "Svelte", "PostgreSQL"],
  },
  {
    year: "2024 - 2024",
    role: "Mentee",
    company: "KamiLimu",
    description: `
Selected among 38 mentees nationwide for an 8-month program focused on personal growth, innovation, and community leadership.
    `,
    technologies: ["JavaScript", "React.js", "CSS", "PostgreSQL", "MySQL", "Python", "Flask"],
  },
  {
    year: "2024 - 2024",
    role: "Internal Attachment",
    company: "Masinde Muliro University of Science and Technology",
    description: `
Mastered networking basics (cable crimping, configuration, troubleshooting) for infrastructure setup. 
Learned system administration including user management and server configurations. 
Collaborated on JavaFX applications for student registration, strengthening programming skills.
    `,
    technologies: ["Java", "MySQL", "Android", "Python"],
  },
];

export const PROJECTS = [
  {
    title: "Safe Mom",
    image: project1,
    link: "https://safe-mom-1.onrender.com",
    description: `
Developed Safe Mom, a Python-based platform using XGBoost to predict preeclampsia risk with 90%+ accuracy, 
improving maternal care outcomes.
    `,
    technologies: ["HTML", "CSS", "Flask", "PostgreSQL", "Python"],
  },
  {
    title: "Duka Yangu",
    image: project2,
    link: "https://github.com/SebbieMzingKe/duka-yangu",
    description: `
Built an e-commerce platform with Django, supporting inventory management, secure payments, 
a recommendation engine, and background task processing.
    `,
    technologies: ["HTML", "CSS", "Django", "JavaScript"],
  },
  {
    title: "Jifunze",
    image: project3,
    link: "https://github.com/SebbieMzingKe/jifunze",
    description: `
Developed a CMS for course management using Django, DRF, Docker, Nginx, and Redis, 
reducing query times by 40% and optimizing server efficiency.
    `,
    technologies: ["HTML", "CSS", "Django", "Docker", "JavaScript"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    link: "https://react-blog-three-orcin.vercel.app/",
    description: `
Created a blogging platform with features like rich text editing, user profiles, and commenting capabilities.
    `,
    technologies: ["HTML", "CSS", "React.js"],
  },
];

export const CONTACT = {
  address: "241-50100, Kakamega",
  phoneNo: "+254 740 827 150",
  email: "sebbievilar2@gmail.com",
};
