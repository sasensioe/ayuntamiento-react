import React from 'react'

import '../../../../../styles/areas/culture/library.css'

const Library = () => {
    
    React.useEffect(() => {
        window.scrollTo(0, 0)
        document.title='Agencia de Lectura'
    }, [])
    
    return (
        <section id="library-details" className="container-fluid col-lg-9 col-md-9 col-sm-12 animated fadeIn">
            <h1 className="details-title mt-3">Agencia de Lectura</h1>
            <hr/>
            <div id="library-details-content">
                <div id="library-details-img" className="col-12">
                    <img src="/img/areas/culture/library/library.jpg" alt=""/>
                </div>
                <p className="text-align-justify"><strong>La Agencia de Lectura abre sus puertas de lunes a viernes en horario de 16:30 a 20:00 horas.</strong></p>
                <p className="text-align-justify">Cuenta con tres partes muy bien diferenciadas, la Zona Infantil, la Zona de Adultos y el Acceso a Internet.</p>
                <p className="text-align-justify">Entre las actividades que se vienen desarrollando desde hace cuatro años destacan el Club de Lectura de Adultos “Un Café Con Dulce Chacón”, los miércoles de 16:30 a 17:30 horas, el club de lectura infantil “Duendes en la nube”, martes alternativos de 17:30 a 18:30 y el Rincón Infantil, los sábados por la mañana, de 11:00 a 13:30.</p>
                <p className="text-align-justify">En abril de 2010 y en abril de 2013 recibió el Premio al mejor programa de fomento de la lectura en Extremadura.</p>
            </div>
        </section>
    )
}

export default Library
