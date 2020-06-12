import React from 'react'

import { useLocation } from 'react-router-dom'

import { db } from '../../../../firebase'

const ModifyArticle = () => {

    const [title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [p1, setP1] = React.useState('')
    const [p2, setP2] = React.useState('')
    const [p3, setP3] = React.useState('')
    const [p4, setP4] = React.useState('')

    const location = useLocation().pathname.split('/')

    const id = location[location.length-1]

    React.useEffect(() => {
        const getArticle = async() => {
            try {
                const res = await db.collection('articles').doc(id).get()
                const data = res.data()
                setTitle(data.title)
                setDescription(data.description)
                setP1(data.p1)
                setP2(data.p2)
                setP3(data.p3)
                setP4(data.p4)
            } catch (error) {
                console.log(error)
            }
        }
        getArticle()
    }, [id])

    const updateArticle = async() => {
        try {
            await db.collection('articles').doc(id).update({
                title: title,
                description: description,
                p1: p1,
                p2: p2,
                p3: p3,
                p4: p4,
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container mt-5">
            <h2>Modificar artículo</h2>
            <form onSubmit={updateArticle}>
                <label htmlFor="ID">ID</label><br/>
                <input
                id="ID"
                type="text"
                value={id}
                disabled
                />     Esta será la ruta que se mostrará en el navegador. Ej. ../cartel-dia-mujer<br/>
                <label htmlFor="title">Título</label><br/>
                <input 
                className="w-75"
                id="title"
                type="text"
                defaultValue={title}
                onChange={e => setTitle(e.target.value)}
                /><br/>
                <label htmlFor="description">Descripción</label><br/>
                <input
                className="w-100"
                id="description"
                type="text"
                defaultValue={description}
                onChange={e => setDescription(e.target.value)}
                /><br/>
                <label htmlFor="p1">Párrafo 1</label><br/>
                <textarea
                className="w-100 paragraph"
                id="p1"
                defaultValue={p1}
                onChange={e => setP1(e.target.value)}
                /><br/>
                <label htmlFor="p2">Párrafo 2</label><br/>
                <textarea
                className="w-100 paragraph"
                id="p2"
                defaultValue={p2}
                onChange={e => setP2(e.target.value)}
                /><br/>
                <label htmlFor="p3">Párrafo 3</label><br/>
                <textarea
                className="w-100 paragraph"
                id="p3"
                defaultValue={p3}
                onChange={e => setP3(e.target.value)}
                /><br/>
                <label htmlFor="p4">Párrafo 4</label><br/>
                <textarea
                className="w-100 paragraph"
                id="p4"
                defaultValue={p4}
                onChange={e => setP4(e.target.value)}
                /><br/>

                <button className="btn btn-dark" type="submit">Guardar cambios</button>
            </form>
        </div>
    )
}

export default ModifyArticle
