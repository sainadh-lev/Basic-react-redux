import axios from "axios";
import { SETLOADINGASTRUE, RECEIVEDJOKE, ERROROCCURRED } from "./ActionTypes";

export const SetLoadingAsTrue = () => {
  return {
    type: SETLOADINGASTRUE,
  };
};

export const ReceivedJoke = (payload = "received") => {
  console.log(payload);
  return {
    type: RECEIVEDJOKE,
    payload: payload,
  };
};

export const ErrorOccurred = (payload = "error") => {
  console.log(payload);
  return {
    type: ERROROCCURRED,
    payload: payload,
  };
};

export default function ReceiveJoke(name) {
  return (dispatch) => {
    dispatch(SetLoadingAsTrue());
    let url2 = "https://api.chucknorris.io/jokes/random?category=" + name;
    axios
      .get(url2)
      .then((response) => {
        console.log(response.data);
        dispatch(ReceivedJoke(response.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(ErrorOccurred(error.message));
      });
  };
}
