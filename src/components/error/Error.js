import React from 'react'
import { Link } from 'react-router-dom';
import './Error.css'

const Error = () => {
    return (
        <div>
            <h1>Esta pagina no se encuentra actualmente</h1>
            <p className="zoom-area"><b>CSS</b> animations to make a cool 404 page. </p>
            <section className="error-container">
                <span className="four"><span className="screen-reader-text">4</span></span>
                <span className="zero"><span className="screen-reader-text">0</span></span>
                <span className="four"><span className="screen-reader-text">4</span></span>
            </section>
            <div className="link-container">
                <Link to="/home" className="more-link">Volver al inicio</Link>
            </div>
        </div>
    )
}

export default Error