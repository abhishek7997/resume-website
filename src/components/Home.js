import React from "react"
import HomeContent from "./HomeContent"
import Skills from "./Skills"
import Projects from "./Projects"
import WorkExperience from "./WorkExperience"
import Contact from "./Contact"

const Home = () => {
  return (
    <div className="sm_576:w-5/6 sm:pt-16 pb-16 px-8 w-screen">
      <HomeContent />
      <Skills />
      <Projects />
      <WorkExperience />
      <Contact />
    </div>
  )
}

export default Home
