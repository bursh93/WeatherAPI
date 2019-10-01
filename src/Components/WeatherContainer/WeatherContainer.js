import React from "react";
import Weather from "./Weather";
import {connect} from "react-redux";
import {getWeatherThunk,} from "../../redux/ReduserWeather";
import {ImagesCreator} from "../../redux/ImagesReduser";





class WeatherContainer extends React.Component {
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
    GetWeather = (e) => {
        e.preventDefault();
        let city = e.target.elements.city.value;
        this.props.getWeather(city);
    }

    render() {
        console.log(this.state.editMode)
        return (
            <div>
                <Weather {...this.props}
                         activeEditMode={this.activeEditMode}
                         DeleteActiveEditMode={this.DeleteActiveEditMode}
                         editMode={this.state.editMode}
                         GetWeather={this.GetWeather}
                         ImagesCreator={this.props.ImagesCreator}  />
            </div>

        );
    }
}
let mapStateToProps = (state) => {
    return {

        DataWeather: state.WeatherPage.DataWeather,
        isData:state.WeatherPage.isData,
        images:state.ImagesPage.images,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        getWeather:(city)=>{
            dispatch(getWeatherThunk(city))
        },
        ImagesCreator:(images)=>{
            dispatch(ImagesCreator(images))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer);








