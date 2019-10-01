import React from "react";
import Slider from "react-slick";
import "../../scss/main.css";
import ContainerWeatherBrest from "../../OtherCity/Brest/ContainerWeatherBrest";
import ContainerWeatherGrodno from "../../OtherCity/Grodno/ContainerWeatherGrodno";
import ContainerWeatherVitebsk from "../../OtherCity/Vitebsk/ContainerWeatherVitebsk";
import ContainerWeatherMahilyow from "../../OtherCity/Mahilyow/ContainerWeatherMahilyow";
import ContainerWeatherHomel from "../../OtherCity/Homel/ContainerWeatherHomel";


   class SliderSlickCityRB extends React.Component {
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
                        <ContainerWeatherGrodno/>
                    </div>
                </div>
                <div>
                    <div className="sliderBlock">
                        <ContainerWeatherVitebsk/>
                    </div>
                </div>
                <div>
                    <div className="sliderBlock">
                        <ContainerWeatherMahilyow/>
                    </div>
                </div>
                <div>
                    <div className="sliderBlock">
                        <ContainerWeatherHomel/>
                    </div>
                </div>

            </Slider>
            </div>
        );
    }
}

export default SliderSlickCityRB;