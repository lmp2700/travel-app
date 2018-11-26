import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

const SignedIn = () => {
    return (
        <ul className="right">
            <li><NavLink to='/'>New Trip</NavLink></li>
            <li><NavLink to='/'>Account</NavLink></li>
            <li><NavLink to='/'>Edit Trip</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating green lighten-1'>XX</NavLink></li>
        </ul>
    )
}

export default SignedIn;