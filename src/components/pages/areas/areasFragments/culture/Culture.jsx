import React from 'react'

import { Link } from 'react-router-dom'


const Culture = () => {

    return (
        <section className="area-content container-fluid col-lg-9 col-md-9 col-sm-12">
            <h1 className="area-content-title">CULTURA</h1>
            <hr/>
            <div className="cards row">
                    <Link to="/areas/cultura/biblioteca-navalvillar" className="p-0 card col-lg-5 col-md-5 col-sm-12">
                        <div className="card-img">
                            <div className="card-img-container">
                                <img className="card-img" src="https://firebasestorage.googleapis.com/v0/b/ayuntamiento-2a2a8.appspot.com/o/areas%2Fcultura%2Fbiblioteca-navalvillar.jpg?alt=media&token=478e17a2-2ce9-41ab-a645-6ed839f7e14c" alt=""/>
                            </div>
                            <div className="card-title">
                                <h4>Biblioteca de Navalvillar de Pela</h4>
                            </div>
                        </div>
                    </Link>
                    <Link to="/areas/cultura/agencia-lectura-obando" className="p-0 card col-lg-5 col-md-5 col-sm-12">
                        <div className="card-img">
                            <div className="card-img-container">
                                <img className="card-img" src="https://firebasestorage.googleapis.com/v0/b/ayuntamiento-2a2a8.appspot.com/o/areas%2Fcultura%2Fbiblioteca-obando.jpg?alt=media&token=b5410130-ca14-4811-9c2e-b3668feb5d92" alt=""/>
                            </div>
                            <div className="card-title">
                                <h4>Agencia de Lectura de Obando</h4>
                            </div>
                        </div>
                    </Link>
                    <Link to="/areas/cultura/universidad-popular" className="p-0 card col-lg-5 col-md-5 col-sm-12">
                        <div className="card-img">
                            <div className="card-img-container">
                                <img className="card-img" src="https://firebasestorage.googleapis.com/v0/b/ayuntamiento-2a2a8.appspot.com/o/areas%2Fcultura%2FUPP.jpg?alt=media&token=9f8b0997-66dc-4cc3-aca8-575ffb09f4fe" alt=""/>
                            </div>
                            <div className="card-title">
                                <h4>Universidad Popular</h4>
                            </div>
                        </div>
                    </Link>
                    <a href="https://www.lacolmenacultural.com/municipios.php?id_municipio=060910001&tipo_interes=0" className="p-0 card col-lg-5 col-md-5 col-sm-12">
                        <div className="card-img">
                            <div className="card-img-container">
                                <img className="card-img" src="https://firebasestorage.googleapis.com/v0/b/ayuntamiento-2a2a8.appspot.com/o/areas%2Fcultura%2Fla_colmena.jpg?alt=media&token=d070348b-33ff-411c-b59f-f62b62181bae" alt=""/>
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
