import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { goBack } from '../../../actions/redirect';

class GoBack extends Component {
    static mapStateToProps() {
        return { };
    }

    static mapDispatchToProps(dispatch) {
        return { historyGoBack: () => dispatch(goBack()) };
    }

    render() {
        return (
            <a onClick={this.props.historyGoBack}>Go back</a>
        );
    }
}

GoBack.propTypes = {
    historyGoBack: PropTypes.func.isRequired,
};

export default withRouter(connect(GoBack.mapStateToProps, GoBack.mapDispatchToProps)(GoBack));