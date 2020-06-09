import React from 'react'

import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { getYouth } from '../../../redux/areasDucks'


const Youth = () => {

    const dispatch = useDispatch()

    const youth = useSelector(store => store.areas.array)
    const loading = useSelector(store => store.areas.loading)


    React.useEffect(() => {
        dispatch(getYouth())
    }, [dispatch])


    return loading !== true ? (
        <section className="area-content container-fluid col-lg-9 col-md-9 col-sm-12">
            <h1 className="area-content-title">JUVENTUD</h1>
            <hr/>
            <div className="cards row">
                {
                    youth.map(item => (
                        <Link to={`/areas/juventud/${item.id}`} key={item.id} className="p-0 card col-lg-5 col-md-5 col-sm-12">
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

export default Youth
