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
    <div className="max-w-24 py-4 px-4 flex flex-col items-center justify-evenly hover:bg-[#232425] font-misc text-white border-4 rounded-tl-3xl rounded-br-3xl border-[#4d585f] hover:border-emerald-400 hover:border-3 transition-all">
      <img
        src={logo}
        onMouseDown={(e) => e.preventDefault()}
        onContextMenu={(e) => e.preventDefault()}
        className="h-24 mb-4"
        alt={`logo-${title}`}
      />
      <p className="text-2xl text-center transition-all ease-in hover:text-emerald-400">
        {title}
      </p>
    </div>
  )
}

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen w-full py-8 px-4 mt-8">
      <p className="text-white font-misc font-semibold text-6xl transition-all decoration-emerald-400 mb-16 smmm:text-4xl">
        Skills & Technologies
      </p>
      <div className="grid grid-cols-4 grid-rows-3 gap-x-8 gap-y-12 lgm:grid-cols-2 lgm:grid-rows-6 smmm:grid-cols-1 smmm:grid-rows-12 smmm:px-8">
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
