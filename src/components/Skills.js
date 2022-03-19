import React from "react"

const SKILLS = [
  {
    title: "HTML",
    logo: "images/logo-html5.svg",
  },
  {
    title: "CSS",
    logo: "images/logo-css3.svg",
  },
  {
    title: "Javascript",
    logo: "images/logo-javascript.svg",
  },
  {
    title: "Reactjs",
    logo: "images/logo-reactjs.svg",
  },
  {
    title: "Nextjs",
    logo: "images/logo-nextjs.svg",
  },
  {
    title: "Tailwind CSS",
    logo: "images/logo-tailwindcss.svg",
  },
  {
    title: "Material UI",
    logo: "images/logo-materialui.svg",
  },
  {
    title: "Python",
    logo: "images/logo-python3.svg",
  },
  {
    title: "MongoDB",
    logo: "images/logo-mongodb.svg",
  },
  {
    title: "Flutter",
    logo: "images/logo-flutter.svg",
  },
  {
    title: "C++",
    logo: "images/logo-cpp.svg",
  },
  {
    title: "Git",
    logo: "images/logo-git.svg",
  },
]

const SkillObject = ({ title, logo }) => {
  return (
    <div className="max-w-24 px-2 py-2 sm:px-4 sm:py-4 flex flex-col items-center justify-evenly hover:bg-[#232425] font-misc text-white border-4 rounded-tl-3xl rounded-br-3xl border-[#4d585f] lg:hover:border-emerald-400 lg:hover:border-3 lg:transition-all">
      <img
        src={logo}
        onMouseDown={(e) => e.preventDefault()}
        onContextMenu={(e) => e.preventDefault()}
        className="h-16 sm:h-24 mb-4"
        alt={`logo-${title}`}
      />
      <p className="text-lg sm:text-2xl text-center lg:transition-all ease-in lg:hover:text-emerald-400">
        {title}
      </p>
    </div>
  )
}

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen w-full py-8 sm:px-4 mt-8">
      <p className="text-white font-misc font-semibold text-4xl sm:text-6xl lg:transition-all decoration-emerald-400 mb-16">
        Skills & Technologies
      </p>
      <div className="grid gap-x-8 gap-y-12 grid-cols-2 grid-rows-6 sm:px-8 lg:grid-cols-4 lg:grid-rows-3 lg:px-0 md:grid-cols-2 md:grid-rows-6">
        {SKILLS.map((skill) => {
          return (
            <SkillObject
              key={`id-skill-${skill.title}`}
              title={skill.title}
              logo={skill.logo}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Skills
