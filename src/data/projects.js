export const FEATURED_PROJECTS = [
  {
    id: "url-shortener-service",
    title: "URL Shortener Service",
    summary:
      "A service that turns long URLs into short codes and redirects them, with optional expiry and custom codes.",
    details: [
      {
        term: "ID generation",
        text: "Unique short codes derived from a global Redis atomic counter.",
      },
      {
        term: "Redirect path",
        text: "Redis caches hot URLs to keep reads off the database, and recursive redirects to the service's own URLs are rejected.",
      },
      {
        term: "Hit counting",
        text: "Click counters live in Redis and are flushed to MongoDB periodically, avoiding a database write per redirect.",
      },
      {
        term: "API hygiene",
        text: "URLs are normalised (case, trailing slashes, query parameters). Every request carries a correlation ID, and errors return stable error codes.",
      },
    ],
    stack: ["Java 17", "Spring Boot", "MongoDB", "Redis"],
    links: [
      {
        label: "Source",
        href: "https://github.com/abhishek7997/url-shortener-service",
      },
    ],
  },
  {
    id: "dforum",
    title: "dForum",
    summary: "A full-stack internet message board with account-based access.",
    details: [
      { term: "Backend", text: "Spring Boot with Spring Data JPA on MySQL." },
      { term: "Auth", text: "Spring Security with JWT-based authentication." },
      { term: "Frontend", text: "Angular client." },
    ],
    stack: ["Angular", "Spring Boot", "Spring Security", "MySQL"],
    links: [
      { label: "Source", href: "https://github.com/abhishek7997/dforum" },
    ],
  },
  {
    id: "citeextract",
    title: "CiteExtract",
    summary:
      "A Python tool that extracts and parses text from research-paper PDFs.",
    details: [
      {
        term: "Extraction",
        text: "Identifies citations and the paragraphs they appear in.",
      },
      {
        term: "Analysis",
        text: "Collects adjectives and classifies them as positive or negative against a predefined word list.",
      },
    ],
    stack: ["Python"],
    links: [
      {
        label: "Source",
        href: "https://github.com/abhishek7997/cite-extract-python",
      },
    ],
  },
]

export const OTHER_PROJECTS = [
  {
    id: "image-search",
    title: "Image Search",
    description:
      "Searches the Pixabay API as you type, updating results with each keystroke.",
    stack: ["React", "Material UI"],
    links: [
      { label: "Live", href: "https://abhishekimagesearch.netlify.app/" },
      { label: "Source", href: "https://github.com/abhishek7997/react-search" },
    ],
  },
  {
    id: "lyrics-finder",
    title: "Lyrics Finder",
    description: "Looks up song lyrics through the MusixMatch API.",
    stack: ["Next.js", "TypeScript"],
    links: [
      { label: "Live", href: "https://abhisheklyricsfinder.netlify.app/" },
      {
        label: "Source",
        href: "https://github.com/abhishek7997/lyrics-finder",
      },
    ],
  },
  {
    id: "snake-game",
    title: "Snake Game",
    description: "Classic snake game drawn on an HTML canvas.",
    stack: ["HTML", "CSS", "JavaScript"],
    links: [
      { label: "Live", href: "https://abhisheksnakegame.netlify.app/" },
      { label: "Source", href: "https://github.com/abhishek7997/snake-game" },
    ],
  },
]
