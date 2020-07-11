import React from 'react'

import '../../../../../styles/areas/youth/europeanYouthCard.css'

const EuropeanYouthCard = () => {

    React.useEffect(() => {
        window.scrollTo(0, 0)
        document.title='Carnet Joven Europeo'
    }, [])

    return (
        <section id="youth-card-details" className="container-fluid col-lg-9 col-md-9 col-sm-12 animated fadeIn">   
            <h1 className="details-title mt-3">Carnet Joven Europeo</h1>
            <hr/>
            <div id="youth-card-details-content">
                <div id="youth-card-details-img" className="col-lg-6 col-md-6 col-sm-12 mb-3">
                    <img src="/img/areas/youth/european-youth-card/european-youth-card.jpg" alt=""/>
                </div>
                <p className="text-align-justify"><strong>El Carné Joven Europeo, te ofrece la oportunidad de poder disfrutar de descuentos, ofertas especiales y muchas ventajas en toda Europa.</strong></p>
                <p>Si te gusta viajar encontrarás descuentos en hoteles, albergues, alojamientos rurales, agencias de viajes, alquiler de coches, transportes, etc.</p>
                <p>Si prefieres quedar con tu gente para salir, podéis disfrutar de precios especiales en cines, centros de ocio, restaurantes y cafeterías</p>
                <p>Si necesitas hacer un regalo, conseguir tu música favorita, adquirir materiales para llevar a cabo alguno de tus hobbies, cambiar los muebles de tu casa, comprar libros, ropa, calzado, etc., con el Carné Joven Europeo te resultará un poco más económico</p>
                <p>Si eliges darte un capricho en un centro de belleza o en una peluquería, cambiar tus gafas, ponerte lentillas… puedes beneficiarte de diferentes descuentos</p>
            
            </div>
        </section>
    )
}

export default EuropeanYouthCard
