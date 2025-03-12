import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

import user1 from '../assets/members/user1.jpg'
import user2 from '../assets/members/user2.jpg'
import user3 from '../assets/members/user3.jpg'
import user4 from '../assets/members/user4.jpg'
import user5 from '../assets/members/user5.jpg'
import user6 from '../assets/members/user6.jpg'
import user7 from '../assets/members/user7.jpg'
import user8 from '../assets/members/user8.jpg'
import user9 from '../assets/members/user9.jpg'
import user10 from '../assets/members/user10.jpg'
import user11 from '../assets/members/user11.jpg'
import user12 from '../assets/members/user12.jpg'
import user13 from '../assets/members/user13.jpg'
import user14 from '../assets/members/user14.jpg'
import user15 from '../assets/members/user15.jpg'

import { MdWeb } from "react-icons/md"
import { FaLaptopCode } from "react-icons/fa"
import { RiRouterFill } from "react-icons/ri"
import { GiComputerFan } from "react-icons/gi"
import { FaChalkboardTeacher } from "react-icons/fa"

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};

export const services = [
  {
    icon: MdWeb,
    title: "Web Development",
    description: "Building modern, responsive, and high-performance websites.",
  },
  {
    icon: FaLaptopCode,
    title: "Software Solutions",
    description: "Custom software development for businesses and individuals.",
  },
  {
    icon: RiRouterFill,
    title: "Network Installation",
    description: "Setting up secure and reliable network infrastructures.",
  },
  {
    icon: GiComputerFan,
    title: "Hardware Repair",
    description: "Repair and maintenance of computers and IT equipment.",
  },
  {
    icon: FaChalkboardTeacher,
    title: "IT Training",
    description: "Providing training for students and professionals.",
  },
];


export const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "Software Engineer",
    image: user1,
    bio: "A passionate developer with 5+ years of experience in full-stack development.",
    email: "johndoe@example.com",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/johndoe",
      github: "https://github.com/johndoe",
    },
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "UI/UX Designer",
    image: user2,
    bio: "Creative designer with a focus on user-centric interfaces and experiences.",
    email: "janesmith@example.com",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/janesmith",
      github: "https://github.com/janesmith",
    },
  },
  {
    id: 3,
    name: "Jane Smith",
    role: "UI/UX Designer",
    image: user3,
    bio: "Creative designer with a focus on user-centric interfaces and experiences.",
    email: "janesmith@example.com",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/janesmith",
      github: "https://github.com/janesmith",
    },
  },
  {
    id: 4,
    name: "Jane Smith",
    role: "UI/UX Designer",
    image: user4,
    bio: "Creative designer with a focus on user-centric interfaces and experiences.",
    email: "janesmith@example.com",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/janesmith",
      github: "https://github.com/janesmith",
    },
  },
  {
    id: 5,
    name: "Jane Smith",
    role: "UI/UX Designer",
    image: user5,
    bio: "Creative designer with a focus on user-centric interfaces and experiences.",
    email: "janesmith@example.com",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/janesmith",
      github: "https://github.com/janesmith",
    },
  },
  {
    id: 6,
    name: "Jane Smith",
    role: "UI/UX Designer",
    image: user6,
    bio: "Creative designer with a focus on user-centric interfaces and experiences.",
    email: "janesmith@example.com",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/janesmith",
      github: "https://github.com/janesmith",
    },
  },
  {
    id: 7,
    name: "Jane Smith",
    role: "UI/UX Designer",
    image: user7,
    bio: "Creative designer with a focus on user-centric interfaces and experiences.",
    email: "janesmith@example.com",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/janesmith",
      github: "https://github.com/janesmith",
    },
  },
  {
    id: 8,
    name: "Jane Smith",
    role: "UI/UX Designer",
    image: user8,
    bio: "Creative designer with a focus on user-centric interfaces and experiences.",
    email: "janesmith@example.com",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/janesmith",
      github: "https://github.com/janesmith",
    },
  },
  {
    id: 9,
    name: "Jane Smith",
    role: "UI/UX Designer",
    image: user9,
    bio: "Creative designer with a focus on user-centric interfaces and experiences.",
    email: "janesmith@example.com",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/janesmith",
      github: "https://github.com/janesmith",
    },
  },
  {
    id: 10,
    name: "Jane Smith",
    role: "UI/UX Designer",
    image: user10,
    bio: "Creative designer with a focus on user-centric interfaces and experiences.",
    email: "janesmith@example.com",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/janesmith",
      github: "https://github.com/janesmith",
    },
  },
  {
    id: 11,
    name: "Jane Smith",
    role: "UI/UX Designer",
    image: user11,
    bio: "Creative designer with a focus on user-centric interfaces and experiences.",
    email: "janesmith@example.com",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/janesmith",
      github: "https://github.com/janesmith",
    },
  },
  {
    id: 12,
    name: "Jane Smith",
    role: "UI/UX Designer",
    image: user12,
    bio: "Creative designer with a focus on user-centric interfaces and experiences.",
    email: "janesmith@example.com",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/janesmith",
      github: "https://github.com/janesmith",
    },
  },
  {
    id: 13,
    name: "Jane Smith",
    role: "UI/UX Designer",
    image: user13,
    bio: "Creative designer with a focus on user-centric interfaces and experiences.",
    email: "janesmith@example.com",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/janesmith",
      github: "https://github.com/janesmith",
    },
  },
  {
    id: 14,
    name: "Jane Smith",
    role: "UI/UX Designer",
    image: user14,
    bio: "Creative designer with a focus on user-centric interfaces and experiences.",
    email: "janesmith@example.com",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/janesmith",
      github: "https://github.com/janesmith",
    },
  },
  {
    id: 15,
    name: "Jane Smith",
    role: "UI/UX Designer",
    image: user15,
    bio: "Creative designer with a focus on user-centric interfaces and experiences.",
    email: "janesmith@example.com",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/janesmith",
      github: "https://github.com/janesmith",
    },
  },
  
];