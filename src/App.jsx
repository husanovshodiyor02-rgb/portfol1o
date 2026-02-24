import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaBars,
  FaTimes,
  FaExternalLinkAlt,
  FaCode,
} from "react-icons/fa";
import P1 from "./assets/video/p1.mp4";
import P2 from "./assets/video/p2.mp4";
import P3 from "./assets/video/p3.mp4";
import P4 from "./assets/video/p4.mp4";
import P5 from "./assets/video/p5.mp4";
import P6 from "./assets/video/p6.mp4";


const personalInfo = {
  name: "Shodiyor",
  title: "Frontend Dasturchi",
  about:
    "Men g'oyalarni kodga aylantiraman. Quyidagi texnologiyalar bo'yicha tajribaga egaman:",
  skills: [
    "Html/css",
    "SASS",
    "Tailwind CSS",
    "JavaScript",
    
    "React.js",
    "TypeScript",
    "Next.js",
    "Figma",
  ],
};

const projects = [
  {
    id: 1,
    title: "Green Shop | Fullstack E-commerce Loyiha",
    desc: "To'liq funksional internet do'kon. Savatcha, to'lov tizimi va admin panel mavjud.",
    tech: ["React", "TypeScript", "Tailwind", "Backend"],
    video: P1,
    vercel: "https://greenshop-backend-three.vercel.app/",
    github: "https://github.com/husanovshodiyor02-rgb/greenshop-backend.git",
  },
  {
    id: 2,
    title: "Qurilish Web Loyiha | Frontend Project",
    desc: "Next.js + TypeScript + Tailwind asosida qurilish kompaniyasi uchun zamonaviy va responsiv web sayt.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    video: P2,
    vercel: "https://klassifikator-next-js.vercel.app/",
    github:
      "https://github.com/husanovshodiyor02-rgb/klassifikator-next.js.git",
  },
  {
    id: 3,
    title: "Multi-language Frontend Loyiha",
    desc: "React + Tailwind bilan ishlab chiqilgan frontend loyiha. Component arxitekturasi va 3 ta til variantiga moslashgan.",
    tech: ["React", "Tailwind", "Multi-language"],
    video: P3,
    vercel: "https://britlex-delta-ten.vercel.app/",
    github: "https://github.com/husanovshodiyor02-rgb/britlex.git",
  },
  {
    id: 4,
    title: "Texnika magazini Frontend Backend loyiha",
    desc: "Frontend Backend loyihasi admin paneli bilan boshqarish tizimi.",
    tech: ["Html", "Tailwind", "Responsive"],
    video: P6,
    vercel: "https://zon-uz-one.vercel.app/",
    github: "https://github.com/husanovshodiyor02-rgb/Zon.uz.git",
  },
  {
    id: 5,
    title: "Seedra Web Loyiha | Frontend Amaliy",
    desc: "React + Tailwind asosida frontend asoslari va sahifa tuzilmasi bilan ishlangan loyiha, UI componentlari bilan.",
    tech: ["React", "Tailwind", "Frontend"],
    video: P4,
    vercel: "https://seedra-lilac.vercel.app/",
    github: "https://github.com/husanovshodiyor02-rgb/seedra.git",
  },
  {
    id: 6,
    title: "Uzum market",
    desc: "React + Tailwind bilan qilingan Uzum market loyihasi",
    tech: ["React", "Tailwind"],
    video: P5,
    vercel: "https://uzum-rho-five.vercel.app/",
    github: "https://github.com/husanovshodiyor02-rgb/uzum.git",
  },
];

// --- ASOSIY APP ---
function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-slate-900 text-slate-200 min-h-screen font-sans selection:bg-emerald-500 selection:text-white">
      {/* NAVBAR (Glassmorphism) */}
      <nav className="fixed w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="shrink-0 font-bold text-2xl text-emerald-400 tracking-wider cursor-pointer">
              <a href="/" className="text-2xl font-bold tracking-tight">
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-500 to-orange-500 animate-pulse">
                  Portfolio
                </span>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {["Asosiy", "Men haqimda", "Loyihalar", "Aloqa"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-emerald-400 transition-colors duration-300 font-medium"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-200 hover:text-emerald-400 p-2"
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-slate-800 border-b border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {["Asosiy", "Men haqimda", "Loyihalar", "Aloqa"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700 hover:text-emerald-400"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden"
      >
        {/* Background Glow Effect */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="max-w-4xl text-center z-10">
          <div className="mb-4  inline-block  py-1 px-3 rounded-full bg-slate-800 border border-slate-700">
            <span className="text-cyan-400 font-medium text-sm">
              🚀 Open to work
            </span>
          </div>
          <p className="text-emerald-400 font-medium mb-4 tracking-widest uppercase">
            Salom, mening ismim
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-cyan-400 mb-6">
            {personalInfo.name}
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-8">
            Men{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
              {personalInfo.title}
            </span>
            man
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            {personalInfo.about}
          </p>
          <span className="font-bold text-white">
            HTML, CSS (SASS), JavaScript, Tailwind, React, TypeScript
          </span>{" "}
          va <span className="font-bold text-white">Next.js</span>.
          <div className="mt-12">
            <a
              href="#projects"
              className="px-8 py-3 bg-emerald-500 text-slate-900 font-bold rounded-lg hover:bg-emerald-400 transition shadow-[0_0_20px_rgba(16,185,129,0.5)]"
            >
              Ishlarimni ko'rish
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT & SKILLS SECTION */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="border-b-4 border-emerald-500 pb-2">
              Texnologiyalar & Ko'nikmalar
            </span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {personalInfo.skills.map((skill, index) => (
              <div
                key={index}
                className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700 hover:border-emerald-500 transition-colors duration-300 group"
              >
                <FaCode className="mx-auto mb-4 text-3xl text-slate-500 group-hover:text-emerald-400 transition-colors" />
                <h3 className="font-semibold text-lg text-slate-200">
                  {skill}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Eng so'nggi ishlarim
        </h2>
        <p className="text-slate-400 text-center mb-16">
          Har bir loyiha o'ziga xos yechimga ega
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800 rounded-2xl overflow-hidden shadow-xl border border-slate-700 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 group"
            >
             
              <div className="relative overflow-hidden h-52">
                <video
                  src={project.video}
                  controls
                  autoPlay
                  loop 
                  muted 
                  playsInline
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
               
                  <a
                    href={project.vercel}
                    target="_blank"
                    className="p-3 bg-emerald-500 text-slate-900 rounded-full hover:bg-emerald-400 transition"
                    title="View Site"
                  >
                    <FaExternalLinkAlt />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    className="p-3 bg-white text-slate-900 rounded-full hover:bg-gray-200 transition"
                    title="View Code"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto mb-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-2.5 py-1 rounded bg-slate-700 text-emerald-400 border border-slate-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="contact"
        className="bg-slate-950 py-12 border-t border-slate-800 text-center"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Aloqaga chiqing</h2>
        <p className="text-slate-400 mb-8">
          Loyihalar bo'yicha hamkorlik qilishga tayyorman.
        </p>

        <a
          href="https://t.me/Shodiyor_1104"
          className="inline-block border-2 border-emerald-500 text-emerald-500 px-8 py-3 rounded-full font-bold hover:bg-emerald-500 hover:text-slate-900 transition duration-300"
        >
          Xabar yozish
        </a>

        <div className="mt-12 text-slate-600 text-sm">
          &copy; 2024 {personalInfo.name}. Barcha huquqlar himoyalangan.
        </div>
      </footer>
    </div>
  );
}

export default App;
