import React from "react"

const HomeContent = () => {
  return (
    <section id="home" className="min-h-screen w-full py-8 sm:px-4">
      <p className="text-white font-misc font-semibold text-4xl lg:transition-all decoration-emerald-400 mb-16 sm_576:text-6xl">
        <span className="text-teal-400 ">
          Hello<span className="animate-fade">&#x1f44b;</span>
        </span>
        <br />
        I'm{" "}
        <span className="lg:transition-all ease-in hover:text-emerald-400">
          Abhishek
        </span>
      </p>
      <p className="text-white text-2xl font-misc mb-16 sm:text-3xl">
        A 4th year B.Tech student who has a passion for coding and problem
        solving.
        <br />
        <br />I build websites that work well on all devices and I have used
        different web frameworks such as Reactjs and Angular and an app
        framework called Flutter.
        <br />
        <br />
        Other than that, I am also interested in Machine Learning, in which I
        have studied about basic Regression and Classification algorithms.
      </p>
      <a
        className="text-white font-misc text-4xl border-2 hover:bg-[#232425] hover:border-emerald-400 px-8 py-2 transition-all"
        href="https://drive.google.com/file/d/1S5vDBphMR4M9bogkUfB_occMJ3T82SW8/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        Resume
      </a>
    </section>
  )
}

export default HomeContent
