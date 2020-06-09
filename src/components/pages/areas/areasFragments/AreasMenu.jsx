import React from 'react'

import { Link } from 'react-router-dom'

const AreasMenu = () => {

    return (
        <aside className="areas-menu col-lg-3 col-md-3 col-sm-12 bg-light">
            <h2 id="areas-menu-title">ÁREAS</h2>
            <hr/>
            <ul id="areas-menu-items">
                <li className="areas-menu-item"><Link className="areas-menu-link" to="/areas/deporte">DEPORTE</Link></li>
                <li className="areas-menu-item"><Link className="areas-menu-link" to="/areas/cultura">CULTURA</Link></li>
                <li className="areas-menu-item"><Link className="areas-menu-link" to="/areas/juventud">JUVENTUD</Link></li>
                <li className="areas-menu-item"><Link className="areas-menu-link" to="/areas/empleo">EMPLEO</Link></li>
            </ul>
        </aside>
    )
}

export default AreasMenu
