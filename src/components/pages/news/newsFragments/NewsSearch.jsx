import React, { Fragment } from 'react'

import { Link } from 'react-router-dom'

import moment from 'moment'
import 'moment/locale/es'

import { useDispatch, useSelector } from 'react-redux'
import { getNextFiveArticles, getAllArticles, getPreviousFiveArticles } from '../../../redux/articlesDucks'

const NewsSearch = () => {
    
    const [search, setSearch] = React.useState('')
    const [show, setShow] = React.useState([])

    const articles = useSelector(store => store.articles.array)

    const dispatch = useDispatch()


    React.useEffect(() => {
        setShow(articles)
    },[articles, setShow])


    const getNextArticles = () => {
        dispatch(getNextFiveArticles())
        setShow(articles)
    }

    const getPreviousArticles = () => {
        dispatch(getPreviousFiveArticles())
        setShow(articles)
    }

    let filtered = null

    const getAll = () => {
        dispatch(getAllArticles())
    }

    const filter = () => {
        filtered = articles.filter(article => article.title.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1)
        setShow(filtered)
    }
    

    return (
        <Fragment>
            <section className="news-search container mt-4">
                <h3 className="news-search-title text-center">BUSCADOR DE NOTICIAS</h3>
                <hr/>
                <input
                value={search}
                onFocus={() => getAll()}
                onKeyUp={() => filter()}
                onChange={(e) => setSearch(e.target.value)}
                className="col-8 form-control m-auto"
                placeholder="Buscar noticia"
                />

                <div className="search-news-container mt-4">
                    
                {
                    show.map((item) => (
                        <Link key={item.id} to={`/articles/${item.id}`}className="card-news-search p-0 col-lg-10 col-md-12 col-sm-12 row">
                            <img className="card-img p-0 col-lg-3 col-md-4 col-sm-12" src={item.mainPic} alt=""/>
                            <div className="card-news-body col-lg-9 col-md-8 col-sm-12">
                                <p className="card-text">{item.title}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <small className="text-muted">{moment(item.date).format('LL')}</small>
                                </div>
                            </div>
                        </Link>
                    ))
                }

                </div>

                <div className="text-center mt-2">
                    <button
                    className="btn btn-dark mr-2"
                    onClick={() => getPreviousArticles()}
                    >Anterior</button>
                    <button
                    className="btn btn-dark"
                    onClick={() => getNextArticles()}
                    >Siguiente</button>
                </div>
                
            </section>
        </Fragment>
    )
}

export default NewsSearch
