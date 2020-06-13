import React from 'react'

import '../../styles/areas.css'

import { Switch, Route } from 'react-router-dom'

import AreasMenu from './areasFragments/AreasMenu'

import Sport from './areasFragments/sport/Sport'
import Job from './areasFragments/job/Job'
import Youth from './areasFragments/youth/Youth'
import Culture from './areasFragments/culture/Culture'

// Culture

import CultureHouse from './areasFragments/culture/cultureElements/CultureHouse'
import ObandoLibrary from './areasFragments/culture/cultureElements/ObandoLibrary'
import PopularUniversity from './areasFragments/culture/cultureElements/PopularUniversity'

// Job

import EmploymentExchange from './areasFragments/job/jobElements/EmploymentExchange'

// Sport

import SportsCenter from './areasFragments/sport/sportElements/SportsCenter'

// Youth

import YoungCenter from './areasFragments/youth/youthElements/YoungCenter'
import EuropeanYouthCard from './areasFragments/youth/youthElements/EuropeanYouthCard'

const Areas = () => {

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div id="areas" className="container-fluid row p-0">
            
            <AreasMenu/>

            <Switch>

                <Route path="/areas/deporte" exact component={Sport}/>
                <Route path="/areas/empleo" exact component={Job}/>
                <Route path="/areas/juventud" exact component={Youth}/>
                <Route path="/areas/cultura" exact component={Culture}/>


                <Route path="/areas/cultura/casa-cultura" component={CultureHouse}/>
                <Route path="/areas/cultura/agencia-lectura-obando" component={ObandoLibrary}/>
                <Route path="/areas/cultura/universidad-popular" component={PopularUniversity}/>

                <Route path="/areas/empleo/bolsa-empleo" component={EmploymentExchange}/>

                <Route path="/areas/deporte/polideportivo-la-dehesa" component={SportsCenter}/>

                <Route path="/areas/juventud/centro-joven" component={YoungCenter}/>
                <Route path="/areas/juventud/carnet-joven-europeo" component={EuropeanYouthCard}/>
            </Switch>
            
        </div>
    )
}

export default Areas
