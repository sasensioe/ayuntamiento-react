import React, {Fragment} from 'react'

import moment from 'moment'
import 'moment/locale/es'

const ArticleContent = (props) => {


    const article = props.article.current


    return (
        <Fragment>
            
            {
                article.map(item => (
                    <article key={item.id} className = "article-body container-fluid col-lg-9 col-md-12 col-sm-12">
                        <div id = "article-image">
                            <img src ={item.mainPic} alt=""/>
                        </div>
                        <div id = "article-title">
                            <h2>{item.title}</h2>
                            <h5>{item.description}</h5>
                            <hr/>
                        </div>  
                        <div id = "article-content">
                            <p>{item.p1}</p>
                            <p>{item.p2}</p>
                            <p>{item.p3}</p>
                            <p>{item.p4}</p>
                            <div className = "actions">
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
