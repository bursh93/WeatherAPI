import React from "react";
import "../../scss/main.css";
import ModalWindow from "../ModalWindow/ModalWindow";
import SliderSlick from "../SliderSlick/SliderSlick";




let Weather = (props) => {

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
        <div className="ContainerHeader">
        <div className="WrapperGrid">
            <div className="header">
                <div className="imgAndName">

                    <img
                        src="data:image/png;base64,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"
                        alt=""/>
                    <span>Погода</span>
                </div>
                    <div className="FormWeather">
                <form onSubmit={props.GetWeather}>
                    <input type="text" name='city' placeholder='город' required
                    />
                    <button>найти</button>
                        <div className="block-info">
                            введите любой город
                        </div>
                </form>
                    </div>
                        <div className="RightHeader">
                            <a href=""><span>прогноз на 10 дней</span></a>
                            <a href="">  <span>прогноз на месяц</span></a>
                            <a href=""> <span>погода на карте <span>v</span></span></a>
                            {props.editMode ?
                                <span  onClick={props.activeEditMode}  className="in"> Войти
                                    </span>
                                    :
                                <ModalWindow  DeleteActiveEditMode={props.DeleteActiveEditMode} />
                            }
                        </div>
            </div>
            </div>
        </div>
            <div className="weatherData">{/*================*/}
                <div className="weatherCity">  {name}
                    <span> {country} </span> <img src={src}/> <button className="weatherButton">рядом со мной</button>
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
                        <SliderSlick/>
                        </div>
                    </div>
                </div>
                </div>{/*================*/}
        </body>
    )
}


export default Weather;