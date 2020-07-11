import React from 'react'

import '../styles/footer.css'

const Footer = () => {

    return (
        <div className="footer container-fluid row col-12">
            <div className="footer-left-side col-lg-4 col-md-12 col-sm-12 pt-4">
                <h5>Síguenos en:</h5><br/>
                <a className="link-share" href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i>   Youtube</a><br/>
                <a className="link-share" href="https://es-es.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i>   Facebook</a><br/>
                <a className="link-share" href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i>   Twitter</a><br/>
            </div>
            <div className="footer-middle col-lg-4 col-md-12 col-sm-12">
                <img src="/img/logo/logo.png" alt="Ayuntamiento de Magnolia del Campo"/>
            </div>
            <div className="footer-right-side col-lg-4 col-md-12 col-sm-12 pt-4">
                <h5>Ayuntamiento de Magnolia del Campo</h5>
                <span>Plaza de Castilla, 1</span><br/>
                <span>00000 Magnolia del Campo</span><br/>
                <span>Badajoz</span><br/>
                <span>Tel: XXX XXX XXX</span><br/>
                <span>Fax: XXX XXX XXX</span><br/>
                <span>Email: magnolia@xxx.es</span><br/>
            </div>
        </div>
    )
}

export default Footer