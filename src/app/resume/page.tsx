import Link from "next/link";

export const metadata = {
  title: "Zard | Resume",
  description: "Resume of Quan Zhang, Front-End / Full-Stack Developer based in Melbourne.",
};

export default function ResumePage() {
  return (
    <main className="min-h-screen w-full max-w-4xl px-6 py-24 sm:px-10">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Quan Zhang</h1>
          <p className="mt-2 text-sm font-medium text-gray-700 dark:text-white/80">Front-End / Full-Stack Developer</p>
          <p className="mt-2 text-sm text-gray-600 dark:text-white/70">
            Melbourne, VIC | (+61) 0435 892 531 | quanzhang886@gmail.com
          </p>
          <p className="mt-1 text-sm text-gray-600 dark:text-white/70">
            GitHub: github.com/asdfqweasd | Portfolio: portfolio-zard.vercel.app | LinkedIn: quan-zhang-b58032268
          </p>
          <p className="mt-1 text-sm text-gray-600 dark:text-white/70">
            Full work rights in Australia (Subclass 485, valid until 2028)
          </p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/Quan_Zhang_Resume.pdf"
            className="rounded-full bg-gray-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Download PDF Resume
          </Link>
          <Link
            href="/"
            className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-gray-900 transition hover:bg-gray-50 dark:bg-white/10 dark:text-white"
          >
            Back to Portfolio
          </Link>
        </div>
      </div>

      <section className="mb-8 rounded-2xl border border-black/5 bg-white p-6 shadow-sm dark:bg-white/5">
        <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">Professional Summary</h2>
        <p className="leading-7 text-gray-700 dark:text-white/80">
          Front-End / Full-Stack Developer with a Master of Information Technology from The University of Queensland and commercial experience delivering responsive, production-ready websites for Australian businesses. Skilled in Next.js, React, TypeScript, JavaScript, Tailwind CSS, Node.js, and CMS-based development. Experienced in building maintainable UI, integrating CMS platforms, and supporting live business websites across marketing and content-driven use cases.
        </p>
      </section>

      <section className="mb-8 rounded-2xl border border-black/5 bg-white p-6 shadow-sm dark:bg-white/5">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Technical Skills</h2>
        <div className="space-y-3 text-gray-700 dark:text-white/80">
          <p><span className="font-semibold text-gray-900 dark:text-white">Languages:</span> JavaScript, TypeScript, Java, Python</p>
          <p><span className="font-semibold text-gray-900 dark:text-white">Front-End:</span> React, Next.js, HTML5, CSS3, Tailwind CSS, Redux</p>
          <p><span className="font-semibold text-gray-900 dark:text-white">Back-End:</span> Node.js, Express.js, MongoDB, REST APIs</p>
          <p><span className="font-semibold text-gray-900 dark:text-white">CMS / Platforms:</span> Strapi CMS, Cosmic CMS, Shopify</p>
          <p><span className="font-semibold text-gray-900 dark:text-white">Tools &amp; Cloud:</span> Git, GitHub, Figma, Postman, AWS, Stripe, Docker</p>
        </div>
      </section>

      <section className="mb-8 rounded-2xl border border-black/5 bg-white p-6 shadow-sm dark:bg-white/5">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Professional Experience</h2>

        <div className="mb-6">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Web Developer | Intelligeneer Solution</h3>
            <span className="text-sm text-gray-500 dark:text-white/60">Melbourne, Australia | Jun 2024 – Present</span>
          </div>
          <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-gray-700 dark:text-white/80">
            <li>Develop and maintain commercial websites and CMS-driven web solutions for Australian businesses.</li>
            <li>Built and maintained the live RestoSuite website using Next.js, TypeScript, and Tailwind CSS.</li>
            <li>Created responsive layouts and reusable components for consistent cross-device user experience.</li>
            <li>Improved front-end delivery with attention to usability, maintainability, and SEO-friendly implementation.</li>
            <li>Supported CMS-based content workflows and contributed to updates on the company’s Shopify website.</li>
          </ul>
        </div>

        <div>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Web Developer Intern | M.C.S</h3>
            <span className="text-sm text-gray-500 dark:text-white/60">Apr 2023 – Jul 2023</span>
          </div>
          <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-gray-700 dark:text-white/80">
            <li>Supported eBay platform operations and contributed to improved sales performance.</li>
            <li>Automated product data update workflows using Jsoup to reduce manual effort and improve efficiency.</li>
          </ul>
        </div>
      </section>

      <section className="mb-8 rounded-2xl border border-black/5 bg-white p-6 shadow-sm dark:bg-white/5">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Selected Projects</h2>

        <div className="mb-6">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">RestoSuite – Restaurant POS Marketing Website</h3>
            <a className="text-sm text-blue-600 hover:underline" href="https://www.restosuite.com.au/" target="_blank" rel="noreferrer">View website</a>
          </div>
          <p className="mt-1 text-sm text-gray-500 dark:text-white/60">Role: Web Developer | Stack: Next.js, TypeScript, Tailwind CSS, Cosmic CMS</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-gray-700 dark:text-white/80">
            <li>Built a live marketing website for a restaurant POS platform with responsive layouts and polished front-end implementation.</li>
            <li>Delivered reusable sections and business-facing content pages with structured CMS content.</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Sydney West Worship Centre Website</h3>
            <a className="text-sm text-blue-600 hover:underline" href="https://sydneywestworshipcentre.com/" target="_blank" rel="noreferrer">View website</a>
          </div>
          <p className="mt-1 text-sm text-gray-500 dark:text-white/60">Role: Volunteer Front-End Developer | Stack: Next.js, React, Strapi CMS, Tailwind CSS</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-gray-700 dark:text-white/80">
            <li>Developed the front end from Figma designs and integrated Strapi CMS content across multiple pages.</li>
            <li>Built responsive layouts and reusable components for maintainable updates.</li>
          </ul>
        </div>

        <div>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">CRWN Clothing – Full-Stack E-Commerce Application</h3>
            <a className="text-sm text-blue-600 hover:underline" href="https://github.com/asdfqweasd/CRWN_CLOTHING_Client" target="_blank" rel="noreferrer">View repository</a>
          </div>
          <p className="mt-1 text-sm text-gray-500 dark:text-white/60">Role: Full-Stack Developer | Stack: MongoDB, Express.js, React, Node.js, Redux, Stripe, AWS</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-gray-700 dark:text-white/80">
            <li>Built a full-stack e-commerce application with authentication, Stripe integration, Redux state management, and AWS deployment.</li>
          </ul>
        </div>
      </section>

      <section className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm dark:bg-white/5">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Education</h2>
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Master of Information Technology</h3>
          <span className="text-sm text-gray-500 dark:text-white/60">2020 – 2022</span>
        </div>
        <p className="mt-2 text-gray-700 dark:text-white/80">The University of Queensland, Brisbane, QLD</p>
      </section>
    </main>
  );
}
