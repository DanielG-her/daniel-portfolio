import React, { useState } from "react";

// Daniel Portfolio - Single-file React component using Tailwind CSS (dark mode)
// Updated: embedded Google Drive video preview for Sheqlee demo + improved project buttons
// Usage: drop this file into your React app (e.g. src/DanielPortfolio.jsx)

export default function DanielPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [videoPreview, setVideoPreview] = useState(null); // holds preview URL when user wants to watch demo

  const projects = [
    {
      id: 1,
      title: "Nyat Ride — Admin Management",
      description:
        "Admin dashboard for Nyat Ride to manage rides, users, and operational data. Built with modern frontend patterns and API integration.",
      tech: ["React", "Tailwind CSS", "API Integration"],
      demo: "#", // replace with live demo link
      github: "https://github.com/DanielG-her/Niyat-Ride/tree/main/my-app", // replace with repo link
    },
    {
      id: 2,
      title: "Tigrigna Speech-to-Text",
      description:
        "A deep-learning based speech recognition prototype for the Tigrigna language, focused on accessibility and transcription workflows.",
      tech: ["Python", "ML", "Web Demo"],
      demo: "https://www.youtube.com/shorts/cRW_SJ3Dvl4?feature=share",
      github: "#",
    },
    {
      id: 3,
      title: "Sheqlee — Frontend Demo",
      description:
        "Frontend components and UX improvements implemented during my internship at Metnee Systems. This demo is a short video walkthrough showing UI screens, forms, and user flows.",
      tech: ["React", "Component Design", "Responsive UI"],
      // Google Drive preview link (use /preview to open in an embeddable player)
      demo: "https://drive.google.com/file/d/1EVR6H523HsC8xdY4tc874xnXkx4KRPnl/preview",
      github: "https://github.com/sheqlee/cohort-2-group-4-web-app",
    },
  ];

  function scrollToId(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      {/* Navbar */}
      <header className="w-full border-b border-slate-800 sticky top-0 bg-slate-900/95 backdrop-blur z-30">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-2xl font-bold text-cyan-400"
            >
              Daniel
            </button>
            <div className="hidden md:flex gap-6 text-sm">
              <button onClick={() => scrollToId("home")} className="hover:text-cyan-300">
                Home
              </button>
              <button onClick={() => scrollToId("about")} className="hover:text-cyan-300">
                About
              </button>
              <button onClick={() => scrollToId("projects")} className="hover:text-cyan-300">
                Projects
              </button>
              <button onClick={() => scrollToId("contact")} className="hover:text-cyan-300">
                Contact
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              aria-label="menu"
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md border border-slate-700"
            >
              <svg className="w-6 h-6 text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="md:hidden bg-slate-900 border-t border-slate-800">
            <div className="px-6 py-4 flex flex-col gap-3">
              <button onClick={() => scrollToId("home")} className="text-left">
                Home
              </button>
              <button onClick={() => scrollToId("about")} className="text-left">
                About
              </button>
              <button onClick={() => scrollToId("projects")} className="text-left">
                Projects
              </button>
              <button onClick={() => scrollToId("contact")} className="text-left">
                Contact
              </button>
            </div>
          </nav>
        )}
      </header>

      <main id="home" className="max-w-5xl mx-auto px-6 py-12">
        {/* Hero */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Hi, I&apos;m <span className="text-cyan-400">Daniel</span>
            </h1>
            <p className="mt-4 text-slate-300 max-w-2xl">
              I&apos;m a Software Developer focused on building clean, scalable, and
              user-friendly web applications. I enjoy solving problems, refining user experiences, and
              learning new technologies — especially around frontend development and applied AI.
            </p>

            <div className="mt-6 flex gap-4">
              <button
                onClick={() => scrollToId("projects")}
                className="px-5 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-md font-medium"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToId("contact")}
                className="px-5 py-3 bg-slate-800 hover:bg-slate-700 rounded-md font-medium border border-slate-700"
              >
                Contact Me
              </button>
            </div>

            <div className="mt-8 text-sm text-slate-400">
              <div>Software Developer • React • JavaScript • Frontend • API Integration</div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            {/* Profile image placeholder - replace /profile.jpg in public/ */}
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full ring-4 ring-cyan-400 overflow-hidden">
              <img
                src="/profile.jpg"
                alt="Daniel profile"
                className="object-cover w-full h-full"
                onError={(e) => {
                  // fallback : simple colored circle with initials
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="hidden">Replace /profile.jpg with your actual image file in the public folder.</div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mt-16">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="mt-4 text-slate-300 max-w-3xl">
            I&apos;m a curious and focused developer who values teamwork and learning. Working at Nyat
            Consultancy has sharpened my frontend engineering skills and taught me how to deliver
            functional, maintainable UI that supports backend systems. Outside of work I explore
            machine learning projects and experiment with small full-stack prototypes.
          </p>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-16">
          <h2 className="text-3xl font-bold">My Projects</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <article
                key={p.id}
                className="bg-slate-800 p-6 rounded-xl shadow-xl border border-slate-700"
              >
                <h3 className="text-xl font-semibold text-slate-100">{p.title}</h3>
                <p className="mt-2 text-slate-300">{p.description}</p>
                <div className="mt-3 text-sm text-slate-400">Technologies: {p.tech.join(", ")}</div>

                <div className="mt-4 flex gap-3">
                  {p.demo && (
                    <button
                      onClick={() => {
                        // if the demo is a Google Drive preview link, open inline modal
                        if (p.demo.includes("drive.google.com")) {
                          setVideoPreview(p.demo);
                        } else {
                          window.open(p.demo, "_blank", "noopener,noreferrer");
                        }
                      }}
                      className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-md text-sm font-medium"
                    >
                      Live Demo
                    </button>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-md text-sm font-medium border border-slate-600"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
<section id="contact" className="mt-16">
  <h2 className="text-3xl font-bold">Contact</h2>
  <p className="mt-4 text-slate-300">
    Want to work together or see my code? Reach out:
  </p>

  <div className="mt-4 flex flex-col md:flex-row gap-4 items-start md:items-center">
    <a
      href="mailto:danironside3@gmail.com"
      className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-md font-medium"
    >
      Email Me
    </a>

    <a
      href="https://www.linkedin.com/in/daniel-gher-617880358"
      target="_blank"
      rel="noreferrer"
      className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-md font-medium border border-slate-600"
    >
      LinkedIn
    </a>

    <a
      href="https://github.com/DanielG-her"
      target="_blank"
      rel="noreferrer"
      className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-md font-medium border border-slate-600"
    >
      GitHub
    </a>

    <a
      href="tel:+251908208659"
      className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-md font-medium border border-slate-600"
    >
      📞 +251908208659
    </a>
  </div>
</section>


        <footer className="mt-24 pb-12 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Daniel — Software Developer at Nyat Consultancy
        </footer>
      </main>

      {/* Video modal for Drive preview */}
      {videoPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="w-full max-w-3xl bg-slate-900 rounded-lg overflow-hidden">
            <div className="flex justify-end p-2">
              <button
                onClick={() => setVideoPreview(null)}
                className="px-3 py-1 bg-slate-800 rounded text-slate-200"
              >
                Close
              </button>
            </div>
            <div className="w-full h-0 pb-[56.25%] relative">
              <iframe
                title="Project Demo"
                src={videoPreview}
                className="absolute top-0 left-0 w-full h-full"
                allow="autoplay; encrypted-media"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
