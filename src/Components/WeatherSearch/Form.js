import React, {useState} from "react";
import "../../scss/main.css";






let Form=(props)=> {
    let [editMode, setEditMode] = useState(false);
    const activeModeSearch = () => {
        setEditMode(true);
    };
    return (<div>

        <form onSubmit={props.GetWeather}>
            {!editMode ?
                <span onClick={activeModeSearch}>
                            <i className="fa fa-search"></i> поиск  </span>
                :
                <span>

                        <input
                            type="text" name='city' placeholder='город' required/>
                            <button>
                                <i className="fa fa-search"></i>
                            </button>
                        <div className="block-info">
                        введите любой город
                        </div>
                        </span>
            }
        </form>


    </div>)

}

    export default Form;