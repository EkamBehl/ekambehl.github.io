import React from 'react'
import "./Portfolio.css"
import img1 from "../../Assets/portfolio1.jpg"
import img2 from "../../Assets/api.jpg"

const data=[
  {
  id:1,
  image:img1,
  title:'title',
  github:'https://github.com',
  demo:'https://github.com'
  },
  {
    id:2,
    image:img1,
    title:'title',
    github:'https://github.com',
    demo:'https://github.com'
  },
  
  

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      <article className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={img2} alt='folio' />
            </div>
            <h3> Robot Controller Api</h3>
            <h5>Asp.net Core | Postman | Swagger </h5>
            <div className="portfolio__item-cta">
              <a href='https://github.com/EkamBehl/robot-controller-api' className='btn' target='_blank'> Github</a>

            </div>

          </article>
      {data.map(({id,image,title,github,demo})=>{
        return(
          <article key={id} className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={image} alt={title} />
            </div>
            <h3> {title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className='btn' target='_blank'> Github</a>
              <a href={demo} className='btn-primary btn' target='_blank'>Live Demo</a>

            </div>

          </article>
      


        )
        

      })}
      
      </div>
    </section>
  )
}

export default Portfolio
