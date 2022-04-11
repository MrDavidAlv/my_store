import React from 'react'
import './News.css'

const News = () => {
    return (
        <div>
            <h1 style={{color:'white'}}>News</h1>
            <div id="mainbox"> 
                <div className="cardNew">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/43/News_of_the_World_%28film%29_Logo.png" alt="" />
                    <h1>Noticia destacada</h1>
                    <img className='imgnew' src="https://www.20minutos.es/files/image_150_113/uploads/imagenes/2022/02/04/ethereum.png" alt="criptoNews"/>
                    <h3>Así ha sido el robo de criptomonedas más grande de la historia</h3>
                    <p>Cerca de 600 millones de dólares desaparecen en 'Axie Infinity', el 'Pokémon de los NFT'. Quienes juegan a este videojuego pueden minar y conseguir dinero virtual criando y poniendo a luchar a unos animales.</p>
                </div>
                <div className="cardNew">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/43/News_of_the_World_%28film%29_Logo.png" alt="" />
                    <h1>Noticia destacada</h1>
                    <img className='imgnew' src="https://www.20minutos.es/files/image_150_113/uploads/imagenes/2022/03/30/criptomonedas.jpeg" alt="criptoNews"/>
                    <h3>Las criptomonedas tienen una nueva casilla en la Renta de este año, ¿es obligatorio declararlas?</h3>
                    <p>La Campaña de la Renta 2021 comienza el próximo 6 de abril e incluye una novedad que afecta a los usuarios de criptomonedas. A partir de este año, deberán incluir sus activos en monedas virtuales en una nueva casilla de forma específica. </p>
                </div>
                <div className="cardNew">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/43/News_of_the_World_%28film%29_Logo.png" alt="" />
                    <h1>Noticia destacada</h1>
                    <img className='imgnew' src="https://www.20minutos.es/files/image_150_113/uploads/imagenes/2022/03/28/imagen-de-satoshi-island-la-isla-centrada-en-las-criptomonedas.jpeg" alt="criptoNews"/>
                    <h3>Crean un 'criptoparaíso', una isla centrada en los Bitcoin que ya tiene más de 50.000 interesados en mudarse</h3>
                    <p>La Isla Satoshi está situada en el Pacífico Sur y busca "convertirse en una criptoeconomía del mundo real".</p>
                </div>
                <div className="cardNew">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/43/News_of_the_World_%28film%29_Logo.png" alt="" />
                    <h1>Noticia destacada</h1>
                    <img className='imgnew' src="https://www.20minutos.es/files/image_150_113/uploads/imagenes/2022/03/25/huida-de-la-guerra.png" alt="criptoNews"/>
                    <h3>Un joven ucraniano huye de la guerra con 2000 dólares gracias a un USB</h3>
                    <p>CEl joven gastó 600 dólares en criptomonedas para pagar un autobús que le permitiese huir a Polonia, comprar comida y alquilar una habitación de hotel.</p>
                </div>
                <div className="cardNew">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/43/News_of_the_World_%28film%29_Logo.png" alt="" />
                    <h1>Noticia destacada</h1>
                    <img className='imgnew' src="https://www.20minutos.es/files/image_150_113/uploads/imagenes/2022/03/25/el-youtuber-catalan-carles-tamayo.jpeg" alt="criptoNews"/>
                    <h3>Cae una supuesta estafa piramidal relacionada con las criptomonedas tras los reportajes de un 'youtuber' catalán</h3>
                    <p>Persuadían a jóvenes, algunos menores de edad, con la promesa de grandes ganancias", indica la Policía Nacional.</p>
                </div>
                <div className="cardNew">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/43/News_of_the_World_%28film%29_Logo.png" alt="" />
                    <h1>Noticia destacada</h1>
                    <img className='imgnew' src="https://www.20minutos.es/files/image_150_113/uploads/imagenes/2022/03/24/estafa.jpeg" alt="criptoNews"/>
                    <h3>Desmantelan una estafa piramidal que engañaba a menores para invertir en criptomonedas y 'hacerse ricos'</h3>
                    <p>Los estafadores captaban a menores sin conocimientos en mercados financieros y se les prometía formación para ganar dinero sin tener que trabajar.</p>
                </div>
               
            </div>
        </div>
    )
}

export default News