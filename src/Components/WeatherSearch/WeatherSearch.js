import React,{useState} from "react";
import "../../scss/main.css";
import ModalWindow from "../ModalWindow/ModalWindow";
import SliderSlickCityRB from "../SliderSlick/SliderSlickCityRB";




let WeatherSearch = (props) => {

    let [editMode, setEditMode]=useState(false);
    const activeMode=()=>{
        setEditMode(true);
    }
    const deleteeMode=()=>{
        setEditMode(false);
    }



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
                    {!editMode ?
                            <span onClick={activeMode}>
                        <img
                            src="data:image/jpeg;base64,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"
                            alt=""/> поиск  </span>
                            :
                        <span>
                        <input  onBlur={deleteeMode} 
                            type="text" name='city' placeholder='город' required/>
                        <div className="block-info">
                        введите любой город
                        </div>
                        </span>
                    }
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
                        <SliderSlickCityRB/>
                        </div>
                    </div>
                </div>
                </div>{/*================*/}
        </body>
    )
}


export default WeatherSearch;