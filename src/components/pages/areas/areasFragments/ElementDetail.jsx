import React from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleElement } from '../../../redux/areasDucks'


const ElementDetail = () => {

    const [area, setArea] = React.useState()
    const [id, setId] = React.useState()

    const dispatch = useDispatch()

    const element = useSelector(store => store.areas.element)
    const loading = useSelector(store => store.areas.loading)

    let location = useLocation().pathname.split('/')

React.useEffect(() => {

    setArea(location[2])
    setId(location[3])

    dispatch(getSingleElement(area, id))

}, [area, setArea, id, setId])

    return loading !== true ? (
        <section className="area-detail-content container-fluid col-lg-9 col-md-9 col-sm-12">   
            <h1 className="area-detail-content-title">{element.title}</h1>
            <hr/>

        </section>
    ) : null
}

export default ElementDetail
