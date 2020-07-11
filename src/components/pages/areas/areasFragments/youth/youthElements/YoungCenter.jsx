import React from 'react'

import '../../../../../styles/areas/youth/youngCenter.css'

const YoungCenter = () => {

    React.useEffect(() => {
        window.scrollTo(0, 0)
        document.title='Centro Joven'
    }, [])

    return (
        <section id="young-center-details" className="container-fluid col-lg-9 col-md-9 col-sm-12 animated fadeIn">   
            <h1 className="details-title mt-3">Centro Joven</h1>
            <hr/>
            <div id="young-center-details-content">
                <div id="young-center-details-img" className="col-lg-6 col-md-6 col-sm-12 mb-4">
                    <img src="/img/areas/youth/young-center/young-center.jpg" alt=""/>
                </div>
                <p className="text-align-justify">El Espacio para la Creación y la Ciudadanía Joven de Magnolia del Campo, reabrió sus puertas tras una remodelación el 14 de Noviembre de 2015 para convertirse en el punto de encuentro y de ocio de los jóvenes magnolinos.</p>
            </div>
        </section>
    )
}

export default YoungCenter
