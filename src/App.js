import './App.css';
// import HooksCakeContainer from './Components/HooksCakeContainer';
// import HooksIceCreamContainer from './Components/HooksIceCreamContainer';
// import NewCakeCotainer from './Components/NewCakeCotainer';
import Navbar from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";
import UserInfo from "./Components/UsersInfo";
import PageNotFound from "./Components/PageNotFound";
import CityWeather from "./Components/CityWeather";
import JokeClassComponent from "./Components/JokeClassComponent";
// import Counter from './Components/Counter';
import CounterAndCakeAndIceCream from "./Components/CounterAndCakeAndIceCream";
import Client from "./Components/Client";
import ReactForm from "./Components/ReactForm";
// import Question from "./Components/Question";
import Login from './Components/Login';
import RegisterOn from './Components/Register';
import Phenotypes from './Components/Phenotypes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ReactForm />} />
        <Route path="/documents" element={<Client />} />
        <Route path="/counter" element={<CounterAndCakeAndIceCream />} />
        <Route path="/userinfo" element={<UserInfo />} />
        <Route path="/cityweather" element={<CityWeather />} />
        <Route path="/joke" element={<JokeClassComponent />} />
        <Route path="/register" element={<RegisterOn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/phenotypes" element={<Phenotypes />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
