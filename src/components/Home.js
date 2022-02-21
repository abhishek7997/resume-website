import React from "react"
import HomeContent from "./HomeContent"
import Skills from "./Skills"
import Projects from "./Projects"
import WorkExperience from "./WorkExperience"
import Contact from "./Contact"

const Home = () => {
  return (
    <div className="w-5/6 py-16 px-8 smm:w-screen">
      <HomeContent />
      <Skills />
      <Projects />
      <WorkExperience />
      <Contact />
    </div>
  )
}

export default Home
