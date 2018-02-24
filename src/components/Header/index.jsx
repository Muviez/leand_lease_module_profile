import React from 'react';

import { Link } from 'react-router'

function Header() {
    return (
        <div className='header'>
            <div className='container-fluid'>
                <div className='row justify-content-between align-items-center'>
                    <div className='col-md-auto col-sm-8'>
                        <div className='header_desc'>
                            <Link to='/' className='header_desc-logo'>ЛОГО</Link>
                            <p>Информация о товаре и магазине</p>
                            <a href='#'>8 (812) 532-46-28</a> <br/>
                            <p className='span'>c 9:00 до 19:00 по будням</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;