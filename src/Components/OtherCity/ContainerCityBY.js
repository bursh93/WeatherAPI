import React from "react";
import {connect} from "react-redux";
import {getWeatherThunkCityBY} from "../../redux/ReduserWeather";
import DataOtherCityBY from "./cityBY";


class ContainerCityBy extends React.Component {
    componentDidMount() {
        this.props.getWeatherThunkCityBY();
    }
    render() {

        return (
            <div>
                <DataOtherCityBY Data_Other={this.props.Data_Other}/>
            </div>
        );
    }
}
let mapStateToProps = (state) => {

    return {

        Data_Other: state.WeatherPage.Data_Other,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        getWeatherThunkCityBY:(city)=>{
            dispatch(getWeatherThunkCityBY(city))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerCityBy);

