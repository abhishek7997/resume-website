import React from "react"

const PROJECTS = [
  {
    title: "Image Search (Reactjs + MaterialUI)",
    description:
      "Search for images using the Pixabay API, search is dynamic and results change with each user input.",
    link: "https://abhishekimagesearch.netlify.app/",
    source_code: "",
    image: "images/projects/image-search.png",
  },
  {
    title: "Lyrics Finder (Nextjs + Typescript)",
    description:
      "Search for the lyrics of any song. The project uses MusixMatch API.",
    link: "https://abhisheklyricsfinder.netlify.app/",
    source_code: "",
    image: "images/projects/lyrics-finder.png",
  },
  {
    title: "Citation Sentiment Extractor (R&D)",
    description:
      "Parse text from research paper PDF, extract citations, apply machine learning to estimate sentiment of citation text",
    link: "https://github.com/abhishek7997/citation-sentiment-analysis",
    source_code: "",
    image: "images/projects/citation-extraction.png",
  },
  {
    title: "Snake Game (HTML + CSS + Javascript)",
    description:
      "Simple Snake Game built using HTML Canvas, CSS and Javascript",
    link: "https://abhisheksnakegame.netlify.app/",
    source_code: "",
    image: "images/projects/snake-game.png",
  },
  {
    title: "Weight Tracker (Flutter)",
    description:
      "Flutter app that allows the user to keep track of their weight",
    link: "https://github.com/abhishek7997/weight-tracker",
    source_code: "",
    image: "images/projects/weight-tracker.png",
  },
]

const ProjectObject = ({ title, description, link, images }) => {
  const projectClickHandler = (e) => {
    e.stopPropagation()
    window.open(link, "_blank").focus()
  }

  const linkClickHandler = (e) => {
    e.preventDefault()
    window.open(link, "_blank").focus()
  }

  return (
    <div
      onClick={projectClickHandler}
      className="w-full flex flex-col scr_931:flex-row h-full items-start border-4 border-[#4d585f] p-4 lg:hover:border-emerald-400 lg:hover:bg-[#232425] lg:transition-all"
    >
      <div className="scr_931:min-w-max smm:w-full min-w-0 mr-2 overflow-clip">
        <img
          src={images}
          className="w-full h-64 scr_931:w-48 scr_931:h-48 mb-4 mr-2 object-cover object-center lg:hover:scale-125 lg:transition-all lg:duration-300 lg:ease-in"
          alt=""
          onContextMenu={(e) => e.preventDefault()}
        />
      </div>
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full ml-2 scr_931m:ml-0 flex flex-col space-y-4"
      >
        <p className="text-white font-misc text-2xl sm:text-3xl">{title}</p>
        <p className="text-white font-misc font-light text-xl">{description}</p>
        {link && (
          <a
            className="text-white font-misc font-light inline-block text-lg lg:hover:text-emerald-400 lg:transition-all max-w-fit"
            href={link ?? ""}
            onClick={linkClickHandler}
          >
            {link ? "Link" : "Not Available"}
          </a>
        )}
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen w-full py-8 sm:px-4 mt-8">
      <p className="text-white font-misc font-semibold text-4xl sm:text-6xl transition-all decoration-emerald-400 mb-16">
        Projects
      </p>
      <div className="flex flex-col w-full space-y-6">
        {PROJECTS.map((project) => {
          return (
            <ProjectObject
              key={`id-project-${project.title}`}
              title={project.title}
              description={project.description}
              link={project.link}
              images={project.image}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Projects
