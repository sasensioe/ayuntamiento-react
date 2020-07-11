import React from 'react'

import '../../../../../styles/areas/sport/sportsCenter.css'

const SportsCenter = () => {

    React.useEffect(() => {
        window.scrollTo(0, 0)
        document.title='Complejo Polideportivo "La Dehesa"'
    }, [])

    return (
        <section id="sports-center-details" className="container-fluid col-lg-9 col-md-9 col-sm-12 animated fadeIn">
            <div>
                <h1 className="details-title mt-3">Complejo Polideportivo "La Dehesa"</h1>
                <hr/>
                <div id="sports-center-details-content">
                    <div id="sports-center-details-img" className="col-lg-6 col-md-6 col-sm-12 p-0 mb-3 float-right">
                        <img src="/img/areas/sport/sports-centre/football-1.jpg" alt=""/>
                    </div>
                    <p className="text-align-justify">El deporte es uno de los pilares de nuestra localidad. Desde el Ayuntamiento de la localidad se ha potenciado las instalaciones deportivas con el fin de crear un Complejo Deportivo Municipal de alto nivel.</p>
                    <p className="text-align-justify">El Ayuntamiento consiguió que resurgiera el Magnolino C.F. y que devolviera la ilusión de aquellas tardes de antaño, cuando el pueblo se volcaba apoyando al equipo. Con el esfuerzo de técnicos y jugadores, consiguieron subir a la Liga Provincial.</p>

                    <div className="mt-2 p-1">
                        <h4>Campo de fútbol</h4>
                        <div className="col-12 row m-0">
                            <img className="item-img col-lg-4 col-md-4-col-sm-12 p-4" src="/img/areas/sport/sports-centre/football-1.jpg" alt=""/>
                            <img className="item-img col-lg-4 col-md-4-col-sm-12 p-4" src="/img/areas/sport/sports-centre/football-2.jpeg" alt=""/>
                            <img className="item-img col-lg-4 col-md-4-col-sm-12 p-4" src="/img/areas/sport/sports-centre/football-3.jpg" alt=""/>
                        </div>
                        <div>
                            <p className="text-align-justify">Destacar la instalación eléctrica del campo de fútbol mediante seis torres, y legalización de toda la instalación eléctrica del complejo. Esta mejora permitirá jugar partidos de fútbol de noche.</p><br/>
                            <p className="text-align-justify">Señalar la Instalación de asientos en el Campo de Fútbol.</p><br/>
                            <p className="text-align-justify"><strong>Horario: </strong>Contactar con el Patronato Municipal de Deportes del Ayuntamiento de Magnolia del Campo</p>
                        </div>
                    </div>

                    <div className="mt-2 p-1">
                        <h4>Gimnasio Municipal</h4>
                        <div className="col-12 row m-0">
                            <img className="item-img col-lg-4 col-md-4-col-sm-12 p-4" src="/img/areas/sport/sports-centre/gym-1.jpg" alt=""/>
                            <img className="item-img col-lg-4 col-md-4-col-sm-12 p-4" src="/img/areas/sport/sports-centre/gym-2.jpg" alt=""/>
                            <img className="item-img col-lg-4 col-md-4-col-sm-12 p-4" src="/img/areas/sport/sports-centre/gym-3.jpg" alt=""/>
                        </div>
                        <div>
                            <p className="text-align-justify">El proyecto del nuevo Gimnasio ha sido realizado por el arquitecto local Juan Antonio Asensio Espinosa. La construcción del Gimnasio ha supuesto una inversión de 162.366,54 euros y ocupa una superficie de 150 m2.</p><br/>
                            <p className="text-align-justify">Dispone de una sala central de musculación, aseos, vestuarios femeninos y masculinos, almacén para el uso propio del Gimnasio y almacén para maquinaria del campo de fútbol.</p><br/>
                        </div>
                    </div>

                    <div className="mt-2 p-1">
                        <h4>Piscina Municipal</h4>
                        <div className="col-12 row m-0">
                            <img className="item-img col-lg-4 col-md-4-col-sm-12 p-4" src="/img/areas/sport/sports-centre/pool-1.jpg" alt=""/>
                            <img className="item-img col-lg-4 col-md-4-col-sm-12 p-4" src="/img/areas/sport/sports-centre/pool-2.jpg" alt=""/>
                            <img className="item-img col-lg-4 col-md-4-col-sm-12 p-4" src="/img/areas/sport/sports-centre/pool-3.jpg" alt=""/>
                        </div>
                        <div>
                            <p className="text-align-justify">Abre sus puertas entre los meses de junio y septiembre. Además de la entrada libre, cada año se desarrollan Cursos de natación promovidos por el PMD.</p><br/>
                            <p className="text-align-justify">Cuenta con dos vasos, el de niños, de 70m2, y el general, de 800 m2.</p><br/>
                            <p className="text-align-justify">Dispone de Bar Restaurante y Pista polideportiva.</p>
                        </div>
                    </div>

                    <div className="mt-2 p-1">
                        <h4>Pabellón Polideportivo "Paula Machado"</h4>
                        <div className="col-12 row m-0">
                            <img className="item-img col-lg-4 col-md-4-col-sm-12 p-4" src="/img/areas/sport/sports-centre/sports-center-1.jpeg" alt=""/>
                            <img className="item-img col-lg-4 col-md-4-col-sm-12 p-4" src="/img/areas/sport/sports-centre/sports-center-2.jpg" alt=""/>
                            <img className="item-img col-lg-4 col-md-4-col-sm-12 p-4" src="/img/areas/sport/sports-centre/sports-center-3.jpg" alt=""/>
                        </div>
                        <div>
                            <p className="text-align-justify">En 1999 se inauguraba el Pabellón Polideportivo “Paula Machado”, donde pueden practicarse, entre otros deportes, baloncesto,balonmano fútbol sala, voleibol, badminton y gimnasia.</p><br/>
                            <p className="text-align-justify">Sus instalaciones cuentan con una pista de uso múltiple, graderíos para trescientas personas, cuatro vestuarios, aseos, vestíbulo,etc… más zonas de descanso con jardines y paseos en su espacio interior inmediato.</p><br/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SportsCenter
