const HomeContent = () => {
  return (
    <section id="home" className="min-h-screen w-full py-8 sm:px-4">
      <p className="text-white font-misc font-semibold text-4xl lg:transition-all decoration-emerald-400 mb-16 sm_576:text-6xl">
        <span className="text-emerald-400 ">
          Hello<span className="animate-fade">&#x1f44b;</span>
        </span>
        <br />
        I'm{" "}
        <span className="lg:transition-all ease-in hover:text-emerald-400">
          Abhishek
        </span>
      </p>
      <p className="text-white text-2xl font-misc mb-16 sm:text-2xl">
        I am a software Engineer with 2+ years of experience in developing and
        deploying microservice‑based applications using Java, Spring Boot and
        AWS along with additional knowledge of Python and SQL. <br />
        Looking forward to contributing to the development of solutions that
        drive organizational growth.
        <br />
        <br />I have also created side projects using Reactjs and Angular
        frontend frameworks. For backend, I have worked on Nodejs, and Spring
        Boot. <br />I have used databases such as MySQL and MongoDB.
      </p>
      <a
        className="text-white font-misc text-4xl border-2 bg-[#141210] hover:bg-[#2d2d2e] hover:border-emerald-400 hover:text-emerald-400 px-10 py-2 transition-all"
        href="https://drive.google.com/file/d/1BJ6WqYyuKvzKCYd7yIVKzRItdV3kJSVE/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <span className="self-center align-[2px]">Resume</span>
      </a>
    </section>
  )
}

export default HomeContent
