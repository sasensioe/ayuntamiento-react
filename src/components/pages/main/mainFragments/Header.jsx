import React, {Fragment} from 'react'

import $ from 'jquery';

import 'bootstrap/dist/js/bootstrap.bundle.min';

const Header = () => {

    $ ('.carousel').carousel()

    return (
        <Fragment>
            <header id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="carousel-image d-block img-fluid" src="./img/slider/slide_1.jpg" alt="First slide"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Orgullo de ser Magnolino</h1>
                            <p>Más que un pueblo, un sentimiento</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="carousel-image d-block img-fluid" src="./img/slider/slide_2.jpg" alt="Second slide"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Ermita de San Antón</h1>
                            <p>Una mirada a nuestro pasado</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="carousel-image d-block img-fluid" src="./img/slider/slide_3.jpg" alt="Third slide"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h1>La Dehesa Extremeña</h1>
                            <p>Una de las más preciadas reservas de la biosfera</p>
                        </div>
                    </div>
                </div>
            </header>
        </Fragment>
    )
}

export default Header
