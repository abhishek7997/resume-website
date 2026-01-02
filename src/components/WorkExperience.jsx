import hash from "object-hash"

const WORK_EXPERIENCES = [
  {
    company: "Western Union",
    role: "Junior Associate, Solution Engineering",
    description: [
      "Developed and maintained Java Spring boot microservices used in Money Transfer services. Implemented business requirements and resolved vulnerabilities.",
      "Developed Python scripts as part of DevOps process automation for generating service infrastructure drift reports for two regions.",
    ],
    duration: "1 year",
    start: "August 2023",
    end: null,
  },
  {
    company: "Western Union",
    role: "Trainee (Internship)",
    description: [
      "Developed a proof of concept java web application for mocking different APIs using WireMock which has functionality such as adding, removing and modifying API mappings for returning mock responses or simulating network delays.",
    ],
    duration: "6 months",
    start: "Jan 2023",
    end: "July 2023",
  },
  {
    company: "NbliK",
    role: "Software Development Engineer (SDE) - Intern",
    description: [
      "Enhanced user experience by developing and maintaining web pages using Next.js and MaterialUI.",
      "Implemented an events page with yup resolver and MaterialUI form fields.",
      "Integrated APIs for secure user authentication on Signup and Login pages.",
      "Improved page visibility by incorporating meta tags into relevant components.",
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
      className="w-full flex flex-row h-full items-start border-4 border-[#4d585f] p-4 hover:border-emerald-400 hover:bg-[#232425] transition-all mt-4"
    >
      <div
        className="w-full ml-2 flex flex-col space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-white font-misc text-3xl">
          {company} - {role}
        </p>
        {end ? (
          <p className="text-white font-misc text-2xl">
            {duration} - {start} to {end}
          </p>
        ) : (
          <p className="text-white font-misc text-2xl">{start} - Present</p>
        )}

        {description?.length > 0 && (
          <ul className="list-disc pl-4">
            {description.map((desc) => {
              return (
                <li
                  className="text-white font-misc font-light text-xl leading-relaxed"
                  key={hash(desc)}
                >
                  {desc}
                </li>
              )
            })}
          </ul>
        )}

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
        {WORK_EXPERIENCES.map((work_experience, i) => {
          return (
            <WorkExperienceObject
              workExperience={work_experience}
              key={hash([work_experience, i])}
            />
          )
        })}
      </div>
    </section>
  )
}

export default WorkExperience
