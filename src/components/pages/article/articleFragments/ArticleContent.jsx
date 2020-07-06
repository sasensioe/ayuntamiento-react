import React, {Fragment} from 'react'

import moment from 'moment'
import 'moment/locale/es'

const ArticleContent = (props) => {

    const article = props.article.current


    return (
        <Fragment>
            
            {
                article.map(item => (
                    <article key={item.id} id="article-body" className = "container-fluid animated fadeIn fast col-lg-9 col-md-12 col-sm-12">
                        <div id = "article-image">
                            <img src ={item.mainPic} alt=""/>
                        </div>
                        <div id = "article-title">
                            <h2 id="title">{item.title}</h2>
                            <h5 id="description">{item.description}</h5>
                            <hr noshade="noshade" className="w-75"/>
                        </div>  
                        <div id = "article-content">
                            <p>{item.p1}</p>
                            <p>{item.p2}</p>
                            <p>{item.p3}</p>
                            <p>{item.p4}</p>
                            <div id = "actions">
                                <span id = "date">{moment(item.date).format('LL')}</span>
                            </div>
                        </div>
                    </article>
                ))
            }

        </Fragment>
    )
}

export default ArticleContent
