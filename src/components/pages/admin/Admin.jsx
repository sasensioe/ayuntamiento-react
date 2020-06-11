import React from 'react'

import { Route,Switch, Link } from 'react-router-dom'

import NewArticle from '../admin/adminFragments/NewArticle'
import SelectArticle from './adminFragments/SelectArticle'
import ModifyArticle from '../admin/adminFragments/ModifyArticle'
import Actions from '../admin/adminFragments/Actions'

import '../../styles/admin.css'

import { auth } from '../../../firebase'



const Admin = () => {

    return (
        <div className="container pt-5">
            <div className="row mt-5">
                <Link to="/admin/new-article" style={{height: '100px'}}className="col-3 bg-dark m-2">Redactar noticia</Link>
                <Link to="/admin/select-article" style={{height: '100px'}} className="col-3 bg-light m-2">Modificar noticia</Link>
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
    )
}

export default Admin
