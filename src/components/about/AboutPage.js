import React, { Component } from 'react';

class AboutPage extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>react-redux-router-base-project</h1>
                <h2>Base web project using React framework</h2>
                <h3>#react, #redux, #react-router, #webpack, #babel, #express</h3>
                <p>To start project, do <code>npm i</code> and then <code>npm run dev</code></p>
                <hr/>
                <p>Ready to deploy on Heroku</p>
            </React.Fragment>
        );
    }
}

export default AboutPage;