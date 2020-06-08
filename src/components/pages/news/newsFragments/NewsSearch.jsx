import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'


const NewsSearch = (props) => {
    
    const [search, setSearch] = React.useState('')

    const articles = props.articles



    const filtrar = () => {
        let filtered = articles.filter(article => article.title.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1)
        return (
            filtered.map(item => (
                <Link key={item.id} to={`/articles/${item.id}`}className="card-news-search col-lg-10 col-md-12 col-sm-12 box-shadow row m-auto">
                    <img className="card-img col-lg-3 col-md-4 col-sm-12" src={item.mainPic} alt=""/>
                    <div className="card-news-body col-lg-9 col-md-8 col-sm-12">
                        <p className="card-text">{item.title}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <small className="text-muted">{item.date}</small>
                        </div>
                    </div>
                </Link>
            ))
        )
    }
    

    return (
        <Fragment>
            <section className="container mt-4">
                <h3 className="news-search-title text-center">BUSCADOR DE NOTICIAS</h3>
                <hr/>
                <input
                value={search}
                onKeyUp={() => filtrar()}
                onChange={(e) => setSearch(e.target.value)}
                className="col-8 form-control m-auto"
                placeholder="Buscar noticia"
                />
                <div className="search-news-container mt-4">
                    
                { search === '' ? 
                    articles.map((item) => (
                        <Link key={item.id} to={`/articles/${item.id}`}className="card-news-search col-lg-10 col-md-12 col-sm-12 row">
                            <img className="card-img col-lg-3 col-md-4 col-sm-12" src={item.mainPic} alt=""/>
                            <div className="card-news-body col-lg-9 col-md-8 col-sm-12">
                                <p className="card-text">{item.title}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <small className="text-muted">{item.date}</small>
                                </div>
                            </div>
                        </Link>
                        )) : filtrar()
                }

                </div>
                <div className="text-center mt-2">
                    <button className="btn btn-dark mr-2">Anterior</button>
                    <button className="btn btn-dark">Siguiente</button>
                </div>
            </section>
        </Fragment>
    )
}

export default NewsSearch
