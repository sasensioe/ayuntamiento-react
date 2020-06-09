import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'

import {useDispatch, useSelector} from 'react-redux'
import { getSixLatestArticles } from '../../../redux/articlesDucks'

const LatestNews = () => {

    const dispatch = useDispatch()
    const articles = useSelector(store => store.articles.arrayMainPage)


    React.useEffect(() => {
        dispatch(getSixLatestArticles())
    },[dispatch])



    return (
        <Fragment>
        <section className="latest-news container">
            <h1 className="latest-news-title text-center">ÚLTIMAS NOTICIAS</h1>
            <hr/>
            <div className="latest-news-content album py-5">
                <div className="container">
                    <div className="row">
                        {
                            articles.map((item) => (
                            
                            <Link to={`/articles/${item.id}`} key={item.id} className="card-news text-decoration-none col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="card mb-4 box-shadow">
                                    <div className="card-img-container">
                                        <img className="card-img" src={item.mainPic} alt=""/>
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">{item.title}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <small className="text-muted">{item.date}</small>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            ))
                        }
                    </div>
                </div>
            </div>
        </section>            
        </Fragment>
    )
}

export default LatestNews
