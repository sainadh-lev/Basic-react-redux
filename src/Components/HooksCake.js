import {useState} from 'react';
import {useSelector,useDispatch} from "react-redux";
import BuyCake from '../Redux/Features/Cakes/ActionCreators';

function HooksCake() {
    const [number,setnumber] = useState(1);
    const numOfCakes = useSelector((state) => state.cake.numOfCakes);
    const dispatch = useDispatch()
    return ( 
        <div>
            <h2>No Of Cakes {numOfCakes}</h2>
            <input  type="text" value={number} onChange={(e) => setnumber(Number(e.target.value))} />
            <button onClick={ () => dispatch(BuyCake((number)))}>Buy {number} cakes</button>
        </div>
     );
}

export default HooksCake;