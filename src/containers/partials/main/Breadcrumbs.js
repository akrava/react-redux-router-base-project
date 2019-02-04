import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';

// used code from here: https://www.npmjs.com/package/react-router-breadcrumbs-hoc
 
// map & render your breadcrumb components however you want.
// each `breadcrumb` has the props `key`, `location`, and `match` included!
const Breadcrumbs = ({ breadcrumbs }) => (
    <React.Fragment>
        <ol className="breadcrumb">
            {breadcrumbs.map((breadcrumb, index) => (
                <li className={`breadcrumb-item ${index === breadcrumbs.length - 1 && "active"}`} key={breadcrumb.key}>
                    {index === breadcrumbs.length - 1 ? 
                        breadcrumb
                        : 
                        <NavLink to={breadcrumb.props.match.url}>
                        { breadcrumb }
                        </NavLink>
                    }
                </li>
            ))}
        </ol>
    </React.Fragment>
);

Breadcrumbs.propTypes = {
    breadcrumbs: PropTypes.any
};
 
export default withBreadcrumbs()(Breadcrumbs);