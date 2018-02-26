import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

// import FromLogin from '../FormLogErrors/index.jsx'

import Input from './InputLog.jsx'

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            State: {
                passwordState: "",
                loginState: ""
            },
            login: {
                password: "",
                login: ""
            },
            restore: {
                email: "",
                emailState: ""
            },
            loginError: "",
            passwordError: ""
        };
    }

    loginUser(e){
        var State = this.state.State;
        this.state.login.login = e.target.value;
        if(/^[a-zA-Z][a-zA-Z0-9-_\.]{2,20}$/.test(e.target.value) ){
            State["loginState"] = "has-success";
        } else {
            State["loginState"] = "has-danger";
        }
        this.setState({State});
    }

    loginPassword(e){
        var State = this.state.State;
        this.state.login.password = e.target.value;
        if(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(e.target.value)){
            State["passwordState"] = "has-success";
        } else {
            State["passwordState"] = "has-danger";
        }
        this.setState({State});
    }

    loginSubmit = event => {
        event.preventDefault();

        var State = this.state.State;
        
        var userData = this.state.login;

        console.log(userData);

        if(State["loginState"] !== "has-success")
            State["loginState"] = "has-danger";
        if(State["passwordState"] !== "has-success")
            State["passwordState"] = "has-danger";

        this.setState({State});

        if(State["loginState"] === "has-success" && State["passwordState"] === "has-success") {
            axios.post('http://127.0.0.1:5000/api/auth/', userData).then(
                (response) => {
                    console.log(response);
                    // if(true) { //response.data[0].username === login["login"]
                    //     console.log("login is success");
                    // }
                    // else {
                    //     console.log("login is failed");
                    //     this.setState({ loginError: "login is failed" }, () => console.log(this.state.loginError));
                    // }

                    // if(true) { //response.data[0].email === login["password"]
                    //     console.log("password is success");
                    // }
                    // else {
                    //     console.log("password is failed");
                    //     this.setState({ passwordError: "password is failed" }, () => console.log(this.state.passwordError));
                    //     //console.log(errors["passwordError"]);
                    // }
                }
            )
            .catch(
                (err) => {
                    console.log(err);
                }
            );
        }
    }

    restoreEmail(e){
        var restore = this.state.restore;
        restore["email"] = e.target.value;
        var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([A-z0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(emailRex.test(e.target.value)){
            restore["emailState"] = "has-success";
        } else {
            restore["emailState"] = "has-danger";
        }
        this.setState({restore});
    }

    restoreSubmit = event => {
        event.preventDefault();
        var restore = this.state.login;
        if(restore["emailState"] !== "has-success")
            restore["emailState"] = "has-danger";
        this.setState({restore});
        if(restore["emailState"] === "has-success")
            console.log("all good");
    }

    render(){
        return (
            <div className='content'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-7 col-lg-5 col-sm-9 col-10'>
                            <form onSubmit={this.loginSubmit} className='section-auth_form'>
                                <div className='form-group section-auth_form-headText'>
                                    <h2>Вход</h2>
                                </div>
                                <div className={"input-group " + this.state.State.loginState}>
                                    <div className="input-group-addon">
                                        <i className="now-ui-icons icons-form users_circle-08"></i>
                                    </div>
                                    <input 
                                        type="text" 
                                        placeholder="Username" 
                                        className="form-control"
                                        onChange={(e) => this.loginUser(e)}
                                    />
                                </div>
                                <p>{this.state.loginError}</p>
                                <div className={"input-group " + this.state.State.passwordState}>
                                    <div className="input-group-addon">
                                        <i className="now-ui-icons ui-1_lock-circle-open"></i>
                                    </div>
                                    <input 
                                        type="password" 
                                        placeholder="Password" 
                                        className="form-control"
                                        onChange={(e) => this.loginPassword(e)}
                                    />
                                    
                                </div>
                                <p>{this.state.passwordError}</p>
                                <button type='submit' className='btn-round btn btn-primary btn-lg btn-block btn-login'>Войти</button>
                                <div className="pull-left">
                                    <h6>
                                        <Link to="/register" className="link footer-link">Create Account</Link>
                                    </h6>
                                </div>
                                <div className="pull-right">
                                    <h6>
                                        <a href='#' className="link footer-link" data-toggle="modal" data-target="#exampleModal">Need Help?</a>
                                    </h6>
                                </div>
                            </form>
                            <div className='modal fade' id='exampleModal' tabIndex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
                                <div className='modal-dialog' role='document'>
                                    <div className='modal-content'>
                                        <div className='modal-header'>
                                            <h5 className='modal-title'>Восстановить пароль</h5>
                                            <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                                            <span aria-hidden='true'>&times;</span>
                                            </button>
                                        </div>
                                        <div className='modal-body'>
                                            <form onSubmit={this.restoreSubmit}>
                                                <div className={"form-group " + this.state.restore.emailState}>
                                                    <label>Email адрес</label>
                                                    <input type="email" 
                                                        className="form-control" 
                                                        placeholder="Введите Email"
                                                        onChange={(e) => this.restoreEmail(e)}
                                                    />
                                                </div>
                                                <button type='submit' className='btn btn-primary confPass'>Отправить</button>
                                            </form>
                                        </div>
                                        <div className='modal-footer'>
                                            <button type='button' className='btn btn-secondary' data-dismiss='modal'>Закрыть</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );        
    }
};

export default Login;