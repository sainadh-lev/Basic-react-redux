import axios from "axios";
import { STARTLOADING, RECEIVEDDATA ,ERROROCCURRED } from "./ActionTypes";

export const StartLoading = () => {
    return {
        type:STARTLOADING,
    };
}

export const ReceivedCityWeather = (payload='received') => {
    return {
        type:RECEIVEDDATA,
        payload:payload
    };
}

export const ErrorOccurred = (payload='error') => {
    // console.log(datareceived)
    return {
        type:ERROROCCURRED,
        payload:payload
    };
}


export default function ReceiveCityWeather(name)  {
    return ((dispatch) => {
        dispatch(StartLoading())
        let url="https://api.openweathermap.org/data/2.5/weather?q="+name+"&units=metric&appid=bf2c1efed67d4a6dd8eef6cc4537675a";
        axios.get(url)
        .then((response) => {
            dispatch(ReceivedCityWeather(response.data))
        })
        .catch((error) => {
            dispatch(ErrorOccurred(error.message))
        })
    });
}
