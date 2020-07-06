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
                            <img className="card-img" src="https://firebasestorage.googleapis.com/v0/b/ayuntamiento-2a2a8.appspot.com/o/areas%2Fdeporte%2Fcampo-futbol.jpg?alt=media&token=073e0255-84de-4a79-af29-bdb80fa2fc1e" alt=""/>
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
