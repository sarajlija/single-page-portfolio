import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import { Container } from "react-bootstrap"
//import "./css/custom.css"
//import "./scss/custom.scss"
//import "./scss/custom.css"

function App() {
  return (
    <>
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
