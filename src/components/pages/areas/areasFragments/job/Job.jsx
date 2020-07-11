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
                                    <img className="card-img" src="/img/areas/job/employment-exchange/employment-exchange.jpg" alt=""/>
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
