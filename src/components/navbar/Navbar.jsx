import React from 'react'

import '../styles/navbar.css'

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import DropdownMenu from './navbarFragments/DropdownMenu'


const Navbar = () => {


    const [menu, setMenu] = React.useState(false)

    const element = <FontAwesomeIcon icon={menu ? (faTimes) : faBars} />

console.log(menu)
    return (
        <nav className="navigation-bar">
            <Link to="/" className="ml-3">
                <img src="https://firebasestorage.googleapis.com/v0/b/ayuntamiento-2a2a8.appspot.com/o/logo_blanco.png?alt=media&token=844bcfa7-38f1-43ae-882b-885d35fb223b" width="120px" alt="Ayuntamiento de Navalvillar de Pela"/>
            </Link> 
            <span id="areas-navbar-btn" onClick={() => setMenu(!menu)}>{element}</span>

            <div id={menu ? "nav-menu-container" : "nav-menu-container-open"}>
                <ul className="nav-menu-links">
                    <Link className="nav-menu-link" to="/" onClick={menu && (()=>setMenu(false))}>
                        INICIO
                    </Link>

                    <Link to="" className="nav-menu-link" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        AREAS
                    </Link>

                    <DropdownMenu />

                    <div className="areas-navbar-menu">
                        <h4 id="areas-navbar-menu-title">ÁREAS</h4>
                        <Link to="/areas/deporte" className="area-item" onClick={menu && (()=>setMenu(false))}>DEPORTE</Link>
                        <Link to="/areas/cultura" className="area-item" onClick={menu && (()=>setMenu(false))}>CULTURA</Link>
                        <Link to="/areas/juventud" className="area-item" onClick={menu && (()=>setMenu(false))}>JUVENTUD</Link>
                        <Link to="/areas/empleo" className="area-item" onClick={menu && (()=>setMenu(false))}>EMPLEO</Link>
                    </div>

                    <Link className="nav-menu-link" to="/news" onClick={menu && (()=>setMenu(false))}>NOTICIAS</Link>
                    
                    <Link className="nav-menu-link" to="/contact" onClick={menu && (()=>setMenu(false))}>CONTACTO</Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
