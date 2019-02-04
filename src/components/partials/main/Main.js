import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import ErrorBoundary from './../../special/ErrorBoundary';
import HomePage from '../../index/HomePage';
import AboutPage from '../../about/AboutPage';
import PageNotFound from '../../special/PageNotFound';
import Breadcrumbs from './../../../containers/partials/main/Breadcrumbs';

class Main extends Component {
  render() {
    return (
        <main className="container mt-4" role="main">
            <Breadcrumbs />
            <ErrorBoundary>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                        <Route path='/about' component={AboutPage}/>
                        <Route component={PageNotFound}/>
                </Switch>
            </ErrorBoundary>
        </main>
    );
  }
}

export default Main;