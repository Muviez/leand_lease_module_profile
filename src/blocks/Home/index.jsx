import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="content">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="content_button">
                            <a href="/register" className="btn btn-primary">Регистрация</a>
                            <a href="/login" className="btn btn-primary">Войти</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;