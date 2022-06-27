import { ERROROCCURRED, STARTLOADING, RECEIVEDDATA } from "./ActionTypes";

const initialstate = {
    loading:false,
    data:null
}


function CityWeatherReducer(state=initialstate,action) {
    switch(action.type) {
        case STARTLOADING:return {
            ...state,
            loading:true
        }
        case RECEIVEDDATA:return {
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

export default CityWeatherReducer;


