import React from 'react'
import './Magazine.css'

const Magazine = () => {
    return (
        <div className='magazine'>
            <div className="containerMagazine">
                <div className="grid tc">
                    <div className="folio bb">
                        <p className="b f6 sans-serif pb2 tl">Storia di copertina</p>
                    </div>
                    <div className="page-title tc">
                        <h1 className="alfa title-headline tracked-tight">Americanistica</h1>
                        <h2 className="merriweather tracked-tight title-deck">Numeri, fatti, primati degli Stati Uniti</h2>
                        <p className="ttu f7 b tracked lh-title">A cura di Sara Deganello e davide mottes, illustrazioni di marta signori</p>
                    </div>
                    <div className="section-1 tc bt"><div>
                        <h1 className="alfa tracked-tight section-1-headline">Buone festivà</h1>
                        <h2 className="section-1-deck merriweather lh-title measure-narrow center">Gli apputamenti del calendario che scandiscono l'idenità a stelle e strisce generano anche un indotto economico di rilievo</h2></div>
                    </div>
                    <div className="hero-image bt bb">
                        <img src="https://preview.ibb.co/j1LFDa/Screen_Shot_2017_09_04_at_2_22_12_PM.png" />
                    </div>
                    <div className="section-2 relative">
                        <div className="section-2-label absolute w-100">
                            <p className="ttu tracked f7 b bg-white dib ph2">4 luglio</p>
                        </div>
                        <h2 className="alfa tracked-tight section-2-headline">Fest dell'Indipendenza</h2>
                        <p className="merriweather section-2-subhead i">Independence Day</p>
                        <div className="section-2-subsection-1 br">
                            <img src="https://image.ibb.co/mjNHRv/Screen_Shot_2017_09_04_at_3_07_20_PM.png" style={{ width: '110px' }} />
                            <h3 className="stat b">3,6</h3>
                            <p className="ttu b tracked f7 pb2">milioni di dollari</p>
                            <p className="pb3">È il valore delle importazioni di bandiere Usa nel 2014; vengono soprattutto dalla Cina (3,5 milioni). 1,8 milioni è invece il valore di quelle esportate: soprattutto in Turchia (ne ha comprate per 673mil adollari).</p>
                            <h3 className="stat b">59</h3>
                            <p className="ttu b tracked f7 pb2">luoghi</p>
                            <p>Si chiamano Liberty negli Usa.</p>
                        </div>
                        <div className="section-2-subsection-2">
                            <h3 className="stat b">2,5</h3>
                            <p className="ttu b tracked f7 pb2">milioni</p>
                            <p className="pb3">La popolazione Usa nel luglio 1776. Oggi gli statunitensi sono 320 milioni.</p>
                            <img src="https://image.ibb.co/e3hsRv/Screen_Shot_2017_09_04_at_3_32_43_PM.png" style={{ width: '110px' }} />
                            <h3 className="stat b">247</h3>
                            <p className="ttu b tracked f7 pb2">milioni di dollari</p>
                            <p className="pb3">È il valore dl fuochi artificali importati dalla Cina nel 2014. Gli Usa ne hanno esportati per 12 milioni di dollari; 5.4 verso Israele, il migliore acquirente.</p>
                        </div>
                    </div>
                    <div className="section-3 relative">
                        <div className="section-3-label absolute w-100">
                            <p className="ttu tracked f7 b bg-white dib ph2">31 ottobre</p>
                        </div>
                        <h2 className="alfa tracked-tight section-3-headline">Halloween</h2>
                        <div className="section-3-subhead">
                            <img src="https://image.ibb.co/hSj3zF/Screen_Shot_2017_09_04_at_3_39_14_PM.png" style={{ width: '110px' }} />
                        </div>
                        <div className="section-3-subsection-1 br">
                            <h3 className="stat b">50k</h3>
                            <p className="ttu b tracked f7 pb2">acri coltivati</p>
                            <p className="pb3">Sono i campi di zucche negli Usa nel 2013. I maggiori Stati produttori: Illinois, California, Ohio, Michigan.</p>
                        </div>
                        <div className="section-3-subsection-2">
                            <h3 className="stat b">41,2</h3>
                            <p className="ttu b tracked f7 pb2">milioni</p>
                            <p className="pb3">Sono i ragazzi americani tra i 5 e i 14 anni: tutto potenziali trick or treaters.</p>
                        </div>
                    </div>
                    <div className="section-4 relative">
                        <div className="section-4-label absolute w-100">
                            <p className="ttu tracked f7 b bg-white dib ph2">26 novembre</p>
                        </div>
                        <h2 className="alfa tracked-tight section-4-headline">Festa del ringraziamento</h2>
                        <p className="merriweather section-2-subhead i">Thanksgiving Day</p>
                        <div className="section-4-subsection-1 br">
                            <h3 className="stat b">152</h3>
                            <p className="ttu b tracked f7 pb2">anni fa</p>
                            <p className="pb3">Il presidente Lincoln proclamò festa nazionale l'ultimo giovedì di novembre. Successivamente Roosevelt la spostò al quarto per stimolare le vendite natalizie (il goirno dopo è il Black Friday).</p>
                        </div>
                        <div className="section-4-subsection-2">
                            <h3 className="stat b">42</h3>
                            <p className="ttu b tracked f7 pb2">luoghi</p>
                            <p className="pb3">Si chiamano Plymouth negli Usa. È il posto in cui sbarcarono i padri pellegrini nel 1620 e in cul nel 1621 si festeggiò il primo giorno del ringrazimento tra coloni inglesi e indian Wampanoag.</p>
                        </div>
                        <div className="section-4-subsection-3 pa3">
                            <p className="s4-ss3-s1 ttu s4-box b tracked lh-title">soprattutto, i doni della terra</p>
                            <p className="s4-ss3-s2 s4-box i merriweather lh-title pv2 measure center">Nel menu tradizionale possiamo trovare: tacchino al forno, purè, salsa di cranberry, potato dolci, torta di zucca</p>
                            <div className="sans-serif s4-box s4-ss3-s3 lh-title">
                                <p className="b">242 milioni</p>
                                <p className>E il numero di tacchini alleviati negli Usa nel 2014 (il 5% in meno rispetto al 2012). Maggiori stati produti Minnesota (45 milioni), North Carolina (35), Arkansas (29), Indiana (17).</p>
                            </div>
                            <div className="sans-serif s4-box s4-ss3-s4 lh-title">
                                <p className="b">19 milioni di dolari</p>
                                <p className="pb3">E il numero delle importazioni di tacchini viv net 2013, il 99.9% viene del Canada.</p>
                                <p className="b">1,088,622 tonneliate</p>
                                <p className>E la produzione cli patate dolci negli Usa nel 2014.</p>
                            </div>
                            <div className="sans-serif s4-box s4-ss3-s5 lh-title">
                                <p className="b">2388,275 tonneliate</p>
                                <p className>È la produzione di cranberry (mirtillo rosso americano) nel 2014. Il Wisconsin è il maggior producttore con 244,-37 tonnellate, seguito dal Massachusetts con 95,254.</p>
                            </div>
                            <p className="sans-serif s4-box s4-ss3-s6 lh-title pv2 b">Ci sono 20 luoghi negli Usa che si chiamano Turkey - B. invece. Cranberry.</p>
                        </div>
                    </div>
                    <div className="section-5 relative">
                        <div className="section-5-label absolute w-100">
                            <p className="ttu tracked f7 b bg-white dib ph2">25 dicembre</p>
                        </div>
                        <h2 className="alfa tracked-tight section-5-headline">Natale</h2>
                        <div className="measure-narrow center section-5-subsection-1">
                            <h3 className="stat b">24,4</h3>
                            <p className="ttu b tracked f7 pb2">miliardi di dollari</p>
                            <p className="pb3 measure center">È il valore dei consumi Usa a dicembre (il 40% più di novembre). Il 19% è speso nelle gioiellerie.</p>
                        </div>
                        <div className=" center section-5-subsection-2">
                            <img src="https://image.ibb.co/c0owKF/Screen_Shot_2017_09_04_at_4_29_50_PM.png" style={{ height: '150px' }} />
                            <h3 className="stat b">137,5</h3>
                            <p className="ttu b tracked f7 pb2">milioni di dollari</p>
                            <p className="pb3 measure-narrow center">È il valore delle importazioni Usa di alberi natalizi sintetici dalla Cina.</p>
                        </div>
                        <div className="center section-5-subsection-3">
                            <img src="https://image.ibb.co/hsKsta/Screen_Shot_2017_09_04_at_4_30_02_PM.png" style={{ height: '150px' }} />
                            <h3 className="stat b">1931</h3>
                            <p className="ttu b tracked f7 pb2">l'anno di santa</p>
                            <p className="pb3 measure-narrow center">Haddon Sundblom inizia a disengare Babbo Natale per la Coca-Cola.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Magazine