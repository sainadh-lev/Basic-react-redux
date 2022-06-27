import React, { useState,useEffect } from "react";
import ReceiveToken from "../Redux/Features/Login/ActionCreators";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login(props) {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    let navigate = useNavigate()
    function handleSubmit(e) {
        e.preventDefault()
        props.receivetoken({email: {email}, password: {password}})
    }
    if(props.token!==null && props.token!==undefined) {
        // console.log(props.token)
        navigate("/userinfo")
    }
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Not registered yet?{" "}
            <span className="link-primary">
              <a href="/register" style={{textDecoration:"none"}} >Sign Up</a>
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          {/* <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p> */}
        </div>
      </form>
      {/* {console.log(props.payload)} */}
      {/* {props.payload && <p>{props.payload}</p>} */}
    </div>
  );
}


function mapStateToProps(state) {
    // console.log(state.login.tok)
    return {
        token: state.login.token
    }
}

function mapDispatchToProps(dispatch) {
    return {
        receivetoken: (props) => dispatch(ReceiveToken(props))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)
