import { DECREMENT, INCREMENT } from "./ActionTypes";


const initialState = {
    value:10
}

function CounterReducer(state=initialState,action) {
    switch(action.type) {
        case INCREMENT: return {
            ...state,
            value:state.value+1
        }
        case DECREMENT: return {
            ...state,
            value:state.value-1
        }
        default:return state
    }
}

export default CounterReducer

