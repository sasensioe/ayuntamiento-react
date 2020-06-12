import React from 'react'

import '../styles/navbar.css'

import { withRouter } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import DropdownMenu from './navbarFragments/DropdownMenu'

const Navbar = (props) => {

    const [menu, setMenu] = React.useState(false)

    const toggle = <FontAwesomeIcon icon={menu ? (faTimes) : (faBars)} />

    const pushTo = (link) => {
        setMenu(false)
        props.history.push(link)
    } 

    return (
        <nav className="navigation-bar">

            <div className="nav-brand ml-3" to="/" onClick={() => pushTo('/')}>
                <img src="https://firebasestorage.googleapis.com/v0/b/ayuntamiento-2a2a8.appspot.com/o/logo_blanco.png?alt=media&token=844bcfa7-38f1-43ae-882b-885d35fb223b" width="120px" alt="Ayuntamiento de Navalvillar de Pela"/>
            </div> 

            <span id="navbar-toggle" style={{color: menu ? '#0b4f1d' : 'white'}} onClick={() => setMenu(!menu)}>{toggle}</span>

            <div id="nav-menu-container" className={menu ? "nav-menu-container-closed" : "nav-menu-container-opened"}>
                <ul className="nav-menu-links">
                    <li className="nav-menu-link" to="/" onClick={() => pushTo('/')}>
                        INICIO
                    </li>

                    <li className="nav-menu-link" to="" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        ÁREAS
                    </li>
        
                    <DropdownMenu />

                    <div className="areas-lateral-menu">
                        <h4 id="areas-lateral-menu-title">ÁREAS</h4>
                        <li to="/areas/deporte" className="area-item" onClick={() => pushTo('/areas/deporte')}>DEPORTE</li>
                        <li to="/areas/cultura" className="area-item" onClick={() => pushTo('/areas/cultura')}>CULTURA</li>
                        <li to="/areas/juventud" className="area-item" onClick={() => pushTo('/areas/juventud')}>JUVENTUD</li>
                        <li to="/areas/empleo" className="area-item" onClick={() => pushTo('/areas/empleo')}>EMPLEO</li>
                    </div>

                    <li className="nav-menu-link" to="/news" onClick={() => pushTo('/news')}>
                        NOTICIAS
                    </li>
        
                    <li className="nav-menu-link" to="/contact" onClick={() => pushTo('/contact')}>
                        CONTACTO
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)