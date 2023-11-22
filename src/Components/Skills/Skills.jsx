import React from 'react'
import Frontend from './Frontend'
import BAckend from './BAckend'
import './Skills.css'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>

        <div className="skills__container container grid">
            <Frontend/>
            <BAckend/>
        </div>
    </section>
)

}

export default Skills