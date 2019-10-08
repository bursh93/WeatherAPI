import React from "react";
import "../../scss/main.css";
import swal from "sweetalert";


class ModalWindow extends React.Component {
    state = {
        SettingeditMode: false,
    }



    swalAlert=()=>{
        swal("Good job!", "You clicked the button!", "success");
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
                                <button onClick={this.swalAlert} >отправить</button>
                            </form>
                    </div>
                    </div>
        </>
    }
}


export default ModalWindow;