import React from 'react';

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
                                <label htmlFor='exampleInputEmail1' className='bmd-label-floating'>Login</label>
                                <input type='email' className='form-control' id='exampleInput1' />
                            </div>
                            <div className='form-group section-auth_form-group'>
                                <label htmlFor='exampleInputPassword1' className='bmd-label-floating'>Пароль</label>
                                <input type='password' className='form-control' id='exampleInputPassword1' />
                            </div>
                            <button type='submit' className='btn btn-primary'>Войти</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;