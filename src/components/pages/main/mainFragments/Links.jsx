import React, {Fragment} from 'react'

const Links = () => {
    
    return (
        <Fragment>
            <section className="relevant-links container-fluid bg-light">
                <div className="row">
                    <a href="https://www.dip-badajoz.es/" target="_blank" rel="noopener noreferrer" className="relevant-link area col-lg-2 col-md-2">
                        <img className="link-img w-100 p-2" src="./img/links/dip_badajoz.png" alt=""/>
                    </a>
                    <a href="http://doe.gobex.es/" target="_blank" rel="noopener noreferrer" className="relevant-link area col-lg-2 col-md-2">
                        <img className="link-img w-100 p-2" src="./img/links/doe.png" alt=""/>
                    </a>
                    <a href="http://www.sepe.es/HomeSepe" target="_blank" rel="noopener noreferrer" className="relevant-link area col-lg-2 col-md-2">
                        <img className="link-img w-100 p-2" src="./img/links/sepe.png" alt=""/>
                    </a>
                    <a href="https://saludextremadura.ses.es/web/" target="_blank" rel="noopener noreferrer" className="relevant-link area col-lg-2 col-md-2">
                        <img className="link-img w-100 p-2" src="./img/links/ses.png" alt=""/>
                    </a>
                    <a href="http://extremaduratrabaja.juntaex.es/" target="_blank" rel="noopener noreferrer" className="relevant-link area col-lg-2 col-md-2">
                        <img className="link-img w-100 p-2" src="./img/links/sexpe.png" alt=""/>
                    </a>
                    <a href="http://www.juntaex.es/web/" target="_blank" rel="noopener noreferrer" className="relevant-link area col-lg-2 col-md-2">
                        <img className="link-img w-100 p-2" src="./img/links/junta_extremadura.png" alt=""/>
                    </a>
                </div>
            </section>
        </Fragment>
    )
}

export default Links
