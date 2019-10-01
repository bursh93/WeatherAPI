import React from "react";
import "../../scss/main.css";




let WeatherBrest = (props) => {

    if (!props.DataWeather) {
        return null
    }

    let name = "Погода в " + (props.DataWeather.name) + " ";
    let country = (props.DataWeather.sys.country);
    let temp = "Температура: " + Math.round(props.DataWeather.main.temp - 273) + "с";
    let pressure = Math.round(props.DataWeather.main.pressure * 0.00750063755419211 * 100) + " mm.рт.cт";
    let humidity = (props.DataWeather.main.humidity) + "%";
    let src = 'https://openweathermap.org/img/w/' + props.DataWeather.weather[0].icon + '.png';

    return (

        <body>

        <div className="weatherData">{/*================*/}
            <div className="weatherCity">  {name}
                <span> {country} </span> <img src={src}/>
            </div>
            <div className="sectionGridWrapper">
                <div className="section1">
                    <div className="temp"> {temp}  </div>
                    <div> Атмосферное давление: {pressure} </div>
                    <div> Влажность :{humidity}</div>
                </div>
            </div>
        </div>{/*================*/}
        </body>
    )
}


export default WeatherBrest;