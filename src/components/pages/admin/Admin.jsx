import React from 'react'

import { Route,Switch, Link, withRouter } from 'react-router-dom'

import NewArticle from '../admin/adminFragments/NewArticle'
import SelectArticle from './adminFragments/SelectArticle'
import ModifyArticle from '../admin/adminFragments/ModifyArticle'
import Actions from '../admin/adminFragments/Actions'

import '../../styles/admin.css'

import { auth } from '../../../firebase'

const Admin = (props) => {

    const [user, setUser] = React.useState(null)


    React.useEffect(() => {
        login()
    }, [])

    const login = async() => {
        try {
            const res = await auth.signInWithEmailAndPassword(prompt('Introduzca un email'), prompt('Introduzca una contraseña'))
            setUser(res.user.uid)
        } catch (error) {
            alert('Email o contraseña inválidos')
            console.log(error)
        }
    }

    const signOut = () => {
        auth.signOut()
            .then(() => {
                setUser(null)
                props.history.push('/')
            })
    }
 
    return user !== null ? (
        <div className="container pt-5 text-align-center">
            <button
            className="btn btn-dark float-right mt-4"
            onClick={() => signOut()}
            >Cerrar Sesión</button>
            <h1 className="mt-4">Administración de contenidos</h1>
            <div className="row mt-5">
                <Link to="/admin/"
                className="col-3 col-center bg-dark rounded">Inicio</Link>
                <Link to="/admin/new-article"
                className="col-3 col-center bg-dark rounded">Redactar artículo</Link>
                <Link to="/admin/select-article"
                className="col-3 col-center bg-dark rounded">Modificar/Eliminar artículo</Link>
            </div>

            <Switch>
                <Route path="/admin/modify-article">
                    <ModifyArticle />
                </Route>
                <Route path="/admin/new-article">
                    <NewArticle />
                </Route>
                <Route path="/admin/select-article">
                    <SelectArticle />
                </Route>
                <Route path="/admin" exact>
                    <Actions />
                </Route>

            </Switch>

        </div>
    ) : (<div className="vh-100"></div>)
}

export default withRouter(Admin)