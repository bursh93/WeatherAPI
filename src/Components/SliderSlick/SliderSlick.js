import React from "react";
import Slider from "react-slick";
import "../../scss/main.css";
import ContainerWeatherBrest from "../../OtherCity/Brest/ContainerWeatherBrest";


   class SliderSlick extends React.Component {
    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className="sliderWrapper">
            <Slider {...settings}>
                <div className="sliderBlock">
                    <div>
                        <ContainerWeatherBrest/>
            </div>
                </div>
                <div>
                    <div className="sliderBlock">
                        <ContainerWeatherBrest/>
                    </div>
                </div>
                <div>
                    <div className="sliderBlock">
                        <ContainerWeatherBrest/>
                    </div>
                </div>
                <div>
                    <div className="sliderBlock">
                        <ContainerWeatherBrest/>
                    </div>
                </div>
                <div>
                    <div className="sliderBlock">
                        <ContainerWeatherBrest/>
                    </div>
                </div>
                <div>
                    <div className="sliderBlock">
                        <ContainerWeatherBrest/>
                    </div>
                </div>
            </Slider>
            </div>
        );
    }
}

export default SliderSlick;