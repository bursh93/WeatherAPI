import React, {useState} from "react";
import "../../scss/main.css";

import {Field, reduxForm} from "redux-form";



let FormGetCityWeather=(props)=>{
    let [editMode, setEditMode] = useState(false);
    const activeModeSearch = () => {
        setEditMode(true);
    };


    return <div>




        <form onSubmit={props.handleSubmit}>

            {!editMode ?
                <span onClick={activeModeSearch} >
                            <i className="fa fa-search"></i> поиск  </span>
                :
                <span>
                        <Field  component={"input"}
                             name='city' placeholder='город' required/>

                            <button>
                                <i className="fa fa-search"></i>
                            </button>
                        <div className="block-info">
                        введите любой город
                        </div>
                        </span>
            }
        </form>

    </div>
}
const WeatherCityForm=reduxForm({form:'weatherCityForm  '})(FormGetCityWeather);


let FormCity=(props)=> {




    const onSubmit=(values)=>{
        props.SetCityStore(values.city)
        props.GetWeather(values.city) // weather for get request
    }

    return (
        <WeatherCityForm  onSubmit={onSubmit}/>
    )

}



    export default FormCity;