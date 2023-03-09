import "./sass/main.css"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
//import "./scss/custom.scss"
//import "./scss/custom.css"

function App() {
  return (
    <>
      <main className="bg-black">
        <style type="text/css">
          {`
      h1 {
        font-size:88px;
      }
    a {
      color: #ffffff;
      text-transform: uppercase;
      font-size:16px;
      text-decoration: none;
      border-bottom: 3px solid #4ee1a0;
     
    }
    a:hover {
        color:#4ee1a0;    
     
    }
    .navbar {    
      border-bottom:none;
    }
    .nav-link {  
      text-decoration: none;  
      border-bottom:none;
    }
    .contact {
      background-color:#242424;
      
    }
    .card {
      background-color:#242424;
     
    }
    .btn-primary {
      background-color:transparent;
      color:#ffffff;
      border:0;
      border-bottom: 3px solid  #4ee1a0;
      outline:#4ee1a0;
    }
    .btn-primary:hover{
      background-color:transparent;
      color:#4ee1a0;
       
    }
    .btn-primary:active{
      background-color:transparent;
      border-bottom: 3px solid  #4ee1a0; 
    }
    .btn-primary:focus{
      background-color:transparent;
      border-bottom: 3px solid  #4ee1a0; 
    }
   
    `}
        </style>
        <Hero />
        <Skills />
        <Projects />
      </main>
      <footer>
        <Contact />
      </footer>
    </>
  )
}

export default App
