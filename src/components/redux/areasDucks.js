import {db} from '../../firebase'




// constants

const areas = {
    loading: false,
    array: [],
    element: {},
}


// types

const LOADING = 'LOADING'
const GET_CULTURE_SUCCESS = 'GET_CULTURE_SUCCESS'
const GET_YOUTH_SUCCESS = 'GET_YOUTH_SUCCESS'
const GET_JOBS_SUCCESS = 'GET_JOBS_SUCCESS'
const GET_SPORT_SUCCESS = 'GET_SPORT_SUCCESS'
const GET_SINGLE_ELEMENT = 'GET_SINGLE_ELEMENT'



// reducers

export default function areasReducer(state = areas, action){
    switch(action.type){
        case LOADING:
            return {...state, loading: true}
        case GET_CULTURE_SUCCESS:
            return {...state, array: action.payload, loading: false}
        case GET_YOUTH_SUCCESS:
            return {...state, array: action.payload, loading: false}
        case GET_JOBS_SUCCESS:
            return {...state, array: action.payload, loading: false}
        case GET_SPORT_SUCCESS:
            return {...state, array: action.payload, loading: false}
        case GET_SINGLE_ELEMENT:
            return {...state, element: action.payload, loading: false}
        default:
            return state
    }
}





// actions

export const getCultura = () => async(dispatch) => {
    dispatch({
        type: LOADING
    })
    try {
        const data = await db.collection('areas-data').doc('areas').collection('cultura').get()
        const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
        dispatch({
            type: GET_CULTURE_SUCCESS,
            payload: arrayData
        })

    } catch (error) {
        console.log(error)
    }
}

export const getYouth = () => async(dispatch) => {
    dispatch({
        type: LOADING
    })
    try {
        const data = await db.collection('areas-data').doc('areas').collection('juventud').get()
        const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
        dispatch({
            type: GET_YOUTH_SUCCESS,
            payload: arrayData
        })

    } catch (error) {
        console.log(error)
    }
}

export const getJobs = () => async(dispatch) => {
    dispatch({
        type: LOADING
    })
    try {
        const data = await db.collection('areas-data').doc('areas').collection('empleo').get()
        const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
        dispatch({
            type: GET_JOBS_SUCCESS,
            payload: arrayData
        })

    } catch (error) {
        console.log(error)
    }
}

export const getSport = () => async(dispatch) => {
    dispatch({
        type: LOADING
    })
    try {
        const data = await db.collection('areas-data').doc('areas').collection('deporte').get()
        const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
        dispatch({
            type: GET_SPORT_SUCCESS,
            payload: arrayData
        })

    } catch (error) {
        console.log(error)
    }
}


export const getSingleElement = (area, id) => async(dispatch) => {
    dispatch({
        type: LOADING
    })
    try {
        const res = await db.collection('areas-data').doc('areas').collection(area).doc(id).get()
        const data = res.data()

        dispatch({
            type: GET_SINGLE_ELEMENT,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}