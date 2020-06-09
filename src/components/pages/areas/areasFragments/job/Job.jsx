import React from 'react'

import { Link } from 'react-router-dom'

const Job = () => {

    return (
        <section className="area-content container-fluid col-lg-9 col-md-9 col-sm-12">
            <h1 className="area-content-title">EMPLEO</h1>
            <hr/>
            <div className="cards row">

                        <Link to="/areas/empleo/bolsa-empleo" className="p-0 card col-lg-5 col-md-5 col-sm-12">
                            <div className="card-img">
                                <div className="card-img-container">
                                    <img className="card-img" src="https://firebasestorage.googleapis.com/v0/b/ayuntamiento-2a2a8.appspot.com/o/areas%2Fempleo%2Fempleo.jpg?alt=media&token=2745b2a5-46af-4d4e-9a59-debe82d12868" alt=""/>
                                </div>
                                <div className="card-title">
                                    <h4>Bolsa de Empleo</h4>
                                </div>
                            </div>
                        </Link>

            </div>
        </section>
    )
}

export default Job
