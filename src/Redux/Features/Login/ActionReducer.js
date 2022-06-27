import {ONSUBMIT} from './ActionTypes'

const initialState = {
    token: null,
    validuser: false,
}

export default function LoginReducer(state=initialState,action) {
    // console.log(action.payload)
    switch(action.type) {
        case ONSUBMIT:return {
            ...state,
            token:action.payload,
        }
        default:return state
    } 
}