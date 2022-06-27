import axios from "axios";
import { ONERROR, ONSUBMITPHENOTYPES } from "./ActionTypes";

export function OnSubmitPhenotypes(payload) {
  return {
    type: ONSUBMITPHENOTYPES,
    payload: payload,
  };
}

export function OnError(payload) {
  return {
    type: ONERROR,
    payload: payload,
  }
}

export default function Phenotypes(phenotypes,noofdocs) {
    // console.log(phenotypes)
  return (dispatch) => {
    axios
      .post("/phenotypes",{phenotypes,noofdocs})
      .then(function (response) {
        console.log(response);
        dispatch(OnSubmitPhenotypes(response.data));
      })
      .catch((e) => {
        console.log(e.message);
        dispatch(OnError(e.message));
      });
  };
}
