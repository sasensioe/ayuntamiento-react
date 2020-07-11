import React from 'react'

import { Link } from 'react-router-dom'


const Sport = () => {

    React.useEffect(() => {
        window.scrollTo(0, 0)
        document.title='Deporte'
    }, [])

    return (
        <section className="area-content animated fadeIn fast container-fluid col-lg-9 col-md-9 col-sm-12">
            <h1 className="area-content-title">DEPORTE</h1>
            <hr noshade="noshade" className="w-50"/>
            <div className="area-cards row p-3">

                <Link to="/areas/deporte/polideportivo-la-dehesa" className="area-card col-lg-5 col-md-5 col-sm-12 p-0">
                    <div className="card-img">
                        <div className="card-img-container">
                            <img className="card-img" src="/img/areas/sport/sports-centre/football-1.jpg" alt=""/>
                        </div>
                        <div className="card-title">
                            <h4>Complejo Polideportivo "La Dehesa"</h4>
                        </div>
                    </div>
                </Link>

            </div>
        </section>
    )
}

export default Sport
