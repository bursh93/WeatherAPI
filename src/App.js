import React from 'react';
import WeatherContainer from "./Components/WeatherSearch/WeatherSearchContainer";
import "./scss/main.css";
import ContainerCityBy from "./Components/OtherCity/ContainerCityBY";






function App() {
  return (
    <div className="Container">

        <WeatherContainer/>

        <ContainerCityBy/>
    </div>
  )
}




export default App;
