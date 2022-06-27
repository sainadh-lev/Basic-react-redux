import {ONREGISTER,ONREGISTERDETAILSERROR} from './ActionTypes'

const initialState = {
    validdetails: false,
    error: null
}

export default function RegisterReducer(state=initialState,action) {
    // console.log(action.payload)
    switch(action.type) {
        case ONREGISTER:return {
            ...state,
            validdetails: action.payload,
            error:null
        }
        case ONREGISTERDETAILSERROR:return {
            ...state,
            error: action.payload
        }
        default:return state
    } 
}