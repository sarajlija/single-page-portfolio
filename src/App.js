import "./sass/main.css"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import "./App.css"
import { Container } from "react-bootstrap"
//import "./scss/custom.scss"
//import "./scss/custom.css"

function App() {
  return (
    <>
      <main>
        <Container>
          <Hero />
          <Skills />
          <Projects />
          <Contact />
        </Container>
      </main>
    </>
  )
}

export default App
