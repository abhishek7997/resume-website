import React from "react"

const WORK_EXPERIENCES = [
  {
    company: "NbliK",
    role: "Software Development Engineer (SDE) - Intern",
    description: [
      "\u2022 Enhanced user experience by developing and maintaining web pages using Next.js and MaterialUI.",
      <br />,
      "\u2022 Implemented an events page with yup resolver and MaterialUI form fields.",
      <br />,
      "\u2022 Integrated APIs for secure user authentication on Signup and Login pages.",
      <br />,
      "\u2022 Improved page visibility by incorporating meta tags into relevant components.",
    ],
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
        <p className="text-white font-misc font-light text-xl leading-relaxed">
          {description}
        </p>
        {link && (
          <a
            className="text-white font-misc font-light text-lg hover:text-emerald-400 transition-all"
            // style={{ display: "inline-block", width: "fit-content" }}
            href={link}
            rel="noreferrer"
            target="_blank"
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
    <section id="experience" className="w-full py-8 sm:px-4 mt-8">
      <p className="text-white font-misc font-semibold text-6xl transition-all decoration-emerald-400 mb-16 smm:text-4xl">
        Experience
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
