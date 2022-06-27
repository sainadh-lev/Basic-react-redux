import {useDispatch,useSelector} from "react-redux";
import {useState} from 'react';
import  ReceiveCityWeather from "../Redux/Features/CityWeather/ActionCreators";
import { useNavigate } from "react-router-dom";

function CityWeather() {
    const [cityname,Setcityname] = useState('guntur');
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {loading,data} = useSelector((state) => state.weather || {});
    const {token} = useSelector((state) => state.login);
    // if(token === null || token === undefined) {
    //     console.log(token)
    //    navigate("/login")
    //    return 
    // }
    //data object contains all data regarding weather in that we r only displaying temparature and small description
    return ( 
        <>
        <h2>CityWeather</h2>
        {/* <h2>Hello</h2> */}
            <input type='text' value={cityname} placeholder="Name" onChange={(e) => Setcityname(e.target.value)} />
            <button onClick={() => dispatch(ReceiveCityWeather(cityname))}>Submit</button>
        {loading && <p>loading...</p>}
        {data &&  <><h2>{data.weather[0].description}</h2> <p>{data.main.temp}</p></>} 
        </>
     );
}

export default CityWeather;