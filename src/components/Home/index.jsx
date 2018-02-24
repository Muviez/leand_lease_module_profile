import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Link } from 'react-router';

function Home() {
    return (
        <div className='content'>
            <div className='container'>
                <div className='row justify-content-center align-items-center'>
                    <div className='content_button'>
                        <Link to='/register' className='btn btn-primary'>Регистрация</Link>
                        <Link to='/login' className='btn btn-primary'>Войти</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;