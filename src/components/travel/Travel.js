import React from 'react'
import './Travel.css'

const Travel = () => {
    return (
        <div>
            <div className="cardT watch-card">
                <span className="category">Estudar</span>
                <div className="icon watch" />
                <h2>Oferta Formativa</h2>
                <p>Constrói a tua carreira académica num ambiente altamente tecnológico e inovador.</p>
            </div>
            <div className="cardT plane-card">
                <span className="category">Viajar</span>
                <div className="icon plane">
                    <span className="wings" />
                    <span className="stabilizer" />
                </div>
                <h2>Programas de Mobilidade Internacionais</h2>
                <p>Candidata-te a uma experiência multicultural através de programas de mobilidade.</p>
            </div>
            <div className="cardT bulb-card">
                <span className="category">Inovar</span>
                <div className="icon bulb">
                    <span className="gleam" />
                    <span className="gleam" />
                    <span className="gleam" />
                    <span className="gleam" />
                    <span className="gleam" />
                </div>
                <h2>Empreendedorismo</h2>
                <p>Cria a tua empresa a partir de tecnologia e conhecimento gerados no Técnico.</p>
            </div>
            <div className="cardT sun-card">
                <span className="category">Viver</span>
                <div className="icon sun">
                    <span className="sunshine" />
                    <span className="sunshine" />
                    <span className="sunshine" />
                    <span className="sunshine" />
                </div>
                <h2>Residências, Cultura e Desporto</h2>
                <p>Participa no espírito académico através de um conjunto de atividades extracurriculares.</p>
            </div>
        </div>
    )
}

export default Travel