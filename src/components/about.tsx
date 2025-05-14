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
        After earning my degree in{" "}
        <span className="font-medium">Insurance</span>, I decided to follow my
        passion for technology and pursued a{" "}
        <span className="font-medium">Master of Information Technology</span> at{" "}
        <span className="font-medium">The University of Queensland</span>. Since then,
        I've been working professionally as a{" "}
        <span className="font-medium">web developer</span>, building full-stack
        applications with a focus on{" "}
        <span className="italic">clean architecture, performance, and user experience</span>.
      </p>

      <p className="mb-3">
        I have hands-on experience in developing and maintaining real-world web
        applications, including building an entire{" "}
        <span className="font-medium">CMS-based website</span>{" "}
        <a
          href="https://www.adatop.com.au"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 transition-colors"
        >
          (adatop.com.au)
        </a>{" "}
        from scratch, and
        optimizing e-commerce platforms. My core tech stack includes{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        , and I also enjoy working with{" "}
        <span className="font-medium">TypeScript, Java</span>, and cloud tools like{" "}
        <span className="font-medium">AWS and Docker</span>.
      </p>

      <p className="mb-3">
        <span className="italic">What I love most about programming</span> is the
        problem-solving process — the challenge of breaking down complex
        requirements and the satisfaction of building solutions that just work.
        Currently, I'm looking for a{" "}
        <span className="font-medium">full-time front-end or full-stack web
        development role</span> in Australia, where I can continue to grow,
        contribute to meaningful projects, and stay on the cutting edge of modern
        web technologies.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, you'll likely find me
        gaming, watching sci-fi movies, exploring new tech (like{" "}
        <span className="font-medium">AWS and Next.js</span>), or practicing
        swimming — a skill I'm actively working on!
      </p>
    </motion.section>
  );
}
