import React from 'react'
import './Tecnology.css'

const Tecnology = () => {
    return (
        <div className='tecnology'>
            <p style={{fontSize:'16', color:'white'}}>Tecnologias principales en desarrollo web</p>
            <p style={{color:'white'}}>Seleccione las imagenes</p>
            <img className="imgT" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/64626/tecnology.png" alt="Tecnology" /> 
            <img className="imgT" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/64626/castelo.jpg" alt="Castelo" />
            <img className="imgT" src="https://images.squarespace-cdn.com/content/v1/5c3dfcbf2487fda73b24f479/1578344800339-KM3RDH0WL405PBIBT68T/Alpha_FINAL_12.17.18.png" alt="wolf"/>
        </div>
    )
}

export default Tecnology