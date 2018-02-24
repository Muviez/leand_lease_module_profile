import React from 'react';

import { Link } from 'react-router'

function Footer() {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='row justify-content-around'>
                    <div className='col-md-2 col-sm-8 col-xs-6'>
                        <h4>Покупатели</h4>
                        <ul className='footer_menu'>
                            <li><a href='#'>О нас</a></li>
                            <li><a href='#'>Доставка и оплата</a></li>
                            <li><a href='#'>Возврат/Обмен</a></li>
                            <li><a href='#'>Контакты</a></li>
                            <li><a href='#'>Идеи подарков</a></li>
                            <li><a href='#'>Календарь праздников</a></li>
                        </ul>
                    </div>
                    <div className='col-md-auto col-sm-4 col-xs-6'>
                        <h4>Личный кабинет</h4>
                        <ul className='footer_menu'>
                            <li><Link to='/login'>Вход</Link></li>
                            <li><Link to='/register'>Регистрация</Link></li>
                        </ul>
                    </div>
                    <div className='col-md-auto col-sm-8 col-xs-6'>
                    <h4>Документы</h4>
                        <ul className='footer_menu'>
                            <li><a href='#'>Пользовательское соглашение</a></li>
                            <li><a href='#'>Политика конфиденциальности</a></li>
                        </ul>
                    </div>
                    <div className='col-md-auto col-sm-4 col-xs-6'>
                        <h4>Расскажи о нас <br/> в соц.сетях</h4>
                        <ul className='footer_soc-icon'>
                            <li><a href='#'><i className='fa fa-vk'></i></a></li>
                            <li><a href='#'><i className='fa fa-facebook'></i></a></li>
                            <li><a href='#'><i className='fa fa-instagram'></i></a></li>
                            <li><a href='#'><i className='fa fa-twitter'></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;