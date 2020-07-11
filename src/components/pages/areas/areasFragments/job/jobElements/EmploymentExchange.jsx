import React from 'react'

import '../../../../../styles/areas/job/employmentExchange.css'

const EmploymentExchange = () => {

    React.useEffect(() => {
        window.scrollTo(0, 0)
        document.title='Agencia de Empleo'
    }, [])

    return (
        <section id="employment-details" className="container-fluid col-lg-9 col-md-9 col-sm-12 animated fadeIn">   
            <h1 className="details-title mt-3">Agencia de Empleo</h1>
            <hr/>
            <div id="employment-details-content">
                <div id="employment-details-img" className="col-lg-6 col-md-6 col-sm-12 float-right">
                    <img src="/img/areas/job/employment-exchange/employment-exchange.jpg" alt=""/>
                </div>
                <p className="text-align-justify">La Agencia de Empleo y Desarrollo Local es un <strong>servicio público y gratuíto</strong> que se pone a disposición de la ciudadanía para potenciar el desarrollo socioeconómico y la generación de empleo en Magnolia del Campo.</p>
                <p>Desde su creación en el año 1996, su misión principal ha sido la de colaborar en la implantación de políticas activas de empleo orientadas a la <strong>generación y desarrollo de actividad económica</strong>. Conscientes de que las empresas son el motor de creación de riquezas y generación de empleo, los servicios que se prestan giran en torno a la figura del promotor y empresario:</p>
                <span><strong>Lo que ofrecemos:</strong></span>
                <ul>
                    <li>Asesoramiento técnico en la primera fase de constitución de una empresa</li>
                    <li>Apoyo a promotores y empresarios en materia de gestión económica</li>
                    <li>Gestión y tramitación de las subvenciones de la Junta de Extremadura y las ayudas del Programa de Desarrollo Rural (PRODER)</li>
                    <li>Apoyo a la creación de empresas que puedan ser calificadas de I+E</li>
                    <li>Información y orientación laboral</li>
                    <li>Colaboración en la puesta en marcha y desarrollo de programas gestionados por el Servicio Extremeño para el Empleo (SEXPE)</li>
                    <li>Gestión de la Bolsa de empleo municipal</li>
                    <li>Programa de Formación Profesional Dual @prendizext</li>
                </ul>
            </div>
        </section>
    )
}

export default EmploymentExchange
