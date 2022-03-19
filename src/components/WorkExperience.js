import React from "react"

const WORK_EXPERIENCES = [
  {
    company: "NbliK",
    role: "SDE 1 (Reactjs Developer)",
    description:
      "Worked as a part-time Front-End Website Developer for about 3 months in a company with experience building User Interfaces of the website using the NextJS (ReactJS) framework.",
    duration: "3 months",
    start: "October 2021",
    end: "January 2021",
    link: "https://www.nblik.com",
  },
]

const WorkExperienceObject = ({ workExperience }) => {
  const { company, role, description, duration, start, end, link } =
    workExperience
  const projectClickHandler = () => {
    window.open(link, "_blank").focus()
  }

  const linkClickHandler = (e) => {
    e.preventDefault()
  }

  return (
    <div
      onClick={projectClickHandler}
      className="w-full flex flex-row h-full items-start border-4 border-[#4d585f] p-4 hover:border-emerald-400 hover:bg-[#232425] transition-all"
    >
      <div
        className="w-full ml-2 flex flex-col space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-white font-misc text-3xl">
          {company} - {role}
        </p>
        <p className="text-white font-misc text-2xl">
          {duration} - {start} to {end}
        </p>
        <p className="text-white font-misc font-light text-xl">{description}</p>
        {link && (
          <a
            className="text-white font-misc font-light text-lg hover:text-emerald-400 transition-all"
            href={link ?? ""}
            onClick={linkClickHandler}
          >
            {link ?? "Not Available"}
          </a>
        )}
      </div>
    </div>
  )
}

const WorkExperience = () => {
  return (
    <section id="work-experience" className="w-full py-8 sm:px-4 mt-8">
      <p className="text-white font-misc font-semibold text-6xl transition-all decoration-emerald-400 mb-16 smm:text-4xl">
        Work Experience
      </p>
      <div>
        {WORK_EXPERIENCES.map((work_experience) => {
          return <WorkExperienceObject workExperience={work_experience} />
        })}
      </div>
    </section>
  )
}

export default WorkExperience
