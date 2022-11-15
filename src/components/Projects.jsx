import React, {useState} from 'react'
import './Projects.css'
import './cards.css'

const Projects = () => {

  const [Numcards, setNumcards] = useState([1,2,3, 4,5])
  return (
    <div className='projects-container'>
          { Numcards.map((item) => ( 
            <div className="img-card iCard-style1" key={item}>
              <div className="card-content">
                  <div className="card-image">
                      {/* <span className="card-title">Cloud Beauty</span> */}
                      <img src="../assets/imgs/zpedidos.png"/>
                  </div>
                  
                  <div className="card-text">
                      <p>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </p>
                  </div>
                  
              </div>
              
              <div className="card-link">
                  <a href="https://www.sigacetproperu.com/" title="Read Full"><span>Read Full</span></a>
              </div>
            </div>
          )) }
    </div>
  )
}

export default Projects