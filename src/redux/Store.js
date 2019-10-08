
import {applyMiddleware, combineReducers, createStore,} from "redux";
import WeatherReducer from "./ReduserWeather";
import thunkMiddleware from "redux-thunk"
import {reducer as FormReducer} from "redux-form";


let reducers=combineReducers({
        WeatherPage:WeatherReducer,
        form:FormReducer,

})



let store =createStore(reducers,applyMiddleware(thunkMiddleware));
window.store=store;


export default store;