
import {applyMiddleware, combineReducers, createStore,} from "redux";
import WeatherReducer from "./ReduserWeather";
import thunkMiddleware from "redux-thunk"
import ImagesReduser from "./ImagesReduser";



let reducers=combineReducers({
        WeatherPage:WeatherReducer,
        ImagesPage:ImagesReduser,

})



let store =createStore(reducers,applyMiddleware(thunkMiddleware));
window.store=store;


export default store;