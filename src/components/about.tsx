"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I’m a <span className="font-medium">Full-Stack Developer</span> with a{" "}
        <span className="font-medium">Master of Information Technology</span> from{" "}
        <span className="font-medium">The University of Queensland</span> and full Australian work rights. I build production-ready websites and web applications with a strong focus on clean UI implementation, maintainable code, and practical user experience.
      </p>

      <p className="mb-3">
        My recent work includes commercial and volunteer projects such as{" "}
        <a
          href="https://www.restosuite.com.au/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 transition-colors"
        >
          RestoSuite
        </a>{" "}
        and{" "}
        <a
          href="https://sydneywestworshipcentre.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 transition-colors"
        >
          Sydney West Worship Centre
        </a>
        , where I translated designs into responsive front-end experiences and integrated CMS platforms including <span className="font-medium">Cosmic CMS</span> and <span className="font-medium">Strapi</span> to support easy content management.
      </p>

      <p className="mb-3">
        My core stack includes <span className="font-medium">React, Next.js, TypeScript, Node.js, Express, and MongoDB</span>. I also have hands-on experience with <span className="font-medium">Tailwind CSS, Redux, AWS, Shopify, Figma,</span> and modern CMS-driven workflows. I enjoy turning product requirements and UI designs into polished, user-focused digital products.
      </p>

      <p>
        Right now, I’m looking for a <span className="font-medium">Full-Stack Developer</span> opportunity in Australia where I can contribute to real products, keep growing technically, and deliver thoughtful web experiences end to end.
      </p>
    </motion.section>
  );
}
