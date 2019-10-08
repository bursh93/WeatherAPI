import {
     getWeatherCityBY,
    getWeatherWorld
} from "../API/API";

const DATA_WEATHER = 'DATA_WEATHER';
const DATA_WEATHER_BREST = 'DATA_WEATHER_BREST';
const DATA_WEATHER_GRODNO = 'DATA_WEATHER_GRODNO';
const DATA_WEATHER_VITEBSK = 'DATA_WEATHER_VITEBSK';
const DATA_WEATHER_MAHILYOW = 'DATA_WEATHER_MAHILYOW';
const DATA_WEATHER_HOMEL = 'DATA_WEATHER_HOMEL';



let initialState = {
    DataWeather: null,
    Data_Other: [],
    isData:false,
}
const WeatherReducer = (state = initialState, action) => {
    switch(action.type) {
        case DATA_WEATHER: {
            return { ...state, DataWeather: action.DataWeather,isData:true }
        }
        case DATA_WEATHER_BREST: {
            return {
                ...state, Data_Other: [...state.Data_Other,{city:action.DataWeatherBrest, }]
            }
        }
        case DATA_WEATHER_GRODNO: {
            return {
                ...state,
                Data_Other: [...state.Data_Other,{ city:action.DataWeatherGrodno,}]
            }
        }
        case DATA_WEATHER_VITEBSK: {
            return {
                ...state,
                Data_Other: [...state.Data_Other,{ city:action.DataWeatherVitebsk,}]
            }
        }
        case DATA_WEATHER_MAHILYOW: {
            return {
                ...state,
                Data_Other: [...state.Data_Other,{ city:action.DataWeatherMahilyow,}]
            }
        }
        case DATA_WEATHER_HOMEL: {
            return {
                ...state,
                Data_Other: [...state.Data_Other,{ city:action.DataWeatherHomel,}]
            }
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

export const getWeatherThunkCityBY=(city)=>dispatch=>{
    getWeatherCityBY.getWeatherBrest(city)
        .then(resp=>{
                if(resp.data.cod===200){
                    dispatch({
                        type:DATA_WEATHER_BREST,
                        DataWeatherBrest: resp.data
                    })
                }
            }
        )
    getWeatherCityBY.getWeatherGrodno(city)
        .then(resp=>{
                if(resp.data.cod===200){
                    dispatch({
                        type:DATA_WEATHER_GRODNO,
                        DataWeatherGrodno: resp.data
                    })
                }
            }
        )
    getWeatherCityBY.getWeatherVitebsk(city)
        .then(resp=>{
                if(resp.data.cod===200){
                    dispatch({
                        type:DATA_WEATHER_VITEBSK,
                        DataWeatherVitebsk: resp.data
                    })
                }
            }
        )
    getWeatherCityBY.getWeatherMahilyow(city)
        .then(resp=>{
                if(resp.data.cod===200){
                    dispatch({
                        type:DATA_WEATHER_MAHILYOW,
                        DataWeatherMahilyow: resp.data
                    })
                }
            }
        )
    getWeatherCityBY.getWeatherHomel(city)
        .then(resp=>{
                if(resp.data.cod===200){
                    dispatch({
                        type:DATA_WEATHER_HOMEL,
                        DataWeatherHomel: resp.data
                    })
                }
            }
        )


}


export default WeatherReducer;
