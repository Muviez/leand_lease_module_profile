import React from 'react';

// import FromLogin from '../FormLogErrors/index.jsx'

import Input from './InputLog.jsx'

function Login() {
    return (
        <div className='section-auth'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <form className='section-auth_form'>
                            <div className='form-group section-auth_form-headText'>
                                <h2>Вход</h2>
                            </div>
                            <div className='form-group section-auth_form-group'>
                                <label className='bmd-label-floating'>Login</label>
                                <Input type='email' name='login' />
                            </div>
                            <div className='form-group section-auth_form-group'>
                                <label className='bmd-label-floating'>Пароль</label>
                                <Input type='password' name='password' />
                                <button type='button' className='btn btn-primary confPass' data-toggle='modal' data-target='#exampleModal'>Забыли пароль?</button>
                            </div>
                            <button type='submit' className='btn btn-primary'>Войти</button>
                        </form>
                        <div className='modal fade' id='exampleModal' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
                            <div className='modal-dialog' role='document'>
                                <div className='modal-content'>
                                <div className='modal-header'>
                                    <h5 className='modal-title' id='exampleModalLabel'>Восстановить пароль</h5>
                                    <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                                    <span aria-hidden='true'>&times;</span>
                                    </button>
                                </div>
                                <div className='modal-body'>
                                    <form>
                                        <div class="form-group">
                                            <label>Email адрес</label>
                                            <input type="email" className="form-control" placeholder="Введите Email"/>
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
};

export default Login;