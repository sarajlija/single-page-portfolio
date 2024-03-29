import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import React, { useEffect, useState } from "react"
import "./App.css"
function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleWindowResize)

    return () => {
      window.removeEventListener("resize", handleWindowResize)
    }
  })
  console.log(windowWidth)
  return (
    <div className="App">
      <main className="overflow-hidden font-face-gm">
        <Hero windowWidth={windowWidth} />
        <Skills />
        <Projects windowWidth={windowWidth} />
      </main>
      <Contact />
    </div>
  )
}

export default App
