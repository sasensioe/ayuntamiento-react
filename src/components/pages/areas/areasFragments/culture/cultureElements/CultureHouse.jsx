import React from 'react'

import '../../../../../styles/areas/culture/cultureHouse.css'

const NavalvillarLibrary = () => {

    React.useEffect(() => {
        window.scrollTo(0, 0)
        document.title='Biblioteca de Navalvillar de Pela'
    }, [])

    return (
        <section id="culture-house-details" className="container-fluid col-lg-9 col-md-9 col-sm-12">   
            <h1 className="details-title mt-3">Casa de la Cultura</h1>
            <hr/>
            <div id="culture-house-details-content">
                <div id="culture-house-details-img" className="col-12">
                    <img src="https://firebasestorage.googleapis.com/v0/b/ayuntamiento-2a2a8.appspot.com/o/areas%2Fdeporte%2Fcampo-futbol.jpg?alt=media&token=073e0255-84de-4a79-af29-bdb80fa2fc1e" alt=""/>
                </div>
                <p className="text-align-justify">La Casa de Cultura pretende cubrir las necesidades para el desarrollo y manifestación cultural en toda su amplitud, que solicitan nuestros vecinos</p>
                <p className="text-align-justify"><strong>Cuenta con 2 plantas distribuidas como sigue:</strong></p>
                <p className="text-align-justify">En la <strong>planta baja</strong> se distribuye el salón de actos, el almacén, el vestíbulo, la escalera y los aseos.</p>
                <p className="text-align-justify">En la <strong>primera planta</strong> se encuentra la biblioteca distribuida en cuatro salas, sala de lectura para adultos, sala de lectura para niños, sala de actividades para niños, y sala de acceso a Internet, depósito y recepción, vestíbulo, aseos.</p>
                <p className="text-align-justify">Invitamos desde aquí a todos nuestros conciudadanos y a todo aquel que desee participar abiertamente en las actividades y quiera disfrutar de nuestra cultura y de todo lo que ofrece nuestro pueblo.</p>
            </div>
        </section>
    )
}

export default NavalvillarLibrary
