import React from "react"

const Contact = () => {
  const EMAIL = [
    109, 97, 98, 104, 105, 115, 104, 101, 107, 49, 48, 48, 50, 64, 103, 109, 97,
    105, 108, 46, 99, 111, 109,
  ]

  const decodeEmail = (codes) => {
    let email = String.fromCharCode(...codes)
    return email
  }

  let contact = decodeEmail(EMAIL)

  return (
    <section id="contact" className="min-h-[90vh] w-full py-8 px-4 mt-8">
      <p className="text-white font-misc font-semibold text-6xl transition-all decoration-emerald-400 mb-16 scr_931m:text-4xl">
        Contact
      </p>

      <div className="w-full space-y-5">
        <p>
          <a
            href={`mailto:${contact}`}
            className="text-white font-misc text-3xl"
          >
            Email :{" "}
            <span className="hover:text-emerald-400 transition-all">
              {contact}
            </span>
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/abhishek-m-3610541b6"
            className="text-white font-misc text-3xl hover:text-emerald-400 transition-all"
          >
            LinkedIn
          </a>
        </p>
        <p>
          <a
            href="https://www.github.com/abhishek7997"
            className="text-white font-misc text-3xl hover:text-emerald-400 transition-all"
          >
            Github
          </a>
        </p>
      </div>
    </section>
  )
}

export default Contact
