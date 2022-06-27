import React,{Component} from 'react';
import { connect } from 'react-redux';
import ReceiveJoke from '../Redux/Features/Joke/ActionCreators';


class JokeClassComponent extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            typeofjoke:'dev',
            // data:this.props.data
        }
    }
    handleChange = (e) => {
        this.setState({typeofjoke:e.target.value})
    }
    handleClick = () => {
        this.props.SelectedOption(this.state.typeofjoke)
    }
    render() { 
        return <div>
            <h2>Joke</h2>
            <select onChange={this.handleChange} value={this.state.typeofjoke} >
                <option value="animal">animal</option>
                <option value="career">career</option>
                <option value='celebrity'>celebrity</option>
                <option value='dev' >dev</option>
            </select>
            <button type='submit' onClick={this.handleClick}>submit</button>
            {this.props.loading && <p>Loading.....</p>}
            {this.props.data && <div><h2>{this.props.data.value}</h2></div>}
        </div>;
    }
    
}



//adding props from state and make sure u check root reducer to map state to crt reducer
const mapStateToProps = (state) => {
    return {
        loading:state.joke.loading,
        data:state.joke.data,
        token:state.login.token
    }
}


const mapDispatchToProps = (dispatch) => {
    return  {
        SelectedOption: (name) => dispatch(ReceiveJoke(name))
    }
}

 
export default connect(mapStateToProps,mapDispatchToProps)(JokeClassComponent);