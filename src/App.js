import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Services from './Components/Services/Services'
import Portfolio from './Components/Portfolio/Portfolio'
import Testimonial from './Components/Testimonial/Testimonial'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Scrollup from './Components/Scrollup/Scrollup'

const App = () => {
  return (
    <>
    <Header/>
    <main className="main">
    <Home/>
    <About/>

    <Skills/>
    <Services/>
     <Portfolio/>
     <Testimonial/>
     <Contact/>
     </main>
     <Footer/>
     <Scrollup/>
    </>
  )
}

export default App