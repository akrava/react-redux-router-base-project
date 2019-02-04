import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PageNotFound extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 className="errorPage">404: Page not found</h1>
                <p className="errorPage" style={{ marginBottom: '5px' }}>Go to <Link to="/" className="link-style">main</Link> page</p>
            </React.Fragment>
        );
    }
}

export default PageNotFound;
