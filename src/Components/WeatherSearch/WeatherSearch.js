import React, {useState} from "react";
import "../../scss/main.css";
import ModalWindow from "../ModalWindow/ModalWindow";
import SliderSlickCityRB from "../SliderSlick/SliderSlickCityRB";
import styled from 'styled-components';


const DivCompare = styled.div`
  height: 400px;
  width: 10%;
  text-align: center;
  color: black;
  background: pink;
  position:relative;
  font-size:18px;
  
`;

const DivCompareX = styled.div`
  position:absolute;
  width:25px;
  height:25px;
  top:-20px;
  right:-15px;
  cursor:pointer;
  background:white;
  color:black;
  vertical-align: middle;
    padding-bottom: 15px;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  outline: 0;   
    ::before {
    content: '🚀';
  }
  :hover {
    color: red;
  }
`;


let WeatherSearch = (props) => {

    let [editMode, setEditMode] = useState(false);
    const activeModeSearch = () => {
        setEditMode(true);
    }
    const deleteeModeSearch = () => {
        setEditMode(false);
    }
    let [editModeCompare, setEditModeCompare] = useState(false);

    const activeModeCompare = () => {
        setEditModeCompare(true);
    }
    const deleteeModeCompare = () => {
        setEditModeCompare(false);
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
        <button className="btn-up "/>
        <div className="ContainerHeader">
            <div className="WrapperGrid">
                <div className="header">
                    <div className="imgAndName">
                        <i className="fa fa-umbrella"></i>
                        <span>Погода</span>

                    </div>
                    <div className="FormWeather">
                        <form onSubmit={props.GetWeather}>
                            {!editMode ?
                                <span onClick={activeModeSearch}>
                            <i className="fa fa-search"></i> поиск  </span>
                                :
                                <span>
                            <form action="">
                        <input
                            type="text" name='city' placeholder='город' required/>
                            <button>
 <i className="fa fa-search"></i>
                            </button>
                        <div className="block-info">
                        введите любой город
                        </div>
                                </form>
                        </span>
                            }
                        </form>
                    </div>
                    <div className="RightHeader">
                        <a href=""><span>прогноз на 10 дней</span></a>
                        <a href=""> <span>прогноз на месяц</span></a>
                        <a href=""> <span>погода на карте <span>v</span></span></a>
                        {props.editMode ?
                            <span onClick={props.activeEditMode} className="in"> Войти
                                    </span>
                            :
                            <ModalWindow DeleteActiveEditMode={props.DeleteActiveEditMode}/>
                        }
                    </div>
                </div>
            </div>
        </div>
        <div className="weatherData">{/*================*/}
            <div className="weatherCity">  {name}
                <span> {country} </span> <img src={src}/>
                <button onClick={activeModeCompare} onDoubleClick={deleteeModeCompare}
                        className="weatherButton">рядом со мной
                </button>
                {/*==============work here================*/}
                <button className="weatherButton">сравнить</button>
                {editModeCompare ?
                    <DivCompare>
                        <div className="leftMenu">
                            <ul>
                                <li>рядом со мной
                                    <ul>
                                        <li>1</li>
                                        <li>2</li>
                                        <li>3</li>
                                        <li>4</li>
                                    </ul>
                                </li>
                                <li>рядом со мной2</li>
                                <li>рядом со мной3</li>
                                <li>рядом со мной4</li>

                            </ul>
                        </div>
                        <DivCompareX onClick={deleteeModeCompare}>
                            &times;
                        </DivCompareX>
                    </DivCompare>
                    : null
                }

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
        </div>
        {/*================*/}
        </body>
    )
}


export default WeatherSearch;