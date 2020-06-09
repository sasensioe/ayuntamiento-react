import React from 'react'

import '../../styles/news.css'

import NewsSearch from './newsFragments/NewsSearch'
import NewsGrid from './newsFragments/NewsGrid'

import { useDispatch, useSelector } from 'react-redux'
import { getFiveLatestArticles } from '../../redux/articlesDucks'

const News = () => {

  const dispatch = useDispatch()
  const articles = useSelector(store => store.articles.arrayDefault)

  React.useEffect(() => {

    dispatch(getFiveLatestArticles())
    window.scrollTo(0, 0)

  }, [dispatch])


    return (
        <div>
          <NewsGrid articles={articles} />
          <NewsSearch articles={articles}/>
        </div>
    )
}

export default News
