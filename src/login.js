import React, { form, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useParams,negative } from 'react-router-dom';
import './login.css'
import { BrowserRouter, Routes ,Route, useNavigate} from 'react-router-dom';

export function Login(props) {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);


    function handlePass(event){
        const id = document.login_form.id.value;

        props.loginfunction(id);

        alert(id +"さん" + '名前の入力が完了しました')
        navigate("/");
    }


    return (
        <div className="login-sence">
            <h1 className="login-sub-title">名前を登録してください</h1>
            <div className="form-wrapper">

                <form name="login_form">
                    <center>
                        <div className="name-form">
                            <label>お名前<br />
                                <input type="text" placeholder="名前を入力(8文字以下)" name="id" size="33" />
                            </label>
                        </div>
                    </center>

                    <div className="button-panel">
                        <button type="button" className="button" onClick={handlePass} >登録</button>
                    </div>
                </form>

            </div>
        </div>
    );
}
