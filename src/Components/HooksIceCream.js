import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import BuyIceCream from '../Redux/Features/IceCream/ActionCreators';
function HooksIceCream() {
    const numOfIceCreams = useSelector((state) => {return state.iceCream.numOfIceCreams});
    const dispatch = useDispatch();
    return ( 
        <div>
            <h2>Num Of IceCreams -{numOfIceCreams}</h2>
            <button onClick={() => dispatch(BuyIceCream())}>Buy a iceCream</button>
        </div>
     );
}

export default HooksIceCream;