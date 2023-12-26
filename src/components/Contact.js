import React, { useState } from "react"

const Contact = () => {
  const EMAIL = [
    97, 98, 104, 105, 115, 104, 101, 107, 109, 46, 119, 111, 114, 107, 50, 48,
    64, 103, 109, 97, 105, 108, 46, 99, 111, 109,
  ]

  const decodeEmail = (codes) => {
    let email = String.fromCharCode(...codes)
    return email
  }

  let [contact, setContact] = useState(undefined)

  return (
    <section id="contact" className="min-h-[90vh] w-full py-8 sm:px-4 mt-8">
      <p className="text-white font-misc font-semibold text-6xl transition-all decoration-emerald-400 mb-16 scr_931m:text-4xl">
        Contact
      </p>

      <div className="w-full space-y-5">
        <p>
          {contact === undefined ? (
            <p
              className="text-emerald-300 font-misc text-xl sm:text-3xl cursor-pointer lg:hover:text-emerald-400"
              onClick={() => setContact(decodeEmail(EMAIL))}
            >
              {"For email address, click here."}
            </p>
          ) : (
            <a
              href={`mailto:${contact}`}
              className="text-white font-misc text-xl sm:text-3xl"
            >
              <span className="lg:hover:text-emerald-400 lg:transition-all">
                {contact}
              </span>
            </a>
          )}
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/abhishek-m-3610541b6"
            className="text-white font-misc text-xl sm:text-3xl hover:text-emerald-400 lg:transition-all"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
        <p>
          <a
            href="https://www.github.com/abhishek7997"
            className="text-white font-misc text-xl sm:text-3xl hover:text-emerald-400 lg:transition-all"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </p>
      </div>
    </section>
  )
}

export default Contact
