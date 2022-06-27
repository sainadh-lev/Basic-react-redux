import axios from "axios";
import { ONSUBMIT } from "./ActionTypes";

export function OnSubmit(payload) {
  return {
    type: ONSUBMIT,
    payload: payload,
  };
}

export default function ReceiveToken(props) {
    console.log(props)
  return (dispatch) => {
    axios
      .post("/login",{email: props.email, password: props.password})
      .then(function (response) {
          console.log(response.data);
        dispatch(OnSubmit(response.data.access_token));
      })
      .catch((e) => {
        console.log(e);
      });
  };
}
