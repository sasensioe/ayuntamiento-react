import React from 'react'

import '../../styles/contact.css'


const Contact = () => {

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <section className="contact animated fadeIn fast container col-10">
            <h3 className="mb-4">CONTACTO</h3>
            <div className="contact-body row p-0">
                <form className="contact-form col-lg-6 col-md-6 col-sm-12 p-0">

                    <h5 className="mt-3">¿Tienes algo que contarnos?</h5>

                    <label className="col-10 text-left mt-2" htmlFor="name">Nombre</label><br/>
                    <input className="contact-input col-10 text-left" type="text"
                    id="name"
                    /><br/>

                    <label className="col-10 text-left mt-2" htmlFor="email">Email</label><br/>
                    <input className="contact-input col-10 text-left" type="text"
                    id="email"
                    /><br/>

                    <label className="col-10 text-left mt-2" htmlFor="city">Ciudad</label><br/>
                    <input className="contact-input col-10 text-left" type="text"
                    id="city"
                    /><br/>

                    <label className="col-10 text-left mt-2" htmlFor="city">Su mensaje</label><br/>
                    <input className="contact-input col-10 text-left mb-4" type="textarea"
                    id="message"
                    />

                </form>

                <div id="contact-img" className="col-lg-6 col-md-6 col-sm-12 p-0">
                    <img className="w-100" src="./img/grullas.jpg" alt=""/>
                </div>
                
            </div>
        </section>
    )
}

export default Contact
