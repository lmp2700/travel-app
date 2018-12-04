import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

// class editUser extends Component {
//     constructor() {
//         super();
//         this.state = {
//             firstName: '',
//             lastName: '',
//             email: ''
//         }
//     }
//     render() {
const editUser = (props) => {
    const { user, auth } = this.props;
    if (!auth.uid) return <Redirect to='/login' />

    if (user) {
        return (
            <div>
                <div className="container section trip-details">
                    <div className="card z-depth-0">
                        <div className="card-content">
                            <span className="card-title">Edit Profile</span>
                        </div>
                        <div className="card-action grey lighten-4 grey-text">
                            <div>{user.firstName}: </div>
                            <div>{user.lastName}: </div>
                            <div>{user.email}: </div>
                        </div>
                        <div className="buttons">
                            <button className="waves-effect waves-light btn">Edit</button> &nbsp;
                            <button className="waves-effect waves-light btn">Delete Account</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container center">
                <p>Unable to Edit Profile Right Now</p>
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

export default compose(connect(mapStateToProps), firestoreConnect([{ collection: 'users' }]))(editUser);