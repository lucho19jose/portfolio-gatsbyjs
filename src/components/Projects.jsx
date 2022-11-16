import React, {useState} from 'react'
import { innovatec, zpedidos, diablo3 } from './innovatec'
import './Projects.css'
//import './cards.css'

const Projects = () => {

  const [Numcards, setNumcards] = useState([1,2,3, 4,5])

  const projects = [
    {
      img: innovatec,
      title: 'Siga CETPRO Perú',
      description: 'This project is an academic system for manage processes like enrollment, grades, assistance in technical institutions. In this project my rol was as a Fullstack developer.',
      tecnologies: ['Vue.js', 'Laravel', 'Quasar'],
      urlgithub: '',
      urllive: 'https://www.sigacetproperu.com/'
    },
    {
      img: zpedidos,
      title: 'Zpedidos web',
      description: 'This is a delivery service where people can ask for food and services, I was as a fronted developer creating user interfaces.',
      tecnologies: ['Vue.js', 'Bootstrap'],
      urlgithub: '',
      urllive: 'https://zpedidos.com/'
    },
    {
      img: diablo3,
      title: 'Profile Finder - Diablo3',
      description: 'This is a personal project where people can look for profiles with BattleTag using Diablo 3 API.',
      tecnologies: ['Vue.js', 'Bootstrap', 'Font Awesome'],
      urlgithub: 'https://github.com/lucho19jose/Vue2-Diablo3Juego',
      urllive: 'https://diablo3inproduction.netlify.app/#/'
    },
  ]

  const tecnologies = [
    {
      technology: 'Vue.js',
      color: '#42b883'
    },
    {
      technology: 'Laravel',
      color: '#f9322c'
    },
    {
      technology: 'Quasar',
      color: '#00b4ff'
    },
    {
      technology: 'Bootstrap',
      color: '#712cf9'
    },
    {
      technology: 'Font Awesome',
      color: '#1c7ed6'
    },
  ]

  return (
    <div className='projects-container'>
          { projects.map((item) => ( 
            <div className="card-container" key={item.urllive}>
              <div className="card-image">
                  {/* <span className="card-title">Cloud Beauty</span> */}
                  <img src={item.img} alt='proyect in portfolio' className='card-image-img'/>
              </div>
              
              <div className="card-description">
                  <p>
                      { item.description }
                  </p>
              </div>
                  
              <div className='card-tecnologies'>
                { item.tecnologies.map((technology) => (
                  <span className={`badge`} style={{backgroundColor: tecnologies.find(item => item.technology == technology)?.color }}>{ technology }</span>
                )) }
              </div>
              
              <div className="card-links">
                  <a href={item.urllive} title="See Live" target="_blank"><span>See Live</span></a>
              </div>
            </div>
          )) }
    </div>
  )
}

export default Projects