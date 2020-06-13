import React, {Fragment} from 'react'

import { Link } from 'react-router-dom'


const Areas = () => {

    return (
        <Fragment>
            <section className="areas-container container mt-5">
                <h1 className="areas-title text-center">ÁREAS</h1>
                <hr noshade="noshade" className="w-75"/>
                <div className="areas-content album">
                    <div className="row">
                        <div className="area col-lg-3 col-md-6 col-sm-12">
                            <Link to="/areas/deporte" className="card-area">
                                DEPORTE
                            </Link>
                        </div>
                        <div className="area col-lg-3 col-md-6 col-sm-12">
                            <Link to="/areas/cultura" className="card-area">
                                CULTURA
                            </Link>
                        </div>
                        <div className="area col-lg-3 col-md-6 col-sm-12">
                            <Link to="/areas/juventud" className="card-area">
                                JUVENTUD
                            </Link>
                        </div>
                        <div className="area col-lg-3 col-md-6 col-sm-12">
                            <Link to="/areas/empleo" className="card-area">
                                EMPLEO
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Areas
