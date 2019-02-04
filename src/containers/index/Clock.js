import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { showClock } from './../../actions/showClock';

class Clock extends Component {
    static mapStateToProps(store) {
        return { clock: store.clock };
    }

    static mapDispatchToProps(dispatch) {
        return { animate: () => dispatch(showClock()) };
    }

    render() {
        const { clock } = this.props;
        return (
            <React.Fragment>
                <div className="time">
                <p>Press here, to <a onClick={this.props.animate}>show</a> this animation</p>
                {clock.isViewing &&
                    <div>
                        { 5 - clock.seconds } left
                    </div>}
                </div>
            </React.Fragment>
        );
    }
}

Clock.propTypes = {
    clock: PropTypes.object.isRequired,
    animate: PropTypes.func.isRequired
};

export default withRouter(connect(Clock.mapStateToProps, Clock.mapDispatchToProps)(Clock));