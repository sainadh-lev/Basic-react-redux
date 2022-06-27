import {BUYCAKE,GIVECAKE} from './ActionTypes';

const initialState = {
    numOfCakes : 10
}

function CakeReducer(state=initialState,action) {
    // console.log(action.payload);
    let a=action.payload;
    switch(action.type) {
        case BUYCAKE:return { 
            ...state,
            numOfCakes:state.numOfCakes-a
        }
        case GIVECAKE: return {
            ...state,
            numOfCakes:state.numOfCakes+1
        } 
        default: return state
    }
}

export default CakeReducer;