import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import {FaComputer} from "react-icons/fa6"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Java Internship",
    location: "WuHan, CN",
    description:
      "It's a 6 months of Internship.Mainly to help the team implement backend functions of administration system",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
  {
    title: "Master of Degree",
    location: "Brisbane, QLD",
    description:
      "As a master of Information Technology student in UQ. I try to learn IT related knowledge systematically..",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2022",
  },
  {
    title: "Zero To Mastery Academy",
    location: "Udemy, QLD",
    description:
      "I learn a lot of Front end Skills by myself. My stack includes React, Next.js, TypeScript, JAVA, AWS and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  },
  {
    title: "Front-end Developer",
    location: "Brisbane, QLD",
    description:
      "Working as a front-end developer at Intelligeneer Solution, focusing on CMS integration and modern web development technologies. Building and maintaining responsive web applications.",
    icon: React.createElement(FaComputer),
    date: "2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Adatop Website",
    description:
      "Built and deployed a company website with React and CMS integration. Focused on responsive UI, SEO, and easy content updates for non-technical staff.",
    tags: ["React", "CMS", "JavaScript", "Responsive Design", "SEO"],
    imageUrl: "/adatopwebsite.png",
    links: "https://adatop.com.au",
  },
  {
    title: "CrwnClothing",
    description:
      "I took this front-end site, turned it into full-stack and deployed it to AWS. Build a massive E-commerce app with React and Redux, Hooks, Stripewith JavaScript, and TypeScript. ",
    tags: ["React", "Node.js", "MongoDB", "AWS", "Redux"],
    imageUrl: "/crwnClothing.png",
    links: "https://github.com/asdfqweasd/CRWN_CLOTHING_Client",
  },
  {
    title: "EarPhone",
    description:
      "This project demonstrates a specialised e-commerce platform for selling audio systems, headphones, and other electronic products. ",
    tags: ["React", "TypeScript", "Hooks", "CSS", "Redux"],
    imageUrl: "/earPhone.png",
    links: "https://github.com/asdfqweasd/eCommerceEarPhone",
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "CMS",
  "Next.js",
  "Node.js",
  "JAVA",
  "Python",
  "AWS",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
