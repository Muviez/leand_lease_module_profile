import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

class Layout extends Component {
    render() {
        return (
            <div className="layout">
                <div className="header">
                    
                </div>
                
                <div className="content">
                    {this.props.children}
                </div>
                <div className="footer">

                </div>
            </div>
        );
    }
}

export default Layout;