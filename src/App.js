import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

//import "./css/custom.css"
//import "./scss/custom.scss"
//import "./scss/custom.css"

function App() {
  return (
    <>
      <main className="overflow-hidden">
        <Hero />
        <Skills />
        <Projects />
      </main>
      <Contact />
    </>
  )
}

export default App
