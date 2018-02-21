import React, { Component } from 'react';

function FormRegister() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form className="section-auth_form">
                        <div className="form-group section-auth_form-headText">
                            <h2>Регистрация</h2>
                        </div>
                        <div className="form-group section-auth_form-group">
                            <label className="bmd-label-floating">Login</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group section-auth_form-group">
                            <label className="bmd-label-floating">Email адрес</label>
                            <input type="email" className="form-control" />
                        </div>							
                        <div className="form-group section-auth_form-group">
                            <label className="bmd-label-floating">Пароль</label>
                            <input type="password" className="form-control" />
                        </div>							
                        <div className="form-group section-auth_form-group">
                            <label className="bmd-label-floating">Подтверждение пароля</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div className="form-check section-auth_form-check">
                            <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox" value="" />
                                    Вы даете согласие на обработу персональных данных
                                    <span className="form-check-sign">
                                            <span className="check"></span>
                                    </span>
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormRegister;