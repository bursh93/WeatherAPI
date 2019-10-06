import React from 'react';
import WeatherContainer from "./Components/WeatherSearch/WeatherSearchContainer";
import "./scss/main.css";
import ContainerCityBy from "./OtherCity/ContainerCityBY";






function App() {
  return (
    <div className="Container">

        <WeatherContainer/>
        <div className='height'></div>
        <ContainerCityBy/>
    </div>
  )
}




export default App;
