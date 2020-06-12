import React from 'react'

import '../styles/footer.css'

const Footer = () => {

    return (
        <div className="footer container-fluid row col-12">
            <div className="footer-left-side col-lg-4 col-md-12 col-sm-12 pt-4">
                <h5>Síguenos en:</h5><br/>
                <a className="link-share" href="https://www.youtube.com/channel/UCRzOlad3aJtCmcrdMH7iV0w/" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i>   Youtube</a><br/>
                <a className="link-share" href="https://es-es.facebook.com/ayuntamientonavalvillardepela/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i>   Facebook</a><br/>
                <a className="link-share" href="https://twitter.com/AytodePela/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i>   Twitter</a><br/>
            </div>
            <div className="footer-middle col-lg-4 col-md-12 col-sm-12">
                <img src="https://firebasestorage.googleapis.com/v0/b/ayuntamiento-2a2a8.appspot.com/o/logo_blanco.png?alt=media&token=844bcfa7-38f1-43ae-882b-885d35fb223b" alt="Ayuntamiento de Navalvillar de Pela"/>
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
