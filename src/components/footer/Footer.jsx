import React from 'react'

import '../styles/footer.css'

const Footer = () => {

    return (
        <div className="footer container-fluid row col-12">
            <div className="footer-left-side col-lg-4 col-md-12 col-sm-12 pt-4">
                <h5>Síguenos en:</h5><br/>
                <span>Facebook</span><br/>
                <span>Twitter</span><br/>
                <span>Instagram</span><br/>
            </div>
            <div className="footer-middle col-lg-4 col-md-12 col-sm-12">
                <img src="./img/logo_blanco.png" alt=""/>
            </div>
            <div className="footer-right-side col-lg-4 col-md-12 col-sm-12 pt-4">
                <h5>Ayuntamiento de Navalvillar de Pela</h5>
                <span>Plaza de España, 1</span><br/>
                <span>06760 Navalvillar de Pela</span><br/>
                <span>Badajoz</span><br/>
                <span>Tel: 924 861 800</span><br/>
                <span>Fax: 924 860 274</span><br/>
                <span>Email: navalvillar@dip-badajoz.es</span><br/>
            </div>
        </div>
    )
}

export default Footer
