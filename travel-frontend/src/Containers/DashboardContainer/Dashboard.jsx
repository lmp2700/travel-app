import React, { Component } from 'react';
import Notifications from './Notifications';
import TripsList from '../TripsContainer/TripListContainer';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
    render() {
        // console.log(this.props)
        const { trips, auth, notifications } = this.props;
        if (!auth.uid) return <Redirect to='/login' />
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col sm12 m6">
                        <TripsList trips={trips} />
                    </div>
                    <div className="col sm12 m5 offset-m1">
                        <Notifications notifications={notifications} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        trips: state.firestore.ordered.trips,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'trips', orderBy: ['createdAt', 'desc'], limit: 3 },
        { collection: 'notifications', limit: 5, orderBy: ['time', 'desc'] }
    ]),
)(Dashboard);