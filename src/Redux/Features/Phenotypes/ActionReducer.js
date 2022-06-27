import {ONSUBMITPHENOTYPES,ONERROR} from './ActionTypes'

const initialState = {
    validPhenotypes: false,
    error: null
}

export default function PhenotypesReducer(state=initialState,action) {
    // console.log(action.payload)
    switch(action.type) {
        case ONSUBMITPHENOTYPES:return {
            ...state,
            validPhenotypes: action.payload,
            error:null
        }
        case ONERROR:return {
            ...state,
            error: action.payload
        }
        default:return state
    } 
}