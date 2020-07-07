import React from 'react'

import '../../../../../styles/areas/culture/popularUniversity.css'

const PopularUniversity = () => {

    React.useEffect(() => {
        window.scrollTo(0, 0)
        document.title='Universidad Popular'
    }, [])

    return (
        <section id="popular-details" className="container-fluid col-lg-9 col-md-9 col-sm-12 animated fadeIn">   
            <h1 className="details-title mt-3">Universidad Popular</h1>
            <hr/>
            <div id="popular-details-content">
                <div id="popular-details-img" className="col-lg-6 col-md-6 col-sm-12 float-right">
                    <img src="https://firebasestorage.googleapis.com/v0/b/ayuntamiento-2a2a8.appspot.com/o/areas%2Fcultura%2FUPP.jpg?alt=media&token=9f8b0997-66dc-4cc3-aca8-575ffb09f4fe" alt=""/>
                </div>
                <p className="mt-3">La Universidad Popular Peleña (U.P.P.) está ubicada en la Plaza de España, en el edificio anexo del Ayuntamiento, y&nbsp;fue creada el 29 de marzo de 1996 como un servicio del Ayuntamiento de Navalvillar de Pela dependiente de la Concejalía de Cultura. Desde entonces, tal y como figura en las Bases Conceptuales de la Federación Española de Universidades Populares (F.E.U.P.), a la que pertenece, <strong>Proyecto de desarrollo cultural…</strong> y como “proyecto de desarrollo cultural que actúa en el municipio” su objetivo es promover la participación social, la educación, la formación y la cultura, para mejorar la calidad de vida de las personas y de la comunidad.</p>
                <p>Su objetivo es promover la participación social, la educación, la formación y la cultura, para mejorar la calidad de vida de las personas y de la comunidad.</p>
                <span>Queremos:</span>
                <ul>
                    <li>Contribuir al desarrollo personal.</li>
                    <li>Promover un desarrollo sostenible.</li>
                    <li>Favorecer la integridad social.</li>
                    <li>Promover la igualdad de oportunidades entre hombres y mujeres.</li>
                    <li>Potenciar el acceso y uso creativo de las tecnologías de la información y la comunicación.</li>
                    <li>Ampliar y mejorar el aprendizaje y la convivencia intercultural.</li>
                    <li>Mejorar la empleabilidad.</li>
                </ul>
                <span>Las tres líneas fundamentales de actuación de la U.P.P. son:</span>
                <ul>
                    <li><strong>La acción sociocultural</strong></li>
                    <li><strong>La acción socioeducativa</strong></li>
                    <li><strong>La acción socioeconómica</strong></li>
                </ul>
                <span>Además de estas tres líneas fundamentales, lleva a cabo tareas de apoyo y coordinación de:</span>
                <ul>
                    <li>Escuela municipal de música</li>
                    <li>Coral municipal</li>
                    <li>Banda municipal de música</li>
                </ul>
                <span>Así mismo:</span>
                <p>La Universidad Popular Peleña pertenece a la Asociación de Universidades Populares de Extremadura (AUPEX), la asociación regional de universidades populares más importante de España, con más 200 universidades populares asociadas a día de hoy, y a la Federación Española de Universidades Populares (FEUP).</p>
                <p>Desde la Universidad Popular Peleña no pretendemos imponer ninguna visión de la cultura por acertada que nos parezca. La cultura es de todos y para todos. . Entendemos que la cultura es de todos y para todos, y, por eso, estamos dispuestos a aprender de cualquiera que tenga algo que enseñarnos.</p>
            
            </div>
        </section>
    )
}

export default PopularUniversity
