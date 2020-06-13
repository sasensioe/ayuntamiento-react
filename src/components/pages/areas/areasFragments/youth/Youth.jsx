import React from 'react'

import { Link } from 'react-router-dom'


const Youth = () => {

    React.useEffect(() => {
        window.scrollTo(0, 0)
        document.title='Juventud'
    }, [])

    return (
        <section className="area-content container-fluid col-lg-9 col-md-9 col-sm-12">
            <h1 className="area-content-title">JUVENTUD</h1>
            <hr noshade="noshade" className="w-50"/>
            <div className="area-cards row p-3">

                <Link to="/areas/juventud/centro-joven" className="area-card col-lg-5 col-md-5 col-sm-12 p-0">
                    <div className="card-img">
                        <div className="card-img-container">
                            <img className="card-img" src="https://firebasestorage.googleapis.com/v0/b/ayuntamiento-2a2a8.appspot.com/o/areas%2Fjuventud%2Fcentro-joven.jpg?alt=media&token=3cb5d82d-7674-494d-8a96-f978828284fb" alt=""/>
                        </div>
                        <div className="card-title">
                            <h4>Centro Joven</h4>
                        </div>
                    </div>
                </Link>
                
                <Link to="/areas/juventud/carnet-joven-europeo" className="area-card col-lg-5 col-md-5 col-sm-12 p-0">
                    <div className="card-img">
                        <div className="card-img-container">
                            <img className="card-img" src="https://firebasestorage.googleapis.com/v0/b/ayuntamiento-2a2a8.appspot.com/o/areas%2Fjuventud%2Fcarnet-joven.jpg?alt=media&token=497ce077-a4e6-4092-8ed3-4a9f1e415bb2" alt=""/>
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
