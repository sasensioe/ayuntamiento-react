import React from 'react'
import {useParams} from 'react-router-dom'
import ArticleContent from './articleFragments/ArticleContent'
import RelatedNews from './articleFragments/RelatedNews'
import '../../styles/article.css'

import { useDispatch, useSelector } from 'react-redux'
import { getAllArticles } from '../../redux/articlesDucks'

const Article = () => {

    const {id} = useParams()
    let filtered = React.useRef()

    const dispatch = useDispatch()
    const articles = useSelector(store => store.articles.array)

    React.useEffect(() => {
        dispatch(getAllArticles())
        window.scrollTo(0, 0)

    }, [dispatch])
    filtered.current = articles.filter(article => article.id.indexOf(id) !== -1)


    return (
        <div className="container-fluid m-0 row">
            <ArticleContent article={filtered}/>
            <RelatedNews />
        </div>
    )
}

export default Article
