import React from 'react'

import '../../styles/admin.css'

import {db, auth} from '../../../firebase'

const Admin = () => {

    const [id, setId] = React.useState('')
    const [title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [p1, setP1] = React.useState('')
    const [p2, setP2] = React.useState('')
    const [p3, setP3] = React.useState('')
    const [p4, setP4] = React.useState('')
    const [p5, setP5] = React.useState('')



    const procesar = (e) => {
        e.preventDefault()
        addArticle()
    }


    const addArticle = React.useCallback( async() => {
        try {
            const newArticle = {
                title: title,
                description: description,
                p1: p1,
                p2: p2,
                p3: p3,
                p4: p4,
                p5: p5,
                date: Date.now()
            }

            await db.collection('articles').doc(id).set(newArticle)
        } catch (error) {
            console.log(error)
        }
    })






    return (
        <div className="container pt-5">
            <div className="row mt-5">
                <div style={{height: '100px'}} className="col-3 bg-dark m-2">Redactar noticia</div>
                <div style={{height: '100px'}} className="col-3 bg-light m-2">Modificar noticia</div>
                <div style={{height: '100px'}} className="col-3 bg-dark m-2">Eliminar noticia</div>
            </div>
            <div>
                <h2>Nueva noticia</h2>
                <form onSubmit={procesar}>
                    <label htmlFor="ID">ID</label><br/>
                    <input
                    id="ID"
                    type="text"
                    onChange={(e) => setId(e.target.value)}
                    />Esta será la ruta que se mostrará en el navegador. Ej. cartel-dia-mujer<br/>
                    <label htmlFor="title">Título</label><br/>
                    <input 
                    className="w-50"
                    id="title"
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    /><br/>
                    <label htmlFor="description">Descripción</label><br/>
                    <input
                    className="w-100"
                    id="description"
                    type="text"
                    onChange={(e) => setDescription(e.target.value)}
                    /><br/>
                    <label htmlFor="p1">Párrafo 1</label><br/>
                    <textarea
                    className="w-100 paragraph"
                    id="p1"
                    onChange={(e) => setP1(e.target.value)}
                    /><br/>
                    <label htmlFor="p2">Párrafo 2</label><br/>
                    <textarea
                    className="w-100 paragraph"
                    id="p2"
                    onChange={(e) => setP2(e.target.value)}
                    /><br/>
                    <label htmlFor="p3">Párrafo 3</label><br/>
                    <textarea
                    className="w-100 paragraph"
                    id="p3"
                    onChange={(e) => setP3(e.target.value)}
                    /><br/>
                    <label htmlFor="p4">Párrafo 4</label><br/>
                    <textarea
                    className="w-100 paragraph"
                    id="p4"
                    onChange={(e) => setP4(e.target.value)}
                    /><br/>
                    <label htmlFor="p5">Párrafo 5</label><br/>
                    <textarea
                    className="w-100 paragraph"
                    id="p5"
                    onChange={(e) => setP5(e.target.value)}
                    /><br/>

                    <button className="btn btn-dark" type="submit">Publicar</button>
                </form>
            </div>
        </div>
    )
}

export default Admin
