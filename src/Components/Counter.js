import React, { Component } from 'react'
import { Increment } from '../Redux/Features/Counter/ActionCreators'
import { Decrement } from '../Redux/Features/Counter/ActionCreators'
import { connect } from 'react-redux' 

class Counter extends Component {
    constructor(props) {
        super(props)
        this.style = {
            color: "red",
            fontSize: "20px",
            textAlign: "center"
         };
    }
handlePlus = () => {
    this.props.increment()
}
handleMinus = () => {
    this.props.decrement()
}

  render() {
    return (
      <div>
          <h2>Counter {this.props.value}</h2>
          <button style={this.style} onClick={this.handlePlus}>Add</button>
          <button style={this.style} onClick={this.handleMinus}>Minus</button>
     </div>
    )
  }
}

//adding props from state and make sure u check root reducer to map state to crt reducer
const mapStateToProps = (state) => {
    return {
       value:state.counter.value
    }
}


const mapDispatchToProps = (dispatch) => {
    return  {
        increment: () => dispatch(Increment()),
        decrement: () => dispatch(Decrement())
    }
}

 
export default connect(mapStateToProps,mapDispatchToProps)(Counter);



