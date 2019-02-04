import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Clock extends Component {
    static mapStateToProps(store) {
        return { clock: store.clock };
    }

    render() {
        const { clock } = this.props;
        return (
            <div className="time">
               {clock.isViewing &&
                <div>
                    ///
                </div>}
            </div>
        );
    }
}

Clock.propTypes = {
    clock: PropTypes.object.isRequired,
};

export default withRouter(connect(Clock.mapStateToProps)(Clock));