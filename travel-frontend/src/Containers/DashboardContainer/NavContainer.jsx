import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SignedIn from './SignedInContainer'
import SignedOut from './SignedOutContainer'

const NavBar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="band-logo">Home</Link>
                <SignedIn />
                <SignedOut />
            </div>
        </nav>
    )
}

export default NavBar;