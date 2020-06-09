import React from 'react'

import { Switch, Route, useLocation } from 'react-router-dom'

import AreasMenu from './areasFragments/AreasMenu'
import Sport from './areasFragments/Sport'
import Job from './areasFragments/Job'
import Youth from './areasFragments/Youth'
import Culture from '../areas/areasFragments/Culture'
import ElementDetail from './areasFragments/ElementDetail'

import '../../styles/areas.css'

const Areas = () => {


    let location = useLocation()


    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div id="areas" className="container-fluid row p-0">
            
            <AreasMenu/>

            <Switch>

                <Route path="/areas/deporte" exact>
                    <Sport />
                </Route>
                <Route path="/areas/empleo" exact>
                    <Job />
                </Route>
                <Route path="/areas/juventud" exact>
                    <Youth />
                </Route>
                <Route path="/areas/cultura" exact>
                    <Culture />
                </Route>
                <Route path={location.pathname}>
                    <ElementDetail />
                </Route>
                
            </Switch>
        </div>
    )
}

export default Areas
