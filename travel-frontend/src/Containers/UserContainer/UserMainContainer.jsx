import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { editUser } from '../../store/actions/userActions'

class UserMain extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: ''
        }
    }
    editedUser = async () => {
        const editedUser = await fetch('/users', {
            method: 'PUT'
        })
        const editedUserParsed = await editedUser.json;
        // this.setState({ user: this.setState.user.filter((user)) })
    }
    deletedUser = async () => {
        const deletedUser = await fetch('/users', {
            method: 'DELETE'
        })
        const deletedUserParsed = await deletedUser.json;
        // this.setState({ user: this.setState.user.filter((user)) })
    }
    handleChange = (e) => {
        this.setState({
            [e.currentTarget.id]: e.currentTarget.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.editUser(this.state)
    }
    render() {
        const { auth } = this.props
        if (!auth.uid) return <Redirect to='/login' />
        return (
            <div className="container">

                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="gray-text text-darken-3">Update Your Account</h5>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="title" placeholder="" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" placeholder="" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="Email">Email</label>
                        <input type="email" placeholder="" min="none" max="none"></input>
                    </div>
                    <div className="user-buttons">
                        <button className="btn pink lighten-1 z-depth-0">Upload Photo</button> &nbsp;
                        <button className="btn pink lighten-1 z-depth-0" value="upload">Edit Account</button>
                    </div>

                    <div className="input-field">
                        <label htmlFor="documents">Important Documents</label>
                        <br />
                        <div className="documents">
                            <p>Passport: </p>
                            <p>Passport Card: </p>
                            <p>Driver's License: </p>
                            <button className="btn pink lighten-1 z-depth-0" value="upload">Upload Documents</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        editUser: (user) => dispatch(editUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMain);