import React from "react";
import "../scss/main.css";
import Slider from "react-slick";


let DataOtherCityBY=(props)=> {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (<div>
                <Slider {...settings}>
                    {props.Data_Other.map(w => <div key={w.id}>
                            <div>
                                {w.city.name}
                                {w.city.main.temp}
                            </div>
                        </div>)
                    }
                </Slider>
    </div>)
}


export default DataOtherCityBY;



