import React from 'react';
import BuyCake from '../Redux/Features/Cakes/ActionCreators';
import {connect} from 'react-redux';

function Cake(props) {
    console.log(props.numOfCakes);
    return ( 
        <div>
            <h2>No of cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy a Cake</button>
        </div>
     );
}

const mapStateToProps = (state) => {
    return {
        numOfCakes:state.numOfCakes-1
    };
}

const mapDispatchToProps = (dispatch) => {
    return  {
        buyCake: () => dispatch(BuyCake())
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Cake);