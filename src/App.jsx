import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Link } from 'react-router';

import Header from './components/Header/index.jsx'
import Home from './components/Home/index.jsx'
import Footer from './components/Footer/index.jsx'

class App extends Component {
    render() {
        return(
            <div className='layout'>
                <Header />
                    {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default App;