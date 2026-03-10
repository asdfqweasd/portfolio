import Link from "next/link";

export const metadata = {
  title: "Zard | Resume",
  description: "Resume of Quan Zhang (Zard), Full-Stack Developer based in Melbourne.",
};

export default function ResumePage() {
  return (
    <main className="min-h-screen w-full max-w-4xl px-6 py-24 sm:px-10">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Quan Zhang (Zard)</h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-white/70">
            Melbourne, VIC | (+61) 0435 892 531 | quanzhang886@gmail.com
          </p>
          <p className="mt-1 text-sm text-gray-600 dark:text-white/70">
            GitHub: github.com/asdfqweasd | Portfolio: portfolio-zard.vercel.app
          </p>
          <p className="mt-1 text-sm text-gray-600 dark:text-white/70">
            Visa Status: Full Work Rights (Subclass 485, valid until 2028)
          </p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/resume.txt"
            className="rounded-full bg-gray-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Download Resume
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
          Full-Stack Developer with a Master of Information Technology from The University of Queensland and full Australian work rights. Experienced in building responsive, production-ready web applications using Next.js, React, TypeScript, Node.js, Express, MongoDB, and CMS platforms including Strapi and Cosmic CMS. Delivered commercial and volunteer-based projects from front-end implementation and CMS integration to full-stack e-commerce development. Strong in translating UI designs into scalable web interfaces and building clean, user-focused digital products. Currently seeking a Full-Stack Developer opportunity in Australia.
        </p>
      </section>

      <section className="mb-8 rounded-2xl border border-black/5 bg-white p-6 shadow-sm dark:bg-white/5">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Technical Skills</h2>
        <div className="space-y-3 text-gray-700 dark:text-white/80">
          <p><span className="font-semibold text-gray-900 dark:text-white">Languages:</span> JavaScript, TypeScript, Java, Python</p>
          <p><span className="font-semibold text-gray-900 dark:text-white">Front-End:</span> React.js, Next.js, Redux, HTML5, CSS3, Tailwind CSS</p>
          <p><span className="font-semibold text-gray-900 dark:text-white">Back-End:</span> Node.js, Express.js, MongoDB, REST APIs, JWT</p>
          <p><span className="font-semibold text-gray-900 dark:text-white">CMS / Platforms:</span> Strapi CMS, Cosmic CMS, Shopify</p>
          <p><span className="font-semibold text-gray-900 dark:text-white">Cloud / Tools:</span> AWS, Docker, Git, GitHub, GitHub Actions, Postman, Figma, Stripe</p>
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
            <li>Developed and maintained commercial web applications using Next.js, React, TypeScript, and Tailwind CSS.</li>
            <li>Delivered production-ready websites and CMS-driven content solutions for Australian business use cases.</li>
            <li>Built reusable front-end components and responsive layouts based on business requirements and design references.</li>
            <li>Integrated CMS-managed content into live websites to support maintainability and efficient content updates.</li>
            <li>Improved website usability, content structure, and SEO implementation to support better discoverability and user experience.</li>
            <li>Collaborated with stakeholders on feature delivery, content updates, and front-end improvements.</li>
            <li>Supported e-commerce and website maintenance tasks across business platforms including Shopify.</li>
          </ul>
        </div>

        <div>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Web Developer Intern | M.C.S</h3>
            <span className="text-sm text-gray-500 dark:text-white/60">Apr 2023 – Jul 2023</span>
          </div>
          <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-gray-700 dark:text-white/80">
            <li>Supported eBay platform operations and contributed to a 20% increase in sales.</li>
            <li>Automated product data updates using Jsoup, reducing manual effort and improving operational efficiency.</li>
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
            <li>Developed a production-ready marketing website for a restaurant POS platform covering features such as POS, KDS, QR ordering, and business analytics.</li>
            <li>Built responsive, reusable front-end components and scalable page layouts to support product marketing and future content expansion.</li>
            <li>Integrated Cosmic CMS content into the website to support efficient updates and content management workflows.</li>
            <li>Improved SEO implementation through structured metadata, content hierarchy, and performance-conscious front-end development.</li>
            <li>Supported onboarding-related content delivery including handbook PDFs, videos, and business information resources.</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Sydney West Worship Centre Website</h3>
            <a className="text-sm text-blue-600 hover:underline" href="https://sydneywestworshipcentre.com/" target="_blank" rel="noreferrer">View website</a>
          </div>
          <p className="mt-1 text-sm text-gray-500 dark:text-white/60">Role: Volunteer Front-End Developer | Stack: Next.js, React, Strapi CMS, Tailwind CSS, Figma</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-gray-700 dark:text-white/80">
            <li>Built the front end of a live community website by translating Figma designs into responsive, production-ready web pages.</li>
            <li>Independently implemented page development, Strapi content integration, and responsive adaptation across desktop and mobile devices.</li>
            <li>Developed reusable UI sections and structured layouts to improve consistency, maintainability, and future scalability.</li>
            <li>Integrated CMS-driven content for key pages including About, Ministries, Events, and Contact.</li>
            <li>Worked closely with a UI designer to deliver a clean, accessible, and user-friendly website experience.</li>
          </ul>
        </div>

        <div>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">CRWN Clothing – Full-Stack E-Commerce Application</h3>
            <a className="text-sm text-blue-600 hover:underline" href="https://github.com/asdfqweasd/CRWN_CLOTHING_Client" target="_blank" rel="noreferrer">View repository</a>
          </div>
          <p className="mt-1 text-sm text-gray-500 dark:text-white/60">Role: Full-Stack Developer | Stack: MongoDB, Express.js, React, Node.js, Redux, Stripe, AWS</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-gray-700 dark:text-white/80">
            <li>Built a full-stack e-commerce application with user authentication, shopping cart functionality, product management, and Stripe payment integration.</li>
            <li>Designed and implemented RESTful APIs to connect front-end and back-end services for a complete online shopping workflow.</li>
            <li>Implemented Redux-based state management and persistent user sessions to improve usability and checkout flow.</li>
            <li>Deployed the application to AWS with HTTPS support.</li>
          </ul>
        </div>
      </section>

      <section className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm dark:bg-white/5">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Education</h2>
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Master of Information Technology</h3>
          <span className="text-sm text-gray-500 dark:text-white/60">Feb 2020 – Dec 2022</span>
        </div>
        <p className="mt-2 text-gray-700 dark:text-white/80">The University of Queensland, Brisbane, QLD</p>
      </section>
    </main>
  );
}
