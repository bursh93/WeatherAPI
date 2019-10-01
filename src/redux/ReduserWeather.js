import {getWeatherBrest, getWeatherWorld} from "../API/API";


const DATA_WEATHER = 'DATA_WEATHER';
const DATA_WEATHER_BREST = 'DATA_WEATHER_BREST';


let initialState = {
    DataWeather: null, //here all weather data
    DataWeatherBrest: null, //here all weather data
    isData:false,  //for data
}
const WeatherReducer = (state = initialState, action) => {
    switch(action.type) {
        case DATA_WEATHER: {
            return { ...state, DataWeather: action.DataWeather,isData:true }
        }
        case DATA_WEATHER_BREST: {
            return { ...state, DataWeatherBrest: action.DataWeatherBrest }
        }
        default:
            return state;
    }
}
export const getWeatherThunk=(city)=>dispatch=>{
    getWeatherWorld(city)
        .then(resp=>{
                if(resp.data.cod===200){
                    dispatch({
                        type:DATA_WEATHER,
                        DataWeather: resp.data
                    })
                }

            }
        )
}

export const getWeatherThunkBrest=(city)=>dispatch=>{
    getWeatherBrest(city)
        .then(resp=>{
                if(resp.data.cod===200){
                    dispatch({
                        type:DATA_WEATHER_BREST,
                        DataWeatherBrest: resp.data
                    })
                }
            }
        )
}


export default WeatherReducer;
