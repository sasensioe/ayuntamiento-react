import React from 'react'

import { Link } from 'react-router-dom'

const AreasMenu = () => {

    return (
        <aside id="areas-menu" className="col-lg-3 col-md-3 col-sm-12 bg-light">
            <h2 id="areas-menu-title">ÁREAS</h2>
            <hr noshade="noshade" className="w-50"/>
            <ul id="areas-menu-items">
                <li><Link className="areas-menu-item" to="/areas/deporte">DEPORTE</Link></li>
                <li><Link className="areas-menu-item" to="/areas/cultura">CULTURA</Link></li>
                <li><Link className="areas-menu-item" to="/areas/juventud">JUVENTUD</Link></li>
                <li><Link className="areas-menu-item" to="/areas/empleo">EMPLEO</Link></li>
            </ul>
        </aside>
    )
}

export default AreasMenu
