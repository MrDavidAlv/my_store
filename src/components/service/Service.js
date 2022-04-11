import React from 'react'
import './Service.css'

const Service = () => {
    return (
        <div id="contenedorService">

            <header>
                <h1 style={{ color: 'white' }}>Nuestros servicos a su alcance</h1>
            </header>
            <div id="main">
                {/* FONT AWESOME DEMO */}
                <h2>Servicios de asesorias</h2>

                <div>
                    <div className="col_third">
                        <i className="fa fa-heart fa-5x icn_red wow pulse" data-wow-iteration="infinite" data-wow-duration="500ms" />
                        <p style={{ color: 'white' }}>Marketing Digital</p>
                    </div>
                    <div className="col_third">
                        <i className="fa fa-heart fa-5x icn_blue wow shake" data-wow-iteration="infinite" data-wow-duration="1500ms" />
                        <p style={{ color: 'white' }}>comercio electrónico</p>
                    </div>
                    <div className="col_third end">
                        <i className="fa fa-heart fa-5x icn_green wow bounce" data-wow-iteration="infinite" data-wow-duration="800ms" />
                        <p style={{ color: 'white' }}>Asesorias de inversion</p>
                    </div>
                    <div className="clear" />
                    {/*END / FONT AWESOME DEMO */}
                    {/* 3 COLUMN DEMO  */}




                    <div className="col_third">
                        <section className="section--yellow wow fadeInLeft" data-wow-delay="0.1s" style={{ visibility: 'visible', WebkitAnimationDelay: '0.1s', MozAnimationDelay: '0.1s', animationDelay: '0.1s' }}>
                            <div className='content-service'>
                                <img className='imgS' src="https://treceochenta.es/wp-content/uploads/2021/11/marketing-digital-cadiz.png" style={{ width: '70%' }} alt="marketing" />
                            </div>
                        </section>
                        <sbr />
                        <div>
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                                Launch demo modal
                            </button>
                            <span>  </span>
                            <button type="button" className="btn btn-success">Add</button>
                        </div>
                    </div>
                    <div className="col_third">
                        <section className="section--yellow wow fadeInLeft" data-wow-delay="0.1s" style={{ visibility: 'visible', WebkitAnimationDelay: '0.1s', MozAnimationDelay: '0.1s', animationDelay: '0.1s' }}>
                            <div className='content-service'>
                                <img className='imgS' src="https://www.pngplay.com/wp-content/uploads/6/E-Commerce-Shopping-Transparent-Background.png" style={{ width: '70%' }} alt="comercio electronico" />
                            </div>
                        </section>
                        <br />
                        <div>
                            <button type="button" className="btn btn-primary">Info</button>
                            <span>  </span>
                            <button type="button" className="btn btn-success">Add</button>
                        </div>
                    </div>
                    <div className="col_third end">
                        <section className="section--yellow wow fadeInLeft" data-wow-delay="0.1s" style={{ visibility: 'visible', WebkitAnimationDelay: '0.1s', MozAnimationDelay: '0.1s', animationDelay: '0.1s' }}>
                            <div className='content-service'>
                                <img className='imgS' src="https://proyectatufuturo.com/wp-content/uploads//2021/07/Cumplir-Metas.png" style={{ width: '70%' }} alt="marketing" />
                            </div>
                        </section>
                        <br />
                        <div>
                            <button type="button" className="btn btn-primary">Info</button>
                            <span>  </span>
                            <button type="button" className="btn btn-success">Add</button>
                        </div>
                    </div>
                </div>


                <div className="clear" />
                <h2>Servicios de criptomonedas</h2>
                <section className="section--purple">
                    <div className='content-service'>
                        <img className='imgS' src="https://fiusi.com/wp-content/uploads/2021/06/criptomonedas.png" style={{ width: '70%' }} alt="marketing" />
                    </div>
                </section>
                <div className="col_third">
                    <i className="fa fa-heart fa-5x icn_red wow pulse" data-wow-iteration="infinite" data-wow-duration="500ms" />
                    <p style={{ color: 'white' }}>Comprar Criptomonedas</p>
                </div>
                <div className="col_third">
                    <i className="fa fa-heart fa-5x icn_blue wow shake" data-wow-iteration="infinite" data-wow-duration="1500ms" />
                    <p style={{ color: 'white' }}>Vender criptomnedas</p>
                </div>
                <div className="col_third end">
                    <i className="fa fa-heart fa-5x icn_green wow bounce" data-wow-iteration="infinite" data-wow-duration="800ms" />
                    <p style={{ color: 'white' }}>Pagar con criptomonedas</p>
                </div>
                <div className="clear" />
                {/*END / FONT AWESOME DEMO */}
                {/* 3 COLUMN DEMO  */}
                <div className="col_third">
                    <section className="section--yellow wow fadeInLeft" data-wow-delay="0.1s" style={{ visibility: 'visible', WebkitAnimationDelay: '0.1s', MozAnimationDelay: '0.1s', animationDelay: '0.1s' }}>
                        <div className='content-service'>
                            <img className='imgS' src="https://www.buybitcoinworldwide.com/img/goodicons/cctop.png" style={{ width: '70%' }} alt="marketing" />
                        </div>
                    </section>
                    <br />
                    <div>
                        <button type="button" className="btn btn-primary">Info</button>
                        <span>  </span>
                        <button type="button" className="btn btn-success">Add</button>
                    </div>
                </div>
                <div className="col_third">
                    <section className="section--yellow wow fadeInLeft" data-wow-delay="0.1s" style={{ visibility: 'visible', WebkitAnimationDelay: '0.1s', MozAnimationDelay: '0.1s', animationDelay: '0.1s' }}>
                        <div className='content-service'>
                            <img className='imgS' src="https://cryptoblogx.com/images/binance/1622628316188/original/how-to-sell-and-buy-crypto-on-binance.jpg" style={{ width: '70%' }} alt="comercio electronico" />
                        </div>
                    </section>
                    <br />
                    <div>
                        <button type="button" className="btn btn-primary">Info</button>
                        <span>  </span>
                        <button type="button" className="btn btn-success">Pay</button>
                    </div>
                </div>
                <div className="col_third end">
                    <section className="section--yellow wow fadeInLeft" data-wow-delay="0.1s" style={{ visibility: 'visible', WebkitAnimationDelay: '0.1s', MozAnimationDelay: '0.1s', animationDelay: '0.1s' }}>
                        <div className='content-service'>
                            <img className='imgS' src="https://cryptoinversionesonline.com/wp-content/uploads/2020/10/comprar-y-vender-criptomonedas-de-forma-segura.png" style={{ width: '70%' }} alt="marketing" />
                        </div>
                    </section>
                    <br />
                    <div>
                        <button type="button" className="btn btn-primary">Info</button>
                        <span>  </span>
                        <button type="button" className="btn btn-success">Add</button>
                    </div>
                </div>



                {/*.SERVICES SECTION*/}
                <div className="clear" />
                <h2>Otros servicios</h2>
                <div className="service-section">
                    <div className="wow_imgage wow fadeInLeft" data-wow-delay="0.1s">
                        <img className='imgS' src="https://cdn.pixabay.com/photo/2019/12/05/00/36/leaves-4673997_960_720.jpg" width={270} height={180} />
                    </div>
                    <div className="wow_imgage wow fadeInLeft" data-wow-delay="0.2s">
                        <img className='imgS' src="https://cdn.pixabay.com/photo/2019/12/05/00/36/leaves-4673997_960_720.jpg" width={270} height={180} />
                    </div>
                    <div className="wow_imgage end wow fadeInLeft" data-wow-delay="0.3s">
                        <img className='imgS' src="https://cdn.pixabay.com/photo/2019/12/05/00/36/leaves-4673997_960_720.jpg" width={270} height={180} />
                    </div>
                </div>
                {/* End Images SECTION*/}
                {/* 3 COLUMN DEMO  */}

                <div className="clear" />
                {/* END / 3 COLUMN DEMO */}
                {/* FONT AWESOME DEMO */}
                <div className="col_third">
                    <i className="fa fa-heart fa-5x icn_red wow pulse" data-wow-iteration="infinite" data-wow-duration="500ms" />
                </div>
                <div className="col_third">
                    <i className="fa fa-heart fa-5x icn_blue wow shake" data-wow-iteration="infinite" data-wow-duration="1500ms" />
                </div>
                <div className="col_third end">
                    <i className="fa fa-heart fa-5x icn_green wow bounce" data-wow-iteration="infinite" data-wow-duration="800ms" />
                </div>
                <div className="clear" />
                {/*END / FONT AWESOME DEMO */}
            </div>
        </div>
    )
}

export default Service