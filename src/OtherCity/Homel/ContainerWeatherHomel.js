import React from "react";
import {connect} from "react-redux";
import {getWeatherThunkHomel} from "../../redux/ReduserWeather";
import WeatherHomel from "./WeatherHomel";

class ContainerWeatherHomel extends React.Component {
    componentDidMount() {
        this.props.getWeatherHomel();
    }
    render() {
        return (
            <div>
                <WeatherHomel {...this.props}/>
            </div>

        );
    }
}
let mapStateToProps = (state) => {

    return {
        DataWeather: state.WeatherPage.DataWeatherHomel,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        getWeatherHomel:(city)=>{
            dispatch(getWeatherThunkHomel(city))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerWeatherHomel);

