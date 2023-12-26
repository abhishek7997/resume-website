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
      <p className="text-white text-2xl font-misc mb-16 sm:text-2xl">
        I'm working as a software engineer who enjoys building projects and
        solving problems.
        <br />
        <br />
        I have gained exposure to various technologies and applied them in
        building projects. For frontend development, I used ReactJS, Redux, and
        Angular. On the backend, I have used Nodejs, ExpressJS, and Spring Boot,
        and integrated databases such as MySQL and MongoDB.
        <br />
        <br />
        Additionally, I learned Flutter and built small android projects.
      </p>
      <a
        className="text-white font-misc text-4xl border-2 hover:bg-[#232425] hover:border-emerald-400 px-8 py-2 transition-all"
        href="https://drive.google.com/file/d/1BJ6WqYyuKvzKCYd7yIVKzRItdV3kJSVE/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        Resume
      </a>
    </section>
  )
}

export default HomeContent
