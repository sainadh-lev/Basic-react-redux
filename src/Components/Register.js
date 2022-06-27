import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import Register from "../Redux/Features/Register/ActionCreators";
import { connect } from "react-redux";
import {Alert} from "react-bootstrap"

function RegisterOn(props) {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()
    function HandleSubmit(e) {
        e.preventDefault()
        // console.log(e)
        props.register({name:e.target[0].value,email:e.target[1].value,password:e.target[2].value})
    }
    if(props.validdetails) {
        navigate("/login")
    }
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={HandleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary">
            <a href="/login" style={{textDecoration:"none"}} >Sign In</a>
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control mt-1"
              placeholder="e.g Sainadh J"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
      {props.error && <Alert>{props.error}</Alert>}
    </div>
  );
}


function mapStateToProps(state) {
    return {
        validdetails: state.register.validdetails,
        error: state.register.error
    }
}

function mapDispatchToProps(dispatch) {
    return {
        register: (props) => dispatch(Register(props))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterOn)



