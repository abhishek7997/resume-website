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
        I'm a fourth-year B.Tech student with a strong passion for coding and
        solving problems.
        <br />
        <br />I create websites that offer seamless experiences across different
        devices. I have hands-on experience with various web frameworks like
        ReactJS and Angular, as well as the versatile app framework called
        Flutter.
        <br />
        <br />
        In addition to web development, I'm also interested in Machine Learning.
        I've studied basic Regression and Classification algorithms to better
        understand how data can be analyzed and patterns can be identified.
      </p>
      <a
        className="text-white font-misc text-4xl border-2 hover:bg-[#232425] hover:border-emerald-400 px-8 py-2 transition-all"
        href="https://drive.google.com/file/d/12PCIWumXeIyL6-WaICHh6B_Egyaxs9bH/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        Resume
      </a>
    </section>
  )
}

export default HomeContent
