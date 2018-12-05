import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { editUser } from '../../store/actions/userActions';


class EditUser extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.currentTarget.id]: e.currentTarget.value
        })
    }
    render() {
        const { user, auth } = this.props;
        if (!auth.uid) return <Redirect to='/login' />
        return (
            <div>
                <div className="container section trip-details">
                    <div className="card z-depth-0">
                        <div className="card-content">
                            <span className="card-title">Edit Profile</span>
                        </div>
                        <div className="card-action grey lighten-4 grey-text">
                            <div>First Name: <input type="text" placeholder={user} onChange={this.handleChange}></input></div>
                            <div>Last Name: <input type="text" placeholder={user} onChange={this.handleChange}></input></div>
                            <div>Email: <input type="email" placeholder={user} onChange={this.handleChange}></input></div>
                        </div>
                        <div className="buttons">
                            <button className="waves-effect waves-light btn">Edit Account</button> &nbsp;
                            <button className="waves-effect waves-light btn">Delete Account</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const users = state.firestore.data.users;
    const user = users ? users[id] : null
    return {
        user: user,
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        editUser: (user) => dispatch(editUser(user))
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), firestoreConnect([{ collection: 'users' }]))(EditUser);