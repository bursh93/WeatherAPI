import React from "react";
import "../../scss/main.css";
import Slider from "react-slick";

let DataOtherCityBY=(props)=> {
    let settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (<div className="WrapperCityBy">
                <Slider {...settings}>
                    {props.Data_Other.map(w => <div key={w.id}>
                            <div className="OtherCityBy">
                                  <span>
                                <img src={'https://openweathermap.org/img/w/' + w.city.weather[0].icon + '.png'} alt=""/>
                                </span>
                               <div className="name">{"погода в "+ w.city.name}</div>
                               <div className="temp"> {"Температура  "+ Math.round( w.city.main.temp -273) +"c"}</div>
                                <div> {"Атмосферное давление "+Math.round(w.city.main.pressure * 0.00750063755419211 * 100) + " mm.рт.cт"} </div>
                               <div> {("Влажность "+ w.city.main.humidity) + "%"}  </div>

                            </div>
                        </div>)
                    }
                </Slider>
    </div>)
}


export default DataOtherCityBY;



