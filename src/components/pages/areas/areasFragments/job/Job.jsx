import React from 'react'

import { Link } from 'react-router-dom'

const Job = () => {

    React.useEffect(() => {
        window.scrollTo(0, 0)
        document.title='Empleo'
    }, [])

    return (
        <section className="area-content animated fadeIn fast container-fluid col-lg-9 col-md-9 col-sm-12">
            <h1 className="area-content-title">EMPLEO</h1>
            <hr noshade="noshade" className="w-50"/>
            <div className="area-cards row p-3">

                        <Link to="/areas/empleo/bolsa-empleo" className="area-card col-lg-5 col-md-5 col-sm-12 p-0">
                            <div className="card-img">
                                <div className="card-img-container">
                                    <img className="card-img" src="https://firebasestorage.googleapis.com/v0/b/ayuntamiento-2a2a8.appspot.com/o/areas%2Fempleo%2Fempleo.jpg?alt=media&token=2745b2a5-46af-4d4e-9a59-debe82d12868" alt=""/>
                                </div>
                                <div className="card-title">
                                    <h4>Agencia de Empleo</h4>
                                </div>
                            </div>
                        </Link>

            </div>
        </section>
    )
}

export default Job
