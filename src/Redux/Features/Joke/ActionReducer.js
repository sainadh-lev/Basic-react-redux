import { ERROROCCURRED, SETLOADINGASTRUE, RECEIVEDJOKE } from "./ActionTypes";

const initialstate = {
    loading:false,
    data:null
}


function JokeReducer(state=initialstate,action) {
    switch(action.type) {
        case SETLOADINGASTRUE:return {
            ...state,
            loading:true
        }
        case RECEIVEDJOKE:return {
            ...state,
            data: action.payload,
            loading:false
        }
        case ERROROCCURRED: return {
            ...state,
            data:action.payload,
            loading:false
        }
        default:return  state
    }
}

export default JokeReducer;


