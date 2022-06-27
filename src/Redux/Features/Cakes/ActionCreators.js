import {BUYCAKE}  from './ActionTypes';
import {GIVECAKE} from './ActionTypes';

function BuyCake(number=1) {
    // console.log(number);
    return ( {
        type:BUYCAKE,
        payload: number
    } );
}

function GiveCake() {
    return {
        type:GIVECAKE,
    };
}

export default BuyCake;
export {GiveCake};