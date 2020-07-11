import React from 'react'

import { Link } from 'react-router-dom'


const Youth = () => {

    React.useEffect(() => {
        window.scrollTo(0, 0)
        document.title='Juventud'
    }, [])

    return (
        <section className="area-content animated fadeIn fast container-fluid col-lg-9 col-md-9 col-sm-12">
            <h1 className="area-content-title">JUVENTUD</h1>
            <hr noshade="noshade" className="w-50"/>
            <div className="area-cards row p-3">

                <Link to="/areas/juventud/centro-joven" className="area-card col-lg-5 col-md-5 col-sm-12 p-0">
                    <div className="card-img">
                        <div className="card-img-container">
                            <img className="card-img" src="/img/areas/youth/young-center/young-center.jpg" alt=""/>
                        </div>
                        <div className="card-title">
                            <h4>Centro Joven</h4>
                        </div>
                    </div>
                </Link>
                
                <Link to="/areas/juventud/carnet-joven-europeo" className="area-card col-lg-5 col-md-5 col-sm-12 p-0">
                    <div className="card-img">
                        <div className="card-img-container">
                            <img className="card-img" src="/img/areas/youth/european-youth-card/european-youth-card.jpg" alt=""/>
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
