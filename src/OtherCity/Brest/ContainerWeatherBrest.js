import React from "react";
import {connect} from "react-redux";
import {getWeatherThunkBrest} from "../../redux/ReduserWeather";
import WeatherBrest from "./WeatherBrest";

class ContainerWeatherBrest extends React.Component {
    componentDidMount() {
        this.props.getWeatherBrest();
    }
    render() {
        return (
            <div>
                <WeatherBrest {...this.props}/>
            </div>

        );
    }
}
let mapStateToProps = (state) => {
    return {

        DataWeather: state.WeatherPage.DataWeatherBrest,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        getWeatherBrest:(city)=>{
            dispatch(getWeatherThunkBrest(city))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerWeatherBrest);

