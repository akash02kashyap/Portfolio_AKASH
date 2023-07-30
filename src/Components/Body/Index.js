import React from 'react'
import About from './About/Index';
import Projects from './Projects/Index';
import   Skills  from './Skills/Index';
import Contact  from './Contact/Index';
import Work  from './Work/Index';
import './Body.css'

const Body = () => {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="work">
        <Work />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
    </div>
  )
}

export default Body
