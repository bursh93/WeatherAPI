import React from "react";
import {connect} from "react-redux";
import {getWeatherThunkMahilyow, getWeatherThunkVitebsk} from "../../redux/ReduserWeather";
import WeatherMahilyow from "./WeatherMahilyow";

class ContainerWeatherMahilyow extends React.Component {
    componentDidMount() {
        this.props.getWeatherMahilyow();
    }
    render() {
        return (
            <div>
                <WeatherMahilyow {...this.props}/>
            </div>

        );
    }
}
let mapStateToProps = (state) => {

    return {
        DataWeather: state.WeatherPage.DataWeatherMahilyow,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        getWeatherMahilyow:(city)=>{
            dispatch(getWeatherThunkMahilyow(city))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerWeatherMahilyow);

