import React from "react";
import "../../scss/main.css";
import ModalWindow from "../ModalWindow/ModalWindow";
import FormCity from "./FormCity";



let CityStore=props=>{
    return <div>
        {props.city}
    </div>
}




let WeatherSearch =React.memo ((props) => {
    if (!props.DataWeather) {
        return "loading"
    }

    let name = "Погода в " + (props.DataWeather.name) + " ";
    let country = (props.DataWeather.sys.country);
    let temp = "Температура: " + Math.round(props.DataWeather.main.temp - 273) + "с";
    let pressure = Math.round(props.DataWeather.main.pressure * 0.00750063755419211 * 100) + " mm.рт.cт";
    let humidity = (props.DataWeather.main.humidity) + "%";
    let src = 'https://openweathermap.org/img/w/' + props.DataWeather.weather[0].icon + '.png';
    return (
        <body>
        <button className="btn-up "/>
        <div className="ContainerHeader">
            <div className="WrapperGrid">
                <div className="header">
                    <div className="imgAndName">
                        <i className="fa fa-umbrella"> </i>
                        <span>Погода</span>
                    </div>
                    <div className="FormWeather">
                        <FormCity   SetCityStore={props.SetCityStore} GetWeather={props.GetWeather}/>

                    </div>

                    <div className="RightHeader">
                        <a href=""><span>прогноз на 10 дней</span></a>
                        <a href=""> <span>прогноз на месяц</span></a>
                        <a href=""> <span>погода на карте <span>v</span></span></a>
                        {props.editMode ?
                            <span onClick={props.activeEditMode} className="in"> Войти
                                    </span>
                            :
                            <ModalWindow deletMode={props.DeleteActiveEditMode}/>
                        }
                    </div>
                </div>
            </div>
        </div>
        <div className="weatherData">{/*================*/}
            <div className="weatherCity">  {name}
                <span> {country} </span> <img src={src}/>
                <button className="weatherButton">рядом со мной
                </button>
                <button className="weatherButton">сравнить</button>
            </div>
            <div className="sectionGridWrapper">
                <div className="section1">
                    <div className="temp"> {temp}  </div>
                    <div> Атмосферное давление: {pressure} </div>
                    <div> Влажность :{humidity}</div>
                </div>
                <div className="section2">
                    <div>
                        <div>?</div>
                        <div>?</div>
                    </div>
                    <div>???</div>
                </div>
                <div className="section3">
                    <div>
                    </div>
                </div>
            </div>
        </div>

        </body>
    )
})


export default WeatherSearch;