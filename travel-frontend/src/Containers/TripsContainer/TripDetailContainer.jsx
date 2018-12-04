import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
// import EditTrip from './TripEditContainer'

// The behavior for Date objects stored in Firestore is going to change
// AND YOUR APP MAY BREAK.
// To hide this warning and ensure your app does not break, you need to add the
// following code to your app before calling any other Cloud Firestore methods:

//   const firestore = new Firestore();
//   const settings = {/* your settings... */ timestampsInSnapshots: true};
//   firestore.settings(settings);

// With this change, timestamps stored in Cloud Firestore will be read back as
// Firebase Timestamp objects instead of as system Date objects. So you will also
// need to update code expecting a Date to instead expect a Timestamp. For example:

//   // Old:
//   const date = snapshot.get('created_at');
//   // New:
//   const timestamp = snapshot.get('created_at');
//   const date = timestamp.toDate();

// Please audit all existing usages of Date when you enable the new behavior. In a
// future release, the behavior will change to the new behavior, so if you do not
// follow these steps, YOUR APP MAY BREAK.

// <EditTrip deleteTrip={this.deleteTrip} /> 
// <button onClick={this.props.editTrip.bind(null, this.props.trip_id)}>Edit Trip</button> &nbsp;
// <button onClick={this.props.deleteComment.bind(null, this.props.trip_id)}>Delete Trip</button>

const TripDetails = (props) => {
    const { trip, auth } = props;
    if (!auth.uid) return <Redirect to='/login' />
    // console.log(props)
    // onSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('edit button')
    // }
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
                    <div className="buttons">
                        <button className="waves-effect waves-light btn">Edit</button> &nbsp;
                        <button className="waves-effect waves-light btn">Delete</button>
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