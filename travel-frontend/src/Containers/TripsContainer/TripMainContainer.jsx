import React from 'react';
// import moment from 'moment';

// <p className="grey-text">{moment(trip.createdAt.toDate()).format("dddd, MMMM Do YYYY")}</p>

const TripMain = ({ trip }) => {
    return (
        <div className="card z-depth-0">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{trip.title}</span>
                <p>Posted by {trip.authorFirstName} {trip.authorLastName}</p>
                <p>Location: {trip.location}</p>
                <p>Start Date: {trip.start_date}</p>
                <p>Trip Details: {trip.content}</p>
            </div>
        </div>
    )
}

export default TripMain;