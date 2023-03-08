import "./sass/main.css"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
//import "./scss/custom.scss"
//import "./scss/custom.css"

function App() {
  return (
    <main className="bg-black">
      <Hero />
      <Skills />
      <Projects />
    </main>
  )
}

export default App
