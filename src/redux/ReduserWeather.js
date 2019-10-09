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
const SITY_STORE = 'SITY_STORE';



let initialState = {
    DataWeather: null,
    Data_Other: [],
    isData:false,
    cityStoreName:[{cityStore:null}],
    cityStore2:[],
}


const WeatherReducer = (state = initialState, action) => {
    switch(action.type) {
        case SITY_STORE: {

            return {
                ...state,
                cityStoreName:[...state.cityStoreName,{cityStore:action.cityStore}]

            }
        }

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

export const sendCityStore=(cityStore)=>({type:SITY_STORE, cityStore});



export const getWeatherThunk=(cityStore)=>dispatch=>{
    getWeatherWorld(cityStore)
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
    getWeatherCityBY.getWeatherBrest()
        .then(resp=>{
                if(resp.data.cod===200){
                    dispatch({
                        type:DATA_WEATHER_BREST,
                        DataWeatherBrest: resp.data
                    })
                }
            }
        )
    getWeatherCityBY.getWeatherGrodno()
        .then(resp=>{
                if(resp.data.cod===200){
                    dispatch({
                        type:DATA_WEATHER_GRODNO,
                        DataWeatherGrodno: resp.data
                    })
                }
            }
        )
    getWeatherCityBY.getWeatherVitebsk()
        .then(resp=>{
                if(resp.data.cod===200){
                    dispatch({
                        type:DATA_WEATHER_VITEBSK,
                        DataWeatherVitebsk: resp.data
                    })
                }
            }
        )
    getWeatherCityBY.getWeatherMahilyow()
        .then(resp=>{
                if(resp.data.cod===200){
                    dispatch({
                        type:DATA_WEATHER_MAHILYOW,
                        DataWeatherMahilyow: resp.data
                    })
                }
            }
        )
    getWeatherCityBY.getWeatherHomel()
        .then(resp=>{
                if(resp.data.cod===200){
                    dispatch({
                        type:DATA_WEATHER_HOMEL,
                        DataWeatherHomel: resp.data
                    })
                }
            }
        )

};


export default WeatherReducer;
