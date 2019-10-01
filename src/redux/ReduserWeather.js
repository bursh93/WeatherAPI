import {
    getWeatherBrest,
    getWeatherGrodno,
    getWeatherHomel,
    getWeatherMahilyow,
    getWeatherVitebsk,
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
    DataWeatherBrest: null,
    DataWeatherGrodno: null,
    DataWeatherVitebsk: null,
    DataWeatherMahilyow: null,
    DataWeatherHomel: null,
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
        case DATA_WEATHER_GRODNO: {
            return { ...state, DataWeatherGrodno: action.DataWeatherGrodno }
        }
        case DATA_WEATHER_VITEBSK: {
            return { ...state, DataWeatherVitebsk: action.DataWeatherVitebsk }
        }
        case DATA_WEATHER_MAHILYOW: {
            return { ...state, DataWeatherMahilyow: action.DataWeatherMahilyow }
        }
        case DATA_WEATHER_HOMEL: {
            return { ...state, DataWeatherHomel: action.DataWeatherHomel }
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
export const getWeatherThunkGrodno=(city)=>dispatch=>{
    getWeatherGrodno(city)
        .then(resp=>{
                if(resp.data.cod===200){
                    dispatch({
                        type:DATA_WEATHER_GRODNO,
                        DataWeatherGrodno: resp.data
                    })
                }
            }
        )
}

export const getWeatherThunkVitebsk=(city)=>dispatch=>{
    getWeatherVitebsk(city)
        .then(resp=>{
                if(resp.data.cod===200){
                    dispatch({
                        type:DATA_WEATHER_VITEBSK,
                        DataWeatherVitebsk: resp.data
                    })
                }
            }
        )
}


export const getWeatherThunkMahilyow=(city)=>dispatch=>{
    getWeatherMahilyow(city)
        .then(resp=>{
                if(resp.data.cod===200){
                    dispatch({
                        type:DATA_WEATHER_MAHILYOW,
                        DataWeatherMahilyow: resp.data
                    })
                }
            }
        )
}

export const getWeatherThunkHomel=(city)=>dispatch=>{
    getWeatherHomel(city)
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
