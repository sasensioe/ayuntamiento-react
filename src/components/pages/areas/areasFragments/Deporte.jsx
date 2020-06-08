import React from 'react'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { getSport } from '../../../redux/areasDucks'



const Deporte = () => {


    const dispatch = useDispatch()
    const sport = useSelector(store => store.areas.array)

    const loading = useSelector(store => store.areas.loading)

    React.useEffect(() => {
        dispatch(getSport())
    }, [dispatch])




    return loading !== true ? (
        <section className="area-content container-fluid col-lg-9 col-md-9 col-sm-12">
            <h1 className="area-content-title">DEPORTE</h1>
            <hr/>
            <div className="cards row">
            {
                    sport.map(item => (
                        <Link to={`/areas/deporte/${item.id}`} key={item.id} className="p-0 card col-lg-5 col-md-5 col-sm-12">
                        <div className="card-img">
                            <div className="card-img-container">
                                <img className="card-img" src={item.mainPic} alt=""/>
                            </div>
                            <div className="card-title">
                                <h4>{item.title}</h4>
                            </div>
                        </div>
                        </Link>
                    ))
                }
            </div>
        </section>
    ) : null
}

export default Deporte
