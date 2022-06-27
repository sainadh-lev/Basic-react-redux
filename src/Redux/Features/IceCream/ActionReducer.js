// import action from './IceCreamActions';
import  {BUYICECREAM}  from './ActionTypes';

const initialState = {
    numOfIceCreams : 20
}


const IceCreamReducer = (state=initialState,action) => {
    switch(action.type) {
        case BUYICECREAM : return {
            ...state,
            numOfIceCreams:state.numOfIceCreams-1
        }
        default : return state
    }
}

export default IceCreamReducer