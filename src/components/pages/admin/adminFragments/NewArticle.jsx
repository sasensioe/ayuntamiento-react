import React from 'react'

import { db, storage } from '../../../../firebase'

import {withRouter} from 'react-router-dom'

const NewArticle = (props) => {

    const [id, setId] = React.useState('')
    const [title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [p1, setP1] = React.useState('')
    const [p2, setP2] = React.useState('')
    const [p3, setP3] = React.useState('')
    const [p4, setP4] = React.useState('')
    const [img, setImg] = React.useState('')


    const selectImage = (e) => {
        const image = e.target.files[0]
        if(image===undefined){
            console.log('sin imagen')
            return
        }
        setImg(image)
    }

    const procesar = (e) => {
        e.preventDefault()
        upload()
    }

    const upload = async() => {
        const refImg = storage.ref().child('articles').child(id).child(id)
        await refImg.put(img)
        const Url = await refImg.getDownloadURL()
        addArticle(Url)
    }

    const addArticle = (async(url) => {
        try {
            const newArticle = {
                title: title,
                description: description,
                p1: p1,
                p2: p2,
                p3: p3,
                p4: p4,
                date: Date.now(),
                mainPic: url
            }
            await db.collection('articles').doc(id).set(newArticle)
            props.history.push('/admin')
        } catch (error) {
            console.log(error)
        }
    })


    return (
        <div className="container mt-5">
            <h2>Nueva noticia</h2>
            <form onSubmit={procesar}>
                <label htmlFor="ID">ID</label><br/>
                <input
                id="ID"
                type="text"
                onChange={(e) => setId(e.target.value)}
                />     Esta será la ruta que se mostrará en el navegador. Ej. ../cartel-dia-mujer<br/>
                <label htmlFor="title">Título</label><br/>
                <input 
                className="w-75"
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
                <label htmlFor="mainImg">Imagen de noticia</label><br/>
                <input
                id="mainImg"
                type="file"
                required
                onChange={e => selectImage(e)}
                disabled={id === ''}
                /><br/>
                <button
                className="btn btn-dark mt-4" type="submit"
                disabled={id === '' || title === '' || description === '' || p1 === '' || img === ''}
                >Publicar</button>
            </form>
        </div>
    )
}

export default withRouter(NewArticle)
