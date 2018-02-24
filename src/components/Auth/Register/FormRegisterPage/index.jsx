import React from 'react';

import Input from './InputReg.jsx'

function Register() {
    return (
        <div className='section-auth'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <form className='section-auth_form'>
                            <div className='form-group section-auth_form-headText'>
                                <h2>Регистрация</h2>
                            </div>
                            <div className='form-group bmd-form-group section-auth_form-group'>
                                <label className='bmd-label-floating'>Login</label>
                                <Input type='text' name='login'/>
                            </div>
                            <div className='form-group bmd-form-group section-auth_form-group'>
                                <label className='bmd-label-floating'>Email адрес</label>
                                <Input type='email' name='email'/>
                            </div>
                            <div className='form-group bmd-form-group section-auth_form-group'>
                                <label className='bmd-label-floating'>Пароль</label>
                                <Input type='password' name='password'/>
                            </div>							
                            <div className='form-group bmd-form-group section-auth_form-group'>
                                <label className='bmd-label-floating'>Подтверждение пароля</label>
                                <Input type='password' name='confirmPassword'/>
                            </div>
                            <div className='form-check section-auth_form-check'>
                                <label className='form-check-label'>
                                        <input className='form-check-input' type='checkbox' value='' />
                                        Вы даете согласие на обработу персональных данных
                                        <span className='form-check-sign'>
                                                <span className='check'></span>
                                        </span>
                                </label>
                            </div>
                            <button type='submit' className='btn btn-primary'>Зарегистрироваться</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;