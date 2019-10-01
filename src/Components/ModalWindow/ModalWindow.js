import React from "react";
import "../../scss/main.css";


class ModalWindow extends React.Component {
    state = {
        SettingeditMode: false,
    }

    SettingEditModeActive() {
        this.setState({
            editMode: true
        })
    }

    SettingEditModeDelet() {
        this.setState({
            editMode: false
        })
    }

    render() {

        return <>
                    <div class="popup">
                    <div class="popup-content">
                        <button onClick={this.props.DeleteActiveEditMode} className="popup-close">&times;</button>
                            <form action="">
                                <label htmlFor="">ваше имя</label>
                                <input type="text"/><br/>
                                <label htmlFor="">ваш номер телефона</label>
                                <input type="text"/><br/>
                                <label htmlFor=""> email</label>
                                <input type="text"/> <br/>
                                <button onClick={this.props.DeleteActiveEditMode} >отправить</button>
                            </form>
                    </div>
                    </div>
        </>
    }
}


export default ModalWindow;