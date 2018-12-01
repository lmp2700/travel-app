import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const TripDetails = (props) => {
    const { trip, auth } = props;
    if (!auth.uid) return <Redirect to='/login' />
    // console.log(props)
    if (trip) {
        return (
            <div className="container section trip-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{trip.title}</span>
                        <p>{trip.content}</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by {trip.authorFirstName} {trip.authorLastName}</div>
                        <div>{moment(trip.createdAt.toDate()).format("dddd, MMMM Do YYYY")}</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container center">
                <p>Loading project...</p>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    // console.log(state)
    const id = ownProps.match.params.id;
    const trips = state.firestore.data.trips;
    const trip = trips ? trips[id] : null
    return {
        trip: trip,
        auth: state.firebase.auth
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'trips' }
    ])
)(TripDetails);