import React from "react";
import {connect} from "react-redux";
import { getWeatherThunkVitebsk} from "../../redux/ReduserWeather";
import WeatherVitebsk from "./WeatherVitebsk";

class ContainerWeatherVitebsk extends React.Component {
    componentDidMount() {
        this.props.getWeatherVitebsk();
    }
    render() {
        return (
            <div>
                <WeatherVitebsk {...this.props}/>
            </div>

        );
    }
}
let mapStateToProps = (state) => {

    return {
        DataWeather: state.WeatherPage.DataWeatherVitebsk,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        getWeatherVitebsk:(city)=>{
            dispatch(getWeatherThunkVitebsk(city))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerWeatherVitebsk);

