const SideBar = () => {
  const links = ["Home", "Skills", "Projects", "Experience", "Contact"]
  const handleClick = (e) => {
    let location = e.target.innerText.toLowerCase().replaceAll(" ", "-")
    let destination = document.getElementById(location) ?? null

    e.preventDefault()

    if (location === "home") {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
      return
    }

    destination &&
      destination.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
  }
  return (
    <aside className="sticky left-0 top-0 max-h-screen w-64 min-w-max bg-[#22333B] hidden sm:block">
      <ul>
        {links.map((link) => {
          return (
            <li
              key={`id-sidebar-${link}`}
              onClick={handleClick}
              className="bg-[#22333B] hover:bg-[#2b414b] pl-12 py-8 text-[#EAE0D5] text-xl hover:text-2xl lg:transition-all hover:cursor-pointer"
            >
              {link}
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default SideBar
