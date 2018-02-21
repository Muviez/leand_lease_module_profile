import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

class App extends Component {
    render() {
        return(
            <div className="layout">
                <Header />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default App;