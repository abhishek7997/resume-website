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
    title: "dForum",
    description:
      "An internet messaging board implemented with Angular, Spring Boot, MySQL, and user authentication managed by Spring Security.",
    link: "https://github.com/abhishek7997/dforum",
    image: "images/projects/dforum.png",
  },
  {
    title: "CiteExtract: PDF Citation Sentence Extractor",
    description:
      "Python tool for extracting and parsing text from Research Paper PDFs. Identifies citations and associated paragraphs. Collects and categorizes adjectives as positive or negative using a predefined word list.",
    link: "https://github.com/abhishek7997/cite-extract-python",
    source_code: "",
    image: "images/projects/citation-extraction.png",
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
    title: "LapShop",
    description:
      "Online laptop shopping website with state management with Redux Toolkit. Data is stored and retrieved from a MongoDB database.",
    link: "https://lapshop-mern.onrender.com/",
    source_code: "",
    image: "images/projects/lapshop.png",
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
      className="w-full flex flex-col scr_931:flex-row h-full items-start border-4 border-[#4d585f] p-4 sm:hover:border-emerald-400 sm:hover:bg-[#232425] sm:transition-all"
    >
      <div className="scr_931:min-w-max smm:w-full min-w-0 mr-2 overflow-clip">
        <img
          src={images}
          className="w-full h-64 scr_931:w-48 scr_931:h-48 mb-4 mr-2 object-cover object-center sm:hover:scale-125 sm:transition-all sm:duration-300 sm:ease-in"
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
            className="text-white font-misc font-light inline-block text-lg sm:hover:text-emerald-400 lg:transition-all max-w-fit"
            href={link ?? ""}
            rel="noreferrer"
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
