import React from 'react'
import './About.css'
import imge from "../../Assets/ekam.png" 
import {FiAward} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {BsFolderFill} from 'react-icons/bs'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-img">
            <img src={imge} alt="About Image"/>
          </div>
        </div>
        <div className='about__content'>
            <div className='about__cards'>
              
              <article className='about__card'>
                <FiAward className='about__icon'/>
                <h5>Experience</h5>
                <small>1+ Years Working</small>
              </article>
             
              
              
              <article className='about__card'>
                <BsFolderFill className='about__icon'/>
                <h5>Projects</h5>
                <small>10+ projects</small>
              </article>
            </div>
            <p>Hi, I am Ekam Singh Behl, a passionate full stack developer based in Melbourne,Australia.<br/> I Like to build websites, android apps and games. <br/>
When not working on my projects, I like to play competitive chess, watch anime and go stargazing with my telescope. </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            
            
        </div>
      </div>
    </section>
  )
}

export default About
