import {db} from '../../firebase'



// constants

const articles = {
    array: [],
    offset: 0
}


// types

const GET_ALL_ARTICLES = 'GET_ALL_ARTICLES'
const GET_SIX_ARTICLES_SUCCESS = 'GET_SIX_ARTICLES_SUCCESS'
const GET_FIVE_ARTICLES_SUCCESS = 'GET_FIVE_ARTICLES_SUCCESS'


// reducers

export default function articlesReducer(state = articles, action){
    switch(action.type){
        case GET_SIX_ARTICLES_SUCCESS:
            return {...state, array: action.payload}
        case GET_FIVE_ARTICLES_SUCCESS:
            return {...state, array: action.payload}
        case GET_ALL_ARTICLES:
            return {...state, array: action.payload}
        default:
            return state
    }
} 





// actions

export const getAllArticles = () => async(dispatch) => {
    try {
        const data = await db.collection('articles').orderBy('date', 'desc').get()
        const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
        dispatch({
            type: GET_ALL_ARTICLES,
            payload: arrayData
        })
    } catch (error) {
        console.log(error)
    }
}



export const getSixLatestArticles = () => async (dispatch) => {
    try {
        const data = await db.collection('articles').limit(6).orderBy('date', 'desc').get()
        const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
        dispatch({
            type: GET_SIX_ARTICLES_SUCCESS,
            payload: arrayData
        })
    } catch (error) {
        console.log(error)
    }
}


export const getFiveLatestArticles = () => async (dispatch) => {
    try {
        const data = await db.collection('articles').limit(5).orderBy('date', 'desc').get()
        const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
        dispatch({
            type: GET_FIVE_ARTICLES_SUCCESS,
            payload: arrayData
        })
    } catch (error) {
        console.log(error)
    }
}
