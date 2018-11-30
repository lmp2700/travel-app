import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../../store/actions/authActions';

const SignedIn = (props) => {
    return (
        <ul className="right">
            <li><NavLink to='/create'>New Trip</NavLink></li>
            <li><NavLink to='/'>Account</NavLink></li>
            <li><NavLink to='/'>Edit Trip</NavLink></li>
            <li><a href="true" onClick={props.logOut}>Log Out</a></li>
            <li><NavLink to='/' className='btn btn-floating green lighten-1'>
                {props.profile.initials}
            </NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => dispatch(logOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedIn);