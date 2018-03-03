import React from 'react';

import { Link } from 'react-router'

function Header() {
    return (
        <nav className="navbar-transparent navbar-absolute navbar navbar-expand-lg">
            <div className="container">
                <div className="navbar-wrapper">
                    <div className="navbar-toggle">
                    <button className="navbar-toggler" data-target="#navbarNav" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-bar bar1"></span>
                            <span className="navbar-toggler-bar bar2"></span>
                            <span className="navbar-toggler-bar bar3"></span>
                        </button>
                    </div>
                    <Link className="navbar-brand header_desc-logo" to="/">Lendlease</Link>
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="ml-auto navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            <i className="now-ui-icons design_bullet-list-67"></i>
                            Dashboard
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/register" className="nav-link">
                            <i className="now-ui-icons tech_mobile"></i>
                            Register
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">
                            <i className="now-ui-icons users_circle-08"></i>
                            Login
                        </Link>
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link" href="#/pages/pricing-page">
                            <i className="now-ui-icons business_money-coins"></i>
                            Pricing
                        </a>
                    </li> */}
                    <li className="nav-item">
                        <Link to="/userprofile" className="nav-link">
                            <i className="now-ui-icons ui-1_lock-circle-open"></i>
                            Profile
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
}

export default Header;

{/* <div className='header'>
            <div className='container-fluid'>
                <div className='row justify-content-between align-items-center'>
                    <div className='col-md-auto col-7'>
                        <div className='header_desc'>
                            <Link to='/' className='header_desc-logo'>lendlease</Link>
                        </div>
                    </div>
                    <div className='col-md-auto col-5'>
                        <div className='header_desc'>
                            <a href='#'>8 (812) 532-46-28</a> <br/>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}