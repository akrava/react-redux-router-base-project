import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header className="navbar">
                <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
                    <Link className="navbar-brand mx-auto ml-md-0 mr-md-3" to="/">
                        Hello World
                    </Link>
                    <Link className="navbar-brand mx-auto ml-md-0 mr-md-3" to="/about">
                        About
                    </Link>
                </nav>
            </header>
        );
    }
}

export default Header;