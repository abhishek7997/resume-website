import { SkipLink, Header, Footer } from "@/components/layout"
import { Hero, About, Projects, Skills, Contact } from "@/components/sections"

const App = () => (
  <>
    <SkipLink />
    <Header />
    <main id="main" className="mx-auto max-w-5xl px-5 sm:px-8">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
    <Footer />
  </>
)

export default App
