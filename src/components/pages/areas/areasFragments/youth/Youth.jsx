import React from 'react'

import { Link } from 'react-router-dom'


const Youth = () => {


    return (
        <section className="area-content container-fluid col-lg-9 col-md-9 col-sm-12">
            <h1 className="area-content-title">JUVENTUD</h1>
            <hr/>
            <div className="cards row">

                <Link to="/areas/juventud/centro-joven" className="p-0 card col-lg-5 col-md-5 col-sm-12">
                    <div className="card-img">
                        <div className="card-img-container">
                            <img className="card-img" src="https://firebasestorage.googleapis.com/v0/b/ayuntamiento-2a2a8.appspot.com/o/areas%2Fdeporte%2Fcampo-futbol.jpg?alt=media&token=073e0255-84de-4a79-af29-bdb80fa2fc1e" alt=""/>
                        </div>
                        <div className="card-title">
                            <h4>Centro Joven</h4>
                        </div>
                    </div>
                </Link>
                
                <Link to="/areas/juventud/carnet-joven-europeo" className="p-0 card col-lg-5 col-md-5 col-sm-12">
                    <div className="card-img">
                        <div className="card-img-container">
                            <img className="card-img" src="https://firebasestorage.googleapis.com/v0/b/ayuntamiento-2a2a8.appspot.com/o/areas%2Fdeporte%2Fcampo-futbol.jpg?alt=media&token=073e0255-84de-4a79-af29-bdb80fa2fc1e" alt=""/>
                        </div>
                        <div className="card-title">
                            <h4>Carnet Joven Europeo</h4>
                        </div>
                    </div>
                </Link>

            </div>
        </section>
    )
}

export default Youth
