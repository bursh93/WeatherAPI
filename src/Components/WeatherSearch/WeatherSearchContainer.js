import React from "react";
import WeatherSearch from "./WeatherSearch";
import {connect} from "react-redux";
import {getWeatherThunk, sendCityStore,} from "../../redux/ReduserWeather";






class WeatherSearchContainer extends React.Component {
    state={
        editMode: true,

    }

    activeEditMode=()=> {
        this.setState({
            editMode: false
        })
    }

    DeleteActiveEditMode=()=> {
        this.setState({
            editMode: true
        })
    }
    
componentDidMount() {
        this.props.getWeather();
    }

    GetWeather = (city) => {
        this.props.getWeather(city);
    }




    

    render() {

        return (
            <div>
                <WeatherSearch {...this.props}
                               activeEditMode={this.activeEditMode}
                               DeleteActiveEditMode={this.DeleteActiveEditMode}
                               editMode={this.state.editMode}
                               GetWeather={this.GetWeather}
                               SetCityStore={this.props.SetCityStore}
                />
            </div>

        );
    }
}
let mapStateToProps = (state) => {
    return {

        DataWeather: state.WeatherPage.DataWeather,
        isData:state.WeatherPage.isData,
        cityStoreName:state.WeatherPage.cityStoreName,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        getWeather:(city)=>{
            dispatch(getWeatherThunk(city))
        },

        SetCityStore:(city)=>{
            dispatch(sendCityStore(city))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(WeatherSearchContainer);








