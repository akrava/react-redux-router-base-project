import React, { Component } from 'react';
import Clock from './../../containers/index/Clock';

class HomePage extends Component {
    render() {
        return (
            <React.Fragment>
                <p>Show clock for 5 second:</p>
                <Clock />
                <p>Just a simple action</p>
            </React.Fragment>
        );
    }
}

export default HomePage;