import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

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
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CrwnClothing",
    description:
      "I took this front-end site, turned it into full-stack and deployed it to AWS. Build a massive E-commerce app with React and Redux, Hooks, Stripewith JavaScript, and TypeScript. ",
    tags: ["React", "Node.js", "MongoDB", "AWS", "Redux"],
    imageUrl: "/crwnClothing.png",
    links: "https://web.crwnclothzard.com/",
  },
  {
    title: "EarPhone",
    description:
      "This project demonstrates a specialised e-commerce platform for selling audio systems, headphones, and other electronic products. ",
    tags: ["React", "TypeScript", "Hooks", "CSS", "Redux"],
    imageUrl: "/earPhone.png",
    links: "https://github.com/asdfqweasd/eCommerceEarPhone",
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   // imageUrl: wordanalyticsImg,
  // },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "JAVA",
  "Python",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
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
