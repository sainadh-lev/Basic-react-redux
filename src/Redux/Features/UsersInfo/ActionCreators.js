import { FETCHEDSUCCESSFULLY, LOADINGASTRUE, ERROROCCURRED } from "./ActionTypes";
import axios from "axios";

export const SetLoadingAsTrue = () => {
    return {
        type: LOADINGASTRUE,
    };
}

export const FetchedSuccessfully = (users) => {
    return {
        type:FETCHEDSUCCESSFULLY,
        payload: users
    };
}

export const ErrorOccurred = (error) => {
    return {
        type:ERROROCCURRED,
        payload:error
    };
}


export default function ReceiveUsersInfo(token) {
      // by using thunk it returns function and by giving parameter as dispatch function
      console.log(token);
    return ((dispatch) => {     
        dispatch(SetLoadingAsTrue())
        // https://jsonplaceholder.typicode.com/users
        let yourConfig = {
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            }
         }
        axios.get("/userinfo",yourConfig)
        .then((response) => {
            const users= response.data
            console.log(users)
            // dispatch(FetchedSuccessfully(users))
        })
        .catch((error) => {
            const errorMsg=error.message
            console.error(errorMsg)
            // dispatch(ErrorOccurred(errorMsg))
        })
    })
}


