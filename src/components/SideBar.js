import React from "react"

const SideBar = () => {
  const links = ["Home", "Skills", "Projects", "Work Experience", "Contact"]
  const handleClick = (e) => {
    let location = e.target.innerText.toLowerCase().replaceAll(" ", "-")
    let destination = document.getElementById(location)

    e.preventDefault()

    destination &&
      destination.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
  }
  return (
    <aside className="sticky left-0 top-0 max-h-screen w-64 min-w-max bg-[#4d585f] smm:hidden">
      <ul>
        {links.map((link) => {
          return (
            <li
              key={`id-sidebar-${link}`}
              onClick={handleClick}
              className="bg-[#4d585f] hover:bg-[#333539] pl-4 py-3.5 text-white text-xl hover:text-2xl transition-all hover:cursor-pointer"
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
