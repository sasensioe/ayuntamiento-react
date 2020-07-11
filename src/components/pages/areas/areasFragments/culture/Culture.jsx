import React from 'react'

import { Link } from 'react-router-dom'


const Culture = () => {

    React.useEffect(() => {
        window.scrollTo(0, 0)
        document.title='Cultura'
    })

    return (
        <section className="area-content animated fadeIn fast container-fluid col-lg-9 col-md-9 col-sm-12">
            <h1 className="area-content-title">CULTURA</h1>
            <hr noshade="noshade" className="w-50"/>
            <div className="area-cards row p-3">
                    <Link to="/areas/cultura/casa-cultura" className="area-card col-lg-5 col-md-5 col-sm-12 p-0">
                        <div className="card-img">
                            <div className="card-img-container">
                                <img className="card-img" src="/img/areas/culture/culture-house/culture-house.jpg" alt=""/>
                            </div>
                            <div className="card-title">
                                <h4>Casa de la Cultura</h4>
                            </div>
                        </div>
                    </Link>
                    <Link to="/areas/cultura/agencia-lectura" className="area-card col-lg-5 col-md-5 col-sm-12 p-0">
                        <div className="card-img">
                            <div className="card-img-container">
                                <img className="card-img" src="/img/areas/culture/library/library.jpg" alt=""/>
                            </div>
                            <div className="card-title">
                                <h4>Agencia de Lectura</h4>
                            </div>
                        </div>
                    </Link>
                    <Link to="/areas/cultura/universidad-popular" className="area-card col-lg-5 col-md-5 col-sm-12 p-0">
                        <div className="card-img">
                            <div className="card-img-container">
                                <img className="card-img" src="/img/areas/culture/popular-university/UPM.jpg" alt=""/>
                            </div>
                            <div className="card-title">
                                <h4>Universidad Popular</h4>
                            </div>
                        </div>
                    </Link>
                    <a href="https://www.lacolmenacultural.com/" target="_blank" rel="noopener noreferrer" className="area-card col-lg-5 col-md-5 col-sm-12 p-0">
                        <div className="card-img">
                            <div className="card-img-container">
                                <img className="card-img" src="/img/areas/culture/la-colmena/la-colmena.jpg" alt=""/>
                            </div>
                            <div className="card-title">
                                <h4>La Colmena Cultural</h4>
                            </div>
                        </div>
                    </a>
            </div>
        </section>
    )
}

export default Culture
