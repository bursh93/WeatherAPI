import React from "react";
import "../../scss/main.css";
import swal from "sweetalert";
import {Field, reduxForm} from "redux-form";





let LoginForm=(props)=>{

    return <>


    <div className="popup">

        <div className="popup-content">


            <button  onClick={props.deletMode} className="popup-close">&times;</button>

    <form onSubmit={props.handleSubmit}>
        <div> <h4>Регистрация</h4>   </div>
        <div>
            <label htmlFor="">логин</label>
            <Field  name="login" component={"input"}/>
        </div>
        <div>
            <label htmlFor=""> пароль</label>
            <Field   name="password" component={"input"}/>
        </div>
        <div>

        </div>
        <button className="Registry_Button">отправить</button>
    </form>
        </div>
</div>
    </>
}


const LoginReduxForm=reduxForm({form:'loginForm  '})(LoginForm);
let ModalWindow=(props)=> {

    let Onsubmit=(values)=>{
        alert(values.login)
    }
        return (<div>

            <LoginReduxForm   onSubmit={Onsubmit}  deletMode={props.deletMode}/>
    </div>)

}


export default ModalWindow;