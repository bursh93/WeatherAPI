import React, { useState } from "react";
import "../../scss/main.css";






let Form = (props) => {
    let [editMode, setEditMode] = useState(false);
    const activeModeSearch = () => {
        setEditMode(true);
    };
    return (<div>

        <form onSubmit={props.GetWeather}>
            {!editMode ?
                <span onClick={activeModeSearch}>
                    <i className="fa fa-search"></i> поиск223123123  </span>
                :
                <span>

                    <input
                        type="text" name='city' placeholder='город' required />
                    <button>
                        <i className="fa fa-search"></i>
                    </button>
                    <div className="block-info">
                        введите любой город222
                        </div>
                </span>
            }
        </form>


    </div>)

}

export default Form;