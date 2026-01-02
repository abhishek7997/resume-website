import hash from "object-hash"

const SKILLS = [
  {
    section: "Languages",
    skills: [
      {
        title: "Java",
        logo: "images/logo-java.svg",
      },
      {
        title: "Python",
        logo: "images/logo-python3.svg",
      },
      {
        title: "C++",
        logo: "images/logo-cpp.svg",
      },
      {
        title: "Javascript",
        logo: "images/logo-javascript.svg",
      },
    ],
  },
  {
    section: "Technologies/Frameworks/Libraries",
    skills: [
      {
        title: "Spring Framework",
        logo: "images/logo-spring.svg",
      },
      {
        title: "Reactjs",
        logo: "images/logo-reactjs.svg",
      },
      {
        title: "Angular",
        logo: "images/logo-angular.svg",
      },
      {
        title: "NodeJS",
        logo: "images/logo-nodejs.svg",
      },
      {
        title: "Material UI",
        logo: "images/logo-materialui.svg",
      },
      {
        title: "Tailwind CSS",
        logo: "images/logo-tailwindcss.svg",
      },
      {
        title: "HTML",
        logo: "images/logo-html5.svg",
      },
      {
        title: "CSS",
        logo: "images/logo-css3.svg",
      },
    ],
  },
  {
    section: "Databases",
    skills: [
      {
        title: "MySQL",
        logo: "images/logo-mysql.svg",
      },
      {
        title: "MongoDB",
        logo: "images/logo-mongodb.svg",
      },
    ],
  },
  {
    section: "Tools",
    skills: [
      {
        title: "Git",
        logo: "images/logo-git.svg",
      },
    ],
  },
]

const SkillObject = ({ title, logo }) => {
  return (
    <div className="px-2 py-2 sm:px-4 sm:py-4 flex flex-col items-center justify-evenly hover:bg-[#232425] font-misc text-white border-4 rounded-tl-3xl rounded-br-3xl border-[#4d585f] lg:hover:border-emerald-400 lg:hover:border-3 lg:transition-all">
      <img
        src={logo}
        onMouseDown={(e) => e.preventDefault()}
        onContextMenu={(e) => e.preventDefault()}
        className="h-16 sm:h-24 mb-4"
        alt={`logo-${title}`}
      />
      <p className="sm:text-2xl text-center lg:transition-all ease-in lg:hover:text-emerald-400">
        {title}
      </p>
    </div>
  )
}

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen w-full py-8 sm:px-4 mt-8">
      <p className="text-white font-misc font-semibold text-4xl sm:text-6xl lg:transition-all decoration-emerald-400 mb-4">
        Skills
      </p>
      {SKILLS.map((skill, i) => {
        return (
          <div key={`id-skill-section-${hash([skill, i])}`}>
            <div className="text-4xl text-white mt-8 mb-4 wrap-anywhere">
              <p>{skill.section}</p>
            </div>
            {/* <div className="flex flex-wrap basis-xs gap-4 place-items-start"> */}
            <div className="grid gap-x-10 gap-y-12 grid-cols-2 sm:grid-cols-2 scr_864m:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 auto-rows-fr sm:px-8 lg:px-0">
              {skill.skills.map((sk, i) => {
                return (
                  <SkillObject
                    key={`id-skill-skill-${hash([sk.title, i])}`}
                    title={sk.title}
                    logo={sk.logo}
                  />
                )
              })}
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default Skills
