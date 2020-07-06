import React, { Fragment } from 'react'

import { Link } from 'react-router-dom'


const NewsGrid = (props) => {

    const articles = props.articles

    return (
        <Fragment>
            <section className="latest-news-grid container animated fadeIn fast">
                <h1>ÚLTIMAS NOTICIAS</h1>
                <div className="latest-news-grid-content">
                    {
                        articles.slice(0,1).map(item => (
                            <article key={item.id} className="grid-article overflow-hidden" id="a1">
                                <Link to={`/articles/${item.id}`}>
                                    <img className="w-100" src={item.mainPic} alt=""/>
                                    <div className="deg-article p-1">{item.title}</div>
                                </Link>
                            </article>
                        ))
                    }
                    {
                        articles.slice(1,2).map(item => (
                            <article key={item.id} className="grid-article overflow-hidden" id="a2">
                                <Link to={`/articles/${item.id}`}>
                                    <img className="w-100" src={item.mainPic} alt=""/>
                                    <div className="deg-article p-1">{item.title}</div>
                                </Link>
                            </article>
                        ))
                    }        
                    {
                        articles.slice(2,3).map(item => (
                    
                            <article key={item.id} className="grid-article overflow-hidden" id="a3">
                                <Link to={`/articles/${item.id}`}>
                                    <img className="w-100" src={item.mainPic} alt=""/>
                                    <div className="deg-article p-1">{item.title}</div>
                                </Link>
                            </article>
                        ))
                    }
                    {
                        articles.slice(3,4).map(item => (
                    
                            <article key={item.id} className="grid-article overflow-hidden" id="a4">
                                <Link to={`/articles/${item.id}`}>
                                    <img className="w-100" src={item.mainPic} alt=""/>
                                    <div className="deg-article p-1">{item.title}</div>
                                </Link>
                            </article>
                        ))
                    }
                    {
                        articles.slice(4,5).map(item => (
                    
                            <article key={item.id} className="grid-article overflow-hidden" id="a5">
                                <Link to={`/articles/${item.id}`}>
                                    <img className="w-100" src={item.mainPic} alt=""/>
                                    <div className="deg-article p-1 row-2">{item.title}</div>
                                </Link>
                            </article>
                        ))
                    }
                        
                </div>
            </section>
        </Fragment>
    )
}

export default NewsGrid
