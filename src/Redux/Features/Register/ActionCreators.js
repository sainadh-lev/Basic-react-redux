import axios from "axios";
import { ONREGISTER,ONREGISTERDETAILSERROR } from "./ActionTypes";

export function OnRegister(payload) {
  return {
    type: ONREGISTER,
    payload: payload,
  };
}

export function OnRegisterDettailsError(payload) {
  return {
    type: ONREGISTERDETAILSERROR,
    payload: payload,
  }
}

export default function Register(props) {
    console.log(props)
  return (dispatch) => {
    axios
      .post("/register",{name:props.name, email: props.email, password: props.password})
      .then(function (response) {
          console.log(response);
        dispatch(OnRegister(response.data));
      })
      .catch((e) => {
        console.log(e.message);
        dispatch(OnRegisterDettailsError(e.message));
      });
  };
}
