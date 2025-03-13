import React from 'react'
import Navbar from './portfolio/Navbar'
import Hero from './portfolio/Hero'
import About from './portfolio/About'
import Technology from './portfolio/Technology'
import Experience from './portfolio/Experience'
import Projects from './portfolio/Projects'
import Contact from './portfolio/Contact'

const Portfolio = () => {
  return (
    <>
    <div className='fixed top-0 -z-10 h-full w-full'>
        {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
    </div>
      <div className="container mx-auto px-8">
        <Navbar/>
        <Hero />
        <About />
        <Technology />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default Portfolio
