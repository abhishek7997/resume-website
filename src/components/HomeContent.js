import React from "react"

const HomeContent = () => {
  return (
    <section id="home" className="min-h-screen w-full py-8 px-4">
      <p className="text-white font-misc font-semibold text-6xl transition-all decoration-emerald-400 mb-16 smm:text-5xl">
        <span className="text-teal-400">Hello, </span>
        <br></br>
        I'm{" "}
        <span className="transition-all ease-in hover:text-emerald-400">
          M.Abhishek
        </span>
      </p>
      <p className="text-white text-3xl font-misc mb-16 smm:text-2xl">
        I am a 3rd year B.Tech student who has a passion for coding and problem
        solving. <br></br>I build websites that work well on all devices.
      </p>
      <a
        className="text-white font-misc text-4xl border-2 hover:bg-[#232425] hover:border-emerald-400 px-8 py-2 transition-all"
        href="#"
        target="_blank"
      >
        Resume
      </a>
    </section>
  )
}

export default HomeContent
