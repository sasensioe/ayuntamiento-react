import {db} from '../../firebase'



// constants

const articles = {
    arrayMainPage: [],
    arrayDefault: [],
    start: 0,
    offset: 0,
    array: []
}


// types

const GET_ALL_ARTICLES = 'GET_ALL_ARTICLES'
const GET_SIX_ARTICLES_SUCCESS = 'GET_SIX_ARTICLES_SUCCESS'
const GET_FIVE_ARTICLES_SUCCESS = 'GET_FIVE_ARTICLES_SUCCESS'
const GET_NEXT_FIVE_ARTICLES = 'GET_NEXT_FIVE_ARTICLES'
const GET_PREVIOUS_FIVE_ARTICLES = 'GET_PREVIOUS_FIVE_ARTICLES'


// reducers

export default function articlesReducer(state = articles, action){
    switch(action.type){
        case GET_SIX_ARTICLES_SUCCESS:
            return {...state, arrayMainPage: action.payload}
        case GET_FIVE_ARTICLES_SUCCESS:
            return {...state, arrayDefault: action.payload.arrayDefault, array: action.payload.arrayDefault, start: action.payload.start, offset: action.payload.offset}
        case GET_ALL_ARTICLES:
            return {...state, array: action.payload}
        case GET_NEXT_FIVE_ARTICLES:
            return {...state, array: action.payload.array, start: action.payload.start, offset: action.payload.offset}
        case GET_PREVIOUS_FIVE_ARTICLES:
            return {...state, array: action.payload.array, start: action.payload.start, offset: action.payload.offset}
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
            payload: {
                arrayDefault: arrayData,
                start: 0,
                offset: 4,
                array: arrayData
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export const getNextFiveArticles = () => async (dispatch, getState) => {

    const start = getState().articles.start + 5
    const offset = getState().articles.offset + 5

    try {
        const data = await db.collection('articles').limit(offset).orderBy('date', 'desc').get()
        const query = await db.collection('articles').limit(5).orderBy('date', 'desc').startAt(data.docs[start]).get()

        const arrayData = query.docs.map(doc => ({id: doc.id, ...doc.data()}))

        dispatch({
            type: GET_NEXT_FIVE_ARTICLES,
            payload: {
                array: arrayData,
                start: start,
                offset: offset
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export const getPreviousFiveArticles = () => async (dispatch, getState) => {

    const start = getState().articles.start - 5
    const offset = getState().articles.offset - 5

    try {
        const data = await db.collection('articles').limit(offset).orderBy('date', 'desc').get()
        const query = await db.collection('articles').limit(5).orderBy('date', 'desc').startAt(data.docs[start]).get()

        const arrayData = query.docs.map(doc => ({id: doc.id, ...doc.data()}))

        dispatch({
            type: GET_PREVIOUS_FIVE_ARTICLES,
            payload: {
                array: arrayData,
                start: start,
                offset: offset
            }
        })
    } catch (error) {
        console.log(error)
    }
}