import React, {useState} from 'react'
import { innovatec, zpedidos, diablo3, cashflow} from './imagesbase64'
import './Projects.css'

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
      description: 'This is a delivery service where people can ask for food and services, I was as a fronted developer for its web app.',
      tecnologies: ['Vue.js', 'Bootstrap'],
      urlgithub: '',
      urllive: 'https://zpedidos.com/'
    },
    {
      img: cashflow,
      title: 'CashFlow-6Jars',
      description: 'App to manage personal expenses and incomes using 6 jars method proposed by Harv Eker. Using capacitor to build the app.',
      tecnologies: ['Vue.js', 'Quasar', 'TypeScript', 'Capacitor'],
      urlgithub: 'https://github.com/lucho19jose/personalcashflow',
      urllive: 'https://6jars.netlify.app/'
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
    {
      technology: 'Capacitor',
      color: '#1c7ed6'
    },
    {
      technology: 'TypeScript',
      color: '#3178c6'
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
              <div className='card-container-content'>
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
                    <a href={item.urllive} title="See the Project Live" target="_blank"><span>See Live</span></a>
                    { item.urlgithub ? <a href={item.urlgithub} title="See in Github" target="_blank"><span>Github</span></a>: null }
                </div>
              </div>
            </div>
          )) }
    </div>
  )
}

export default Projects