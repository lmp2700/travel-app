import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

const SignedOut = () => {
    return (
        <ul className="right">
            <li><NavLink to='/login'>Log In</NavLink></li>
            <li><NavLink to='/register'>Sign Up</NavLink></li>
        </ul>
    )
}

export default SignedOut;