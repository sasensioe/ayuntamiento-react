import React, {Fragment} from 'react'

import {Link} from 'react-router-dom'


const DropdownMenu = () => {
    
    return (
        <Fragment>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <Link to="/areas/deporte" className="dropdown-item">DEPORTE</Link>
                <Link to="/areas/cultura" className="dropdown-item">CULTURA</Link>
                <Link to="/areas/juventud" className="dropdown-item">JUVENTUD</Link>
                <Link to="/areas/empleo" className="dropdown-item">EMPLEO</Link>
            </div>
        </Fragment>
    )
}

export default DropdownMenu
