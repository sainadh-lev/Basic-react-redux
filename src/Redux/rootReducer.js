import {combineReducers} from 'redux'; //for combining reducers
import CakeReducer from './Features/Cakes/ActionReducer';
import IceCreamReducer from './Features/IceCream/ActionReducer';
import UserInfoReducer from './Features/UsersInfo/ActionReducer';
import CityWeatherReducer from './Features/CityWeather/ActionReducer';
import JokeReducer from './Features/Joke/ActionReducer';
import CounterReducer from './Features/Counter/ActionReducer';
import LoginReducer from './Features/Login/ActionReducer';
import RegisterReducer from './Features/Register/ActionReducer';
import PhenotypesReducer from './Features/Phenotypes/ActionReducer';
// if we added new component make sure to add action reducer here
// and get that state by state.nameofactionreducer

const rootReducer = combineReducers ({
    cake: CakeReducer,
    iceCream: IceCreamReducer,
    user:UserInfoReducer,
    weather:CityWeatherReducer,
    joke:JokeReducer,
    counter:CounterReducer,
    login:LoginReducer,
    register:RegisterReducer,
    phenotypes:PhenotypesReducer
});

export default rootReducer