import React from 'react'

import {Link} from 'react-router-dom'

import { db } from '../../../../firebase'

const SelectArticle = (props) => {

    const [articles, setArticles] = React.useState([])

    const getArticles = async() => {
        try {
            const data = await db.collection('articles').orderBy('date', 'desc').get()
            console.log(data)
            const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
            setArticles(arrayData)
        } catch (error) {
            console.log(error)
        }
    }

    const eraseArticle = async(id) => {
        await db.collection('articles').doc(id).delete()
    }

    React.useEffect(() => {
        getArticles()
    }, [])


    return (
        <div className="container">
            <h2>¿Qué desea hacer?</h2>
            <ul className="list-group">

                {
                    articles.map(item => (
                        <li key={item.id} className="list-group-item">{item.title}
                        <Link to={`/admin/modify-article/${item.id}`} className="btn btn-warning btn-sm mx-1 float-right">Editar</Link>
                        <button
                        className="btn btn-danger btn-sm mx-1 float-right"
                        onClick={() => eraseArticle(item.id)}
                        >Eliminar</button>
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}

export default SelectArticle
