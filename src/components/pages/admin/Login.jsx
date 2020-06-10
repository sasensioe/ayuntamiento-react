import React from 'react'

import '../../styles/login.css'

import {auth} from '../../../firebase'
import {withRouter} from 'react-router-dom'

const Login = (props) => {

    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')
    const [error, setError] = React.useState(null)


    const process = e => {
        e.preventDefault()
        if(!email.trim() || !pass.trim()){
            console.log('Datos vacíos email!')
            setError('Datos vacíos email!')
            return
        }
        if(!pass.trim()){
            console.log('Datos vacíos pass!')
            setError('Datos vacíos pass!')
            return
        }
        if(pass.length < 6){
            console.log('6 o más carácteres')
            setError('6 o más carácteres en pass')
            return
        }
        console.log('correcto...')
        setError(null)
        loguear()
    }

    const loguear = React.useCallback(() => {
        console.log('hola')
    })

    return (
        <div className="container vh-100">
            <h3 className="text-center">LOGIN</h3>
            <hr/>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                    <form onSubmit={process}>
                        <input
                        type="email"
                        className="form-control mb-2"
                        placeholder="Ingrese un email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        />
                        <input
                        type="password"
                        className="form-control mb-2"
                        placeholder="Ingrese una contraseña"
                        onChange={(e) => setPass(e.target.value)}
                        value={pass}
                        />
                        <button
                        type="submit"
                        className="btn btn-dark btn-lg btn-block"
                        >Entrar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Login)
