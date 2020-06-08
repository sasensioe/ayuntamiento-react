import React from 'react'

import { Switch, Route, useLocation } from 'react-router-dom'

import AreasMenu from './areasFragments/AreasMenu'
import Deporte from '../areas/areasFragments/Deporte'
import Empleo from '../areas/areasFragments/Empleo'
import Juventud from '../areas/areasFragments/Juventud'
import Cultura from '../areas/areasFragments/Cultura'
import ElementDetail from './areasFragments/ElementDetail'

import '../../styles/areas.css'

const Areas = () => {

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    let location = useLocation()

    return (
        <div id="areas" className="container-fluid row p-0">
        <AreasMenu/>
        <Switch>

            <Route path="/areas/deporte" exact>
                <Deporte />
            </Route>
            <Route path="/areas/empleo" exact>
                <Empleo />
            </Route>
            <Route path="/areas/juventud" exact>
                <Juventud />
            </Route>
            <Route path="/areas/cultura" exact>
                <Cultura />
            </Route>
            <Route path={location.pathname}>
                <ElementDetail />
            </Route>


        </Switch>
        </div>
    )
}

export default Areas
