import React from 'react'

import '../../../../../styles/areas/sport/sportsCenter.css'

const SportsCenter = () => {

    React.useEffect(() => {
        window.scrollTo(0, 0)
        document.title='Complejo Polideportivo "La Dehesa"'
    }, [])

    return (
        <section id="sports-center-details" className="container-fluid col-lg-9 col-md-9 col-sm-12">
            <div>
                <h1 className="details-title mt-3">Complejo Polideportivo "La Dehesa"</h1>
                <hr/>
                <div id="sports-center-details-content">
                    <div id="sports-center-details-img" className="col-lg-6 col-md-6 col-sm-12 p-0 mb-3 float-right">
                        <img src="https://firebasestorage.googleapis.com/v0/b/ayuntamiento-2a2a8.appspot.com/o/areas%2Fdeporte%2Fcampo-futbol.jpg?alt=media&token=073e0255-84de-4a79-af29-bdb80fa2fc1e" alt=""/>
                    </div>
                    <p className="text-align-justify">El deporte es uno de los pilares de nuestra localidad. Desde el Ayuntamiento de la localidad se ha potenciado las instalaciones deportivas con el fin de crear un Complejo Deportivo Municipal de alto nivel.</p>
                    <p className="text-align-justify">El Ayuntamiento consiguió que resurgiera el Olympic C.F. y que devolviera la ilusión de aquellas tardes de antaño, cuando el pueblo se volcaba apoyando al equipo. Con el esfuerzo de técnicos y jugadores, consiguieron subir a la Liga Provincial.</p>

                    <div className="mt-2 p-1">
                        <h4>Campo de fútbol</h4>
                        <div className="col-12 row m-0">
                            <img className="item-img col-lg-4 col-md-4-col-sm-12 p-4" src="https://firebasestorage.googleapis.com/v0/b/ayuntamiento-2a2a8.appspot.com/o/areas%2Fdeporte%2Fcampo-futbol.jpg?alt=media&token=073e0255-84de-4a79-af29-bdb80fa2fc1e" alt=""/>
                            <img className="item-img col-lg-4 col-md-4-col-sm-12 p-4" src="https://firebasestorage.googleapis.com/v0/b/ayuntamiento-2a2a8.appspot.com/o/areas%2Fdeporte%2Fcampo-futbol-2.jpeg?alt=media&token=eb5dbce3-a078-43f3-ab18-ce28f09003f4" alt=""/>
                            <img className="item-img col-lg-4 col-md-4-col-sm-12 p-4" src="https://firebasestorage.googleapis.com/v0/b/ayuntamiento-2a2a8.appspot.com/o/areas%2Fdeporte%2Fcampo-futbol-3.jpg?alt=media&token=517bc6e2-41bf-43c9-92f9-c8130dc9d1d8" alt=""/>
                        </div>
                        <div>
                            <p className="text-align-justify">Destacar la instalación eléctrica del campo de fútbol mediante seis torres, y legalización de toda la instalación eléctrica del complejo. Esta mejora permitirá jugar partidos de fútbol de noche.</p><br/>
                            <p className="text-align-justify">Señalar la Instalación de asientos en el Campo de Fútbol.</p><br/>
                            <p className="text-align-justify"><strong>Horario: </strong>Contactar con el Patronato Municipal de Deportes del Ayuntamiento de Navalvillar de Pela. teléfono: 924 861 800</p>
                        </div>
                    </div>

                    <div className="mt-2 p-1">
                        <h4>Gimnasio Municipal</h4>
                        <div className="col-12 row m-0">
                            <img className="item-img col-lg-4 col-md-4-col-sm-12 p-4" src="https://firebasestorage.googleapis.com/v0/b/ayuntamiento-2a2a8.appspot.com/o/areas%2Fdeporte%2Fgimnasio-1.jpg?alt=media&token=ea548d2e-0a01-40d4-ae96-be0e440eaf91" alt=""/>
                            <img className="item-img col-lg-4 col-md-4-col-sm-12 p-4" src="https://firebasestorage.googleapis.com/v0/b/ayuntamiento-2a2a8.appspot.com/o/areas%2Fdeporte%2Fgimnasio-2.jpg?alt=media&token=4d4fa439-fc49-4838-b1e7-0882b2833541" alt=""/>
                            <img className="item-img col-lg-4 col-md-4-col-sm-12 p-4" src="https://firebasestorage.googleapis.com/v0/b/ayuntamiento-2a2a8.appspot.com/o/areas%2Fdeporte%2Fcampo-futbol.jpg?alt=media&token=073e0255-84de-4a79-af29-bdb80fa2fc1e" alt=""/>
                        </div>
                        <div>
                            <p className="text-align-justify">El proyecto del nuevo Gimnasio ha sido realizado por el arquitecto local Juan Antonio Fernández Durán.&nbsp;La construcción del Gimnasio ha supuesto una inversión de 162.366,54 euros y ocupa una superficie de 150 m2.</p><br/>
                            <p className="text-align-justify">Dispone de una sala central de musculación, aseos, vestuarios femeninos y masculinos, almacén para el uso propio del Gimnasio y almacén para maquinaria del campo de fútbol.</p><br/>
                        </div>
                    </div>

                    <div className="mt-2 p-1">
                        <h4>Piscina Municipal</h4>
                        <div className="col-12 row m-0">
                            <img className="item-img col-lg-4 col-md-4-col-sm-12 p-4" src="https://firebasestorage.googleapis.com/v0/b/ayuntamiento-2a2a8.appspot.com/o/areas%2Fdeporte%2Fpiscina-1.jpg?alt=media&token=f2ce142b-2329-4592-b53b-946c5b857f18" alt=""/>
                            <img className="item-img col-lg-4 col-md-4-col-sm-12 p-4" src="https://firebasestorage.googleapis.com/v0/b/ayuntamiento-2a2a8.appspot.com/o/areas%2Fdeporte%2Fpiscina-2.jpg?alt=media&token=e9097deb-be5c-42b8-b826-7663dd651a81" alt=""/>
                            <img className="item-img col-lg-4 col-md-4-col-sm-12 p-4" src="https://firebasestorage.googleapis.com/v0/b/ayuntamiento-2a2a8.appspot.com/o/areas%2Fdeporte%2Fpiscina-3.jpg?alt=media&token=37a5ac22-50d7-49e0-82df-ecae72310a4b" alt=""/>
                        </div>
                        <div>
                            <p className="text-align-justify">Abre sus puertas entre los meses de junio y septiembre. Además de la entrada libre, cada año se desarrollan Cursos de natación promovidos por el PMD.</p><br/>
                            <p className="text-align-justify">Cuenta con dos vasos, el de niños, de 70m2, y el general, de 800 m2.</p><br/>
                            <p className="text-align-justify">Dispone de Bar Restaurante y Pista polideportiva.</p>
                        </div>
                    </div>

                    <div className="mt-2 p-1">
                        <h4>Pabellón Polideportivo "Pedro Luis Arroyo"</h4>
                        <div className="col-12 row m-0">
                            <img className="item-img col-lg-4 col-md-4-col-sm-12 p-4" src="https://firebasestorage.googleapis.com/v0/b/ayuntamiento-2a2a8.appspot.com/o/areas%2Fdeporte%2Fpabellon-1.jpeg?alt=media&token=0902f102-476f-474d-b530-d330704fd981" alt=""/>
                            <img className="item-img col-lg-4 col-md-4-col-sm-12 p-4" src="https://firebasestorage.googleapis.com/v0/b/ayuntamiento-2a2a8.appspot.com/o/areas%2Fdeporte%2Fpabellon-2.jpg?alt=media&token=22a932ad-3bcf-4078-b9bd-c9bd5fbdba07" alt=""/>
                            <img className="item-img col-lg-4 col-md-4-col-sm-12 p-4" src="https://firebasestorage.googleapis.com/v0/b/ayuntamiento-2a2a8.appspot.com/o/areas%2Fdeporte%2Fpabellon-3.jpg?alt=media&token=fd4f132c-8f51-49cf-9fdf-3ecb63dc3f11" alt=""/>
                        </div>
                        <div>
                            <p className="text-align-justify">En 1999 se inauguraba el Pabellón Polideportivo “Pedro Luis Arroyo”, donde pueden practicarse, entre otros deportes, baloncesto,balonmano fútbol sala, voleibol, badminton y gimnasia.</p><br/>
                            <p className="text-align-justify">Sus instalaciones cuentan con una pista de uso múltiple, graderíos para trescientas personas, cuatro vestuarios, aseos, vestíbulo,etc… más zonas de descanso con jardines y paseos en su espacio interior inmediato.</p><br/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SportsCenter
