import React from "react";
import {connect} from "react-redux";
import {getWeatherThunkGrodno} from "../../redux/ReduserWeather";
import WeatherGrodno from "./WeatherGrodno";

class ContainerWeatherGrodno extends React.Component {
    componentDidMount() {
        this.props.getWeatherGrodno();
    }
    render() {
        return (
            <div>
                <WeatherGrodno {...this.props}/>
            </div>

        );
    }
}
let mapStateToProps = (state) => {

    return {

        DataWeather: state.WeatherPage.DataWeatherGrodno,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        getWeatherGrodno:(city)=>{
            dispatch(getWeatherThunkGrodno(city))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerWeatherGrodno);

