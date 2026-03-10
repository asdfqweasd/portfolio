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
    title: "Master of Information Technology",
    location: "The University of Queensland, Brisbane, QLD",
    description:
      "Completed a Master of Information Technology and built a strong foundation in software engineering, web development, and modern application design.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2022",
  },
  {
    title: "Web Developer Intern",
    location: "M.C.S",
    description:
      "Supported eBay platform operations, automated product data updates with Jsoup, and contributed to a measurable increase in sales performance.",
    icon: React.createElement(CgWorkAlt),
    date: "Apr 2023 - Jul 2023",
  },
  {
    title: "Independent Technical Growth",
    location: "Personal Projects & Continuous Learning",
    description:
      "Expanded my full-stack skill set through hands-on projects using React, Next.js, TypeScript, Node.js, MongoDB, AWS, Stripe, and CMS platforms.",
    icon: React.createElement(FaReact),
    date: "2022 - Present",
  },
  {
    title: "Web Developer",
    location: "Intelligeneer Solution, Melbourne, Australia",
    description:
      "Develop and maintain commercial websites and CMS-driven web solutions, with a focus on responsive front-end development, content integration, and scalable user experiences.",
    icon: React.createElement(FaComputer),
    date: "Jun 2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "RestoSuite",
    description:
      "Built a production-ready marketing website for a restaurant POS platform using Next.js, TypeScript, Tailwind CSS, and Cosmic CMS. Focused on responsive UI, structured content delivery, and SEO-conscious implementation.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Cosmic CMS", "SEO"],
    imageUrl: "/adatopwebsite.png",
    links: "https://www.restosuite.com.au/",
  },
  {
    title: "Sydney West Worship Centre",
    description:
      "Developed the front end of a live community website from Figma designs and integrated Strapi CMS for dynamic content across About, Ministries, Events, and Contact pages.",
    tags: ["Next.js", "React", "Strapi CMS", "Tailwind CSS", "Figma"],
    imageUrl: "/earPhone.png",
    links: "https://sydneywestworshipcentre.com/",
  },
  {
    title: "CRWN Clothing",
    description:
      "Built a full-stack e-commerce application with authentication, Redux state management, Stripe payments, REST APIs, and AWS deployment.",
    tags: ["React", "Node.js", "MongoDB", "Redux", "AWS"],
    imageUrl: "/crwnClothing.png",
    links: "https://github.com/asdfqweasd/CRWN_CLOTHING_Client",
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Java",
  "Python",
  "Tailwind CSS",
  "Redux",
  "Strapi CMS",
  "Cosmic CMS",
  "Shopify",
  "AWS",
  "Docker",
  "Git",
  "Figma",
] as const;
